import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Read the privacy information published by CamerStars and review data practices that still require confirmation.",
  "/privacy",
);

const policySections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "The source policy says the website may collect personal information such as name, email address, phone number, payment details, and other information provided by a user; usage data such as IP address, browser type, and pages visited; and cookie or tracking data.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "The source policy says information may be used to provide and improve services, process transactions and communicate, maintain website security and prevent fraud, and comply with legal obligations.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    paragraphs: [
      "The source policy says CamerStars does not sell personal data, but may share it with service providers that help operate the website (for example, hosting or payment processors) and with legal authorities when required by law or to protect rights. Website form details are also stored in the submissions service and emailed to CamerStars for review; uploaded application photos are not included in those emails.",
    ],
  },
  {
    title: "4. Your Rights",
    paragraphs: [
      "The source policy lists the right to access, update, or delete personal data; opt out of marketing communications; and disable cookies through browser settings.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "The source policy says security measures are used to protect information but complete security cannot be guaranteed.",
    ],
  },
  {
    title: "6. Third-Party Links",
    paragraphs: [
      "The website may link to external sites. The source policy says CamerStars is not responsible for the privacy practices of those sites.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    paragraphs: [
      "The source policy says it may be updated periodically and that changes will be posted on this page.",
    ],
  },
  {
    title: "8. Contact Us",
    paragraphs: [
      "The original policy directs privacy questions to www.camerstars.com. It does not publish a privacy contact email or representative.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="A plain-language record of the privacy information published on CamerStars.com."
        eyebrow="Privacy"
        title="Your information. Handled with care."
      />
      <section className="content-section">
        <div className="content-wrap-narrow">
          <p>
            <strong>Effective date shown on the source policy: 27 January 2022.</strong>
          </p>
          <p>
            The following sections preserve the subjects and statements in the published CamerStars
            privacy policy. This content has not been legally reviewed or updated to confirm current
            data practices.
          </p>
          {policySections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
