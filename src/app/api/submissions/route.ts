import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 3000;
const MAX_PHOTO_BYTES = 1_000_000;
const notificationRecipient = "dms.designart@gmail.com";
const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

type SubmissionType = "application" | "job_application" | "partnership" | "contact";
type Values = Record<string, string>;

function value(form: FormData, key: string): string {
  const field = form.get(key);
  return typeof field === "string" ? field.trim() : "";
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function secureConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_APPLICATIONS_BUCKET;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.SUBMISSIONS_FROM_EMAIL;
  if (
    process.env.SUBMISSIONS_ENABLED !== "true" ||
    !url ||
    !key ||
    !bucket ||
    !turnstileSecret ||
    !turnstileSiteKey ||
    !siteUrl ||
    !resendApiKey ||
    !fromEmail
  ) {
    return null;
  }
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol !== "https:" && parsedUrl.hostname !== "localhost") return null;
    new URL(siteUrl);
  } catch {
    return null;
  }
  return {
    url: url.replace(/\/$/, ""),
    key,
    bucket,
    turnstileSecret,
    siteUrl,
    resendApiKey,
    fromEmail,
  };
}

async function sendSubmissionNotification(
  id: string,
  type: SubmissionType,
  values: Values,
  photoPaths: string[],
  config: NonNullable<ReturnType<typeof secureConfig>>,
) {
  const details = Object.entries(values)
    .map(([field, item]) => `${field}: ${item || "(not provided)"}`)
    .join("\n");
  const photos =
    photoPaths.length > 0
      ? `\nApplicant photos are stored in the private bucket. Submission ID: ${id}`
      : "";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `submission-${id}`,
    },
    body: JSON.stringify({
      from: config.fromEmail,
      to: [notificationRecipient],
      subject: `New CamerStars ${type.replace("_", " ")} submission`,
      text: `Submission ID: ${id}\nType: ${type}\n\n${details}${photos}`,
    }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) {
    console.error("Submission notification email failed", response.status);
    throw new Error("The submission notification email could not be sent.");
  }
}

