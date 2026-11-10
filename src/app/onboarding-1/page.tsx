import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "CamerStars Onboarding Information",
    "Review the information previously requested during CamerStars onboarding and learn how to request a secure intake link.",
    "/onboarding-1",
  ),
  robots: { index: false, follow: true },
};

export default function OnboardingPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="An overview of the onboarding information previously requested by CamerStars."
        eyebrow="Onboarding"
        title="Your information deserves a secure next step."
      />
      <section className="content-section">
        <div className="content-wrap-narrow">
          <div className="secure-panel">
            <AlertTriangle aria-hidden="true" color="#7E1835" size={22} />
            <strong>Onboarding information</strong>
            <p>
              The previous form requested contact and address details, bank account information, a
              SWIFT or routing code,               and images of an ID plus a selfie. This page does not collect any of those items.
            </p>
            <WhatsAppLink
              className="button button-primary"
              message="Hello, I would like to ask about secure onboarding."
            >
              Ask CamerStars a question <ArrowUpRight aria-hidden="true" size={15} />
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </main>
  );
}
