"use client";

import Script from "next/script";
import { type FormEvent, useState } from "react";
import Link from "next/link";

type FormKind = "application" | "job_application" | "partnership" | "contact";

function TurnstileField() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey) {
    return (
      <p className="form-hint">
        Spam protection is not configured in this environment. Submissions will remain unavailable
        until the secure service is set up.
      </p>
    );
  }

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div aria-label="Spam protection verification" className="cf-turnstile" data-sitekey={siteKey} />
    </>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required = true,
  wide = false,
  placeholder,
  min,
  max,
  defaultValue,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: string;
}) {
  return (
    <div className={wide ? "form-field form-field-wide" : "form-field"}>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={name === "age" ? "off" : undefined}
        id={id}
        max={max}
        min={min}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  name,
  options,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <select defaultValue="" id={id} name={name} required>
        <option disabled value="">
          Choose one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function SubmissionForm({
  kind,
  initialRole = "",
}: {
  kind: FormKind;
  initialRole?: string;
}) {
  const [status, setStatus] = useState<{ message: string; error: boolean }>();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(undefined);

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("type", kind);

    try {
      const response = await fetch("/api/submissions", { method: "POST", body: data });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus({
          message:
            result.message ??
            "Your application could not be sent. Please try again later or contact CamerStars directly.",
          error: true,
        });
        return;
      }

      setStatus({
        message: "Thank you. Your submission has been sent to CamerStars.",
        error: false,
      });
      form.reset();
    } catch {
      setStatus({
        message:
          "The secure application service could not be reached. Your information has not been submitted.",
        error: true,
      });
    }
  }

  return (
    <form
      action="/api/submissions"
      className="application-form"
      encType="multipart/form-data"
      method="post"
      onSubmit={submit}
    >
      <div aria-hidden="true" className="honeypot">
        <label htmlFor={`${kind}-website`}>Leave this field empty</label>
        <input autoComplete="off" id={`${kind}-website`} name="website" tabIndex={-1} />
      </div>

      {kind === "application" ? (
        <>
          <Field id="fullName" label="Full name" name="fullName" />
          <Field id="age" label="Your age (18+)" max={120} min={18} name="age" type="number" />
          <Field id="email" label="Email address" name="email" type="email" />
          <Field id="country" label="Country" name="country" />
          <Field id="city" label="City" name="city" />
          <Field id="whatsapp" label="WhatsApp with country code" name="whatsapp" type="tel" />
          <Field id="source" label="Where did you hear about us?" name="source" />
          <SelectField id="ringLight" label="Do you have a ring light?" name="ringLight" options={["Yes", "No"]} />
          <SelectField
            id="privateSpace"
            label="Do you have a private space to stream?"
            name="privateSpace"
            options={["Yes", "No"]}
          />
          <div className="form-field form-field-wide">
            <label htmlFor="experience">Previous cam-model experience and platforms</label>
            <textarea id="experience" maxLength={3000} name="experience" required />
          </div>
          <SelectField
            id="fullTime"
            label="Can you work full time: 8 hours a day, 5 days a week?"
            name="fullTime"
            options={["Yes", "No"]}
          />
          <SelectField id="laptop" label="Do you have a laptop?" name="laptop" options={["Yes", "No"]} />
          {initialRole ? <input name="role" type="hidden" value={initialRole} /> : null}
          <div className="form-field form-field-wide">
            <label htmlFor="photos">Two recent photos</label>
            <input
              accept="image/jpeg,image/png,image/webp"
              id="photos"
              multiple
              name="photos"
              required
              type="file"
            />
            <span className="form-hint">
              Exactly two JPG, PNG, or WebP images; maximum 1 MB each. Files remain private.
            </span>
          </div>
        </>
      ) : null}

      {kind === "job_application" ? (
        <>
          <Field id="fullName" label="Full name" name="fullName" />
          <Field id="whatsapp" label="WhatsApp with country code for a video-call interview" name="whatsapp" type="tel" />
          <Field id="email" label="Email address" name="email" type="email" />
          <Field id="country" label="Country" name="country" />
          <Field id="city" label="City" name="city" />
          <Field defaultValue={initialRole} id="role" label="Role you are applying for" name="role" />
          <SelectField id="fullTime" label="Are you aware this is a full-time job?" name="fullTime" options={["Yes", "No"]} />
          <div className="form-field form-field-wide">
            <label htmlFor="experience">Briefly describe your adult-entertainment industry experience</label>
            <textarea id="experience" maxLength={3000} name="experience" required />
          </div>
          <div className="form-field-wide">
            <label className="consent-field">
              <input name="adultConsent" required type="checkbox" value="true" />
              <span>I confirm that I am 18 years of age or older.</span>
            </label>
          </div>
        </>
      ) : null}

      {kind === "partnership" ? (
        <>
          <Field id="name" label="Name and surname" name="name" />
          <Field id="email" label="Email address" name="email" type="email" />
          <Field id="phone" label="Phone with country code" name="phone" type="tel" />
          <Field id="city" label="City for the proposed studio" name="city" />
          <div className="form-field form-field-wide">
            <label htmlFor="expertise">Professional and entrepreneurial experience</label>
            <textarea id="expertise" maxLength={3000} name="expertise" required />
          </div>
          <Field id="investment" label="Indicative investment amount (USD)" name="investment" type="number" min={0} />
          <div className="form-field form-field-wide">
            <label htmlFor="reason">Why are you interested in a studio partnership?</label>
            <textarea id="reason" maxLength={3000} name="reason" required />
          </div>
        </>
      ) : null}

      {kind === "contact" ? (
        <>
          <Field id="name" label="Name" name="name" />
          <Field id="email" label="Email address" name="email" type="email" />
          <Field id="phone" label="Phone with country code" name="phone" type="tel" />
          <Field id="skype" label="Skype ID for an online meeting" name="skype" required={false} />
          <div className="form-field form-field-wide">
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" maxLength={3000} name="message" required />
          </div>
        </>
      ) : null}

      <div className="form-field-wide">
        <TurnstileField />
      </div>
      <div className="form-field-wide">
        <label className="consent-field">
          <input name="consent" required type="checkbox" value="true" />
          <span>
            I agree that CamerStars may store and email my information to review and respond.{" "}
            See the <Link href="/privacy">Privacy Policy</Link>.
          </span>
        </label>
      </div>
      {status ? (
        <p
          aria-live="polite"
          className={status.error ? "form-status form-status-error" : "form-status"}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
      <button className="button button-primary form-field-wide" type="submit">
        {kind === "application" || kind === "job_application" ? "Submit application" : "Send inquiry"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
