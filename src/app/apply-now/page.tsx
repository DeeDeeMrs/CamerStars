import { PageIntro } from "@/components/page-intro";
import { SubmissionForm } from "@/components/submission-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "Apply for a Webcam Model or Remote Role",
    "Apply to CamerStars with your contact details, experience, availability, and equipment information. No identity or banking documents are collected here.",
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
            ? `Introduce yourself for the ${safeRole} role. All opportunities are for adults aged 18 and over.`
            : "Tell us a little about yourself and the role you have in mind. All opportunities are for adults aged 18 and over."
        }
        eyebrow="Apply now"
        image={{ src: "/portrait-red-editorial.jpg", alt: "Black woman in a tailored black blazer against a vivid red backdrop", position: "center top" }}
        title={safeRole ? `Apply for ${safeRole}.` : "Your next step begins with a conversation."}
      />
      <section className="form-page">
        <div className="form-page-inner form-layout">
          <aside className="form-aside">
            <p className="eyebrow">A few things to know</p>
            <h2>Take your time. Share only what’s needed.</h2>
            <p>{safeRole
              ? "Complete the form to introduce yourself for this opportunity."
              : "Complete the form to introduce yourself and share your experience."}
            </p>
          </aside>
          <SubmissionForm
            initialRole={safeRole}
            kind={safeRole ? "job_application" : "application"}
          />
        </div>
      </section>
    </main>
  );
}
