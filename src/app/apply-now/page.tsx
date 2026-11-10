import { Callout, PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata = {
  ...pageMetadata(
    "Apply for a Webcam Model or Remote Role",
    "Contact CamerStars on WhatsApp to discuss webcam model and remote career opportunities for adults aged 18 and over.",
    "/apply-now",
  ),
  robots: { index: false, follow: true },
};

export default async function ApplyNowPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role = "" } = await searchParams;
  const safeRole = ["Cam models", "Content creators", "Team leader / recruiter", "TikTok marketing streamer", "Chatter"].includes(role)
    ? role
    : "";

  return (
    <main id="main-content">
      <PageIntro
        description={
          safeRole
            ? `Message the CamerStars team about the ${safeRole} role. All opportunities are for adults aged 18 and over.`
            : "Message CamerStars to talk about the role you have in mind. All opportunities are for adults aged 18 and over."
        }
        eyebrow="Apply now"
        image={{ src: "/portrait-red-editorial.jpg", alt: "Black woman in a tailored black blazer against a vivid red backdrop", position: "center top" }}
        title={safeRole ? `Apply for ${safeRole}.` : "Your next step begins with a conversation."}
      />
      <Callout
        description="Message the CamerStars team on WhatsApp to ask about the role and next steps. All opportunities are for adults aged 18 and over."
        eyebrow="A few things to know"
        external
        href={whatsappHref(
          safeRole
            ? `Hello, I would like to discuss the ${safeRole} opportunity at CamerStars.`
            : "Hello, I would like to discuss opportunities at CamerStars.",
        )}
        label="Chat on WhatsApp"
        title="Let’s start with a conversation."
      />
    </main>
  );
}