async function verifyCaptcha(token: string, secret: string): Promise<boolean> {
  if (!token || token.length > 4096) return false;
  const body = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) {
    console.error("Turnstile verification returned an error status", response.status);
    return false;
  }
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function uploadPrivatePhoto(
  file: File,
  folderId: string,
  index: number,
  config: NonNullable<ReturnType<typeof secureConfig>>,
): Promise<string> {
  const extension = allowedTypes.get(file.type);
  if (!extension || file.size === 0 || file.size > MAX_PHOTO_BYTES) {
    throw new Error("Each photo must be a JPG, PNG, or WebP no larger than 1 MB.");
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const isJpeg = file.type === "image/jpeg" && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const isPng =
    file.type === "image/png" &&
    bytes.subarray(0, 8).join(",") === "137,80,78,71,13,10,26,10";
  const isWebp =
    file.type === "image/webp" &&
    String.fromCharCode(...bytes.subarray(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.subarray(8, 12)) === "WEBP";
  if (!isJpeg && !isPng && !isWebp) throw new Error("A selected photo does not match its file type.");

  const objectName = `${folderId}/${index}-${randomUUID()}.${extension}`;
  const safePath = objectName.split("/").map(encodeURIComponent).join("/");
  const response = await fetch(
    `${config.url}/storage/v1/object/${encodeURIComponent(config.bucket)}/${safePath}`,
    {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "Content-Type": file.type,
        "x-upsert": "false",
      },
      body: bytes,
      signal: AbortSignal.timeout(15000),
    },
  );
  if (!response.ok) {
    console.error("Private application photo upload failed", response.status);
    throw new Error("Secure photo storage is unavailable. Please try again later.");
  }
  return objectName;
}

async function removePrivatePhotos(paths: string[], config: NonNullable<ReturnType<typeof secureConfig>>) {
  for (const path of paths) {
    const safePath = path.split("/").map(encodeURIComponent).join("/");
    try {
      const response = await fetch(
        `${config.url}/storage/v1/object/${encodeURIComponent(config.bucket)}/${safePath}`,
        {
          method: "DELETE",
          headers: { apikey: config.key, Authorization: `Bearer ${config.key}` },
          signal: AbortSignal.timeout(5000),
        },
      );
      if (!response.ok) console.error("Temporary application photo cleanup failed", response.status);
    } catch (error) {
      console.error("Temporary application photo cleanup could not reach storage", error);
    }
  }
}

function collectValues(form: FormData, type: SubmissionType): Values {
  const fields: Record<SubmissionType, string[]> = {
    application: [
      "fullName",
      "age",
      "email",
      "country",
      "city",
      "whatsapp",
      "source",
      "ringLight",
      "privateSpace",
      "experience",
      "fullTime",
      "laptop",
      "role",
    ],
    job_application: [
      "fullName",
      "whatsapp",
      "email",
      "country",
      "city",
      "role",
      "fullTime",
      "experience",
      "adultConsent",
    ],
    partnership: ["name", "email", "phone", "city", "expertise", "investment", "reason"],
    contact: ["name", "email", "phone", "skype", "message"],
  };
  return Object.fromEntries(
    fields[type].map((field) => [field, value(form, field)]),
  );
}

function validate(values: Values, type: SubmissionType): string | null {
  if (!validEmail(values.email ?? "")) return "Enter a valid email address.";
  if (type === "application") {
    const age = Number(values.age);
    if (!Number.isInteger(age) || age < 18 || age > 120) {
      return "Applicants must be at least 18 years old.";
    }
    const required = ["fullName", "country", "city", "whatsapp", "source", "ringLight", "privateSpace", "experience", "fullTime", "laptop"];
    if (required.some((key) => !values[key])) return "Complete all required application fields.";
  }
  if (type === "job_application") {
    const required = ["fullName", "whatsapp", "country", "city", "role", "fullTime", "experience"];
    if (required.some((key) => !values[key])) return "Complete all required job application fields.";
    const roles = [
      "Cam models",
      "Content creators",
      "Team leader / recruiter",
      "TikTok marketing streamer",
      "Chatter",
    ];
    if (!roles.includes(values.role)) return "Choose a role from the current CamerStars openings.";
    if (values.adultConsent !== "true") return "Confirm that you are at least 18 years old.";
  }
  if (type === "partnership") {
    const required = ["name", "phone", "city", "expertise", "investment", "reason"];
    if (required.some((key) => !values[key])) return "Complete all required partnership fields.";
    if (!/^\d+(\.\d{1,2})?$/.test(values.investment)) return "Enter a valid investment amount.";
  }
  if (type === "contact" && (!values.name || !values.phone || !values.message)) {
    return "Complete all required contact fields.";
  }
  const limits: Record<string, number> = {
    fullName: 180,
    name: 180,
    age: 3,
    email: 254,
    country: 120,
    city: 120,
    whatsapp: 80,
    source: 180,
    ringLight: 10,
    privateSpace: 10,
    experience: MAX_FIELD_LENGTH,
    fullTime: 10,
    laptop: 10,
    role: 120,
    phone: 80,
    expertise: MAX_FIELD_LENGTH,
    investment: 20,
    reason: MAX_FIELD_LENGTH,
    skype: 180,
    message: MAX_FIELD_LENGTH,
    adultConsent: 10,
  };
  if (Object.entries(values).some(([key, item]) => item.length > (limits[key] ?? MAX_FIELD_LENGTH))) {
    return "One or more fields are too long.";
  }
  return null;
}

export async function POST(request: Request) {
  const config = secureConfig();
  if (!config) {
    return NextResponse.json(
      {
        message:
          "Secure submissions are not configured yet. Your information has not been submitted; please contact CamerStars directly.",
      },
      { status: 503 },
    );
  }

  const origin = request.headers.get("origin");
  const expectedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin || !expectedOrigin || new URL(expectedOrigin).origin !== origin) {
    return NextResponse.json({ message: "This submission could not be verified." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 3_000_000) {
    return NextResponse.json({ message: "The submitted form is too large." }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch (error) {
    console.error("Application form could not be parsed", error);
    return NextResponse.json({ message: "The submitted form could not be read." }, { status: 400 });
  }

  if (value(form, "website")) {
    return NextResponse.json({ message: "This submission could not be verified." }, { status: 400 });
  }

  const typeValue = value(form, "type");
  if (
    typeValue !== "application" &&
    typeValue !== "job_application" &&
    typeValue !== "partnership" &&
    typeValue !== "contact"
  ) {
    return NextResponse.json({ message: "Unknown submission type." }, { status: 400 });
  }
  const type: SubmissionType = typeValue;

  let captchaIsValid = false;
  try {
    captchaIsValid = await verifyCaptcha(value(form, "cf-turnstile-response"), config.turnstileSecret);
  } catch (error) {
    console.error("Turnstile verification could not be completed", error);
    return NextResponse.json(
      { message: "Spam protection is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }
  if (!captchaIsValid) {
    return NextResponse.json({ message: "Complete the spam-protection check and try again." }, { status: 400 });
  }

  const values = collectValues(form, type);
  const validationError = validate(values, type);
  if (validationError) return NextResponse.json({ message: validationError }, { status: 400 });
  if (value(form, "consent") !== "true") {
    return NextResponse.json({ message: "Consent is required before submitting." }, { status: 400 });
  }

  const id = randomUUID();
  const photoPaths: string[] = [];
  if (type === "application") {
    const photos = form.getAll("photos").filter((file): file is File => file instanceof File && file.size > 0);
    if (photos.length !== 2) {
      return NextResponse.json({ message: "Please attach exactly two photos." }, { status: 400 });
    }
    try {
      for (let index = 0; index < photos.length; index += 1) {
        photoPaths.push(await uploadPrivatePhoto(photos[index], id, index + 1, config));
      }
    } catch (error) {
      await removePrivatePhotos(photoPaths, config);
      if (error instanceof Error && error.message.startsWith("Each photo")) {
        return NextResponse.json({ message: error.message }, { status: 400 });
      }
      if (error instanceof Error && error.message.startsWith("A selected photo")) {
        return NextResponse.json({ message: error.message }, { status: 400 });
      }
      if (error instanceof Error) {
        return NextResponse.json({ message: error.message }, { status: 502 });
      }
      console.error("Private photo upload failed for an unknown reason");
      return NextResponse.json({ message: "Secure photo storage is unavailable." }, { status: 502 });
    }
  }

  const submission = {
    id,
    type,
    payload: values,
    consent: true,
    private_file_paths: photoPaths,
  };
  try {
    const response = await fetch(`${config.url}/rest/v1/website_submissions`, {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) {
      console.error("Submission record could not be stored", response.status);
      await removePrivatePhotos(photoPaths, config);
      return NextResponse.json(
        { message: "We could not securely save your submission. Please try again later." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Submission storage could not be reached", error);
    await removePrivatePhotos(photoPaths, config);
    return NextResponse.json(
      { message: "Secure storage could not be reached. Your submission was not completed." },
      { status: 502 },
    );
  }

  try {
    await sendSubmissionNotification(id, type, values, photoPaths, config);
  } catch (error) {
    console.error("Submission was stored but its email notification failed", error);
    return NextResponse.json(
      {
        message:
          "Your submission was saved, but CamerStars could not be notified by email. Please contact CamerStars before submitting again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Submission received." }, { status: 201 });
}
