import { Faq, type FaqItem } from "@/components/faq";
import { Callout, PageIntro } from "@/components/page-intro";
import { StructuredData } from "@/components/structured-data";
import { SubmissionForm } from "@/components/submission-form";
import { pageMetadata } from "@/lib/metadata";

const franchiseFaq: FaqItem[] = [
  {
    question: "What is CamerStars, and how does the franchise work?",
    answer:
      "CamerStars offers a live-cam studio franchise with training, business strategies, and ongoing operational support.",
  },
  {
    question: "Do I need experience in the live-cam industry?",
    answer:
      "The source FAQ says no prior experience is required and lists training in business management, team leadership, and live-cam operations.",
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "CamerStars lists a possible $20,000–$40,000 per month per location, depending on studio size, location, and management.",
  },
  {
    question: "What support is provided?",
    answer:
      "The published support list includes location selection, studio setup, hiring, marketing, model recruitment, training, a marketing guidebook, and quarterly strategy meetings.",
  },
  {
    question: "How much does a franchise cost?",
    answer:
      "The source says the investment varies by location and studio size and that CamerStars will provide a tailored business plan with financial requirements and expected returns.",
  },
  {
    question: "How does model recruitment work?",
    answer:
      "The source mentions local recruitment strategies, national and global marketing support, and a dedicated webpage for model applications.",
  },
  {
    question: "What makes the CamerStars approach different?",
    answer:
      "The source describes a Glamour video-chat concept focused on elegance and sophistication without relying on nudity.",
  },
  {
    question: "What are the legal requirements?",
    answer:
      "CamerStars provides guidance on licensing, contracts, and local practices.",
  },
  {
    question: "When might a studio see a return?",
    answer:
      "CamerStars estimates that significant revenue may begin within 6–12 months, depending on location and execution.",
  },
  {
    question: "How do I get started?",
    answer:
      "The source invites prospective partners to schedule an initial consultation to discuss the franchise process, local market potential, and launch planning.",
  },
];

export const metadata = pageMetadata(
  "Webcam Studio Franchise & Partnership Details",
  "Review the CamerStars webcam studio franchise proposal, listed support, published financial claims, due-diligence questions, and partnership enquiry form.",
  "/partnership-application",
);

export default function PartnershipApplicationPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="A business-focused overview of the published CamerStars studio franchise offer, support model, and questions to resolve before investing."
        eyebrow="Studio partnership"
        image={{ src: "/studio-partnership-editorial.jpg", alt: "Camera and lighting equipment set up in a photography studio", position: "center top" }}
        title="Build a considered live-cam business."
      />
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">The opportunity</p>
          <h2>Live streaming, community, and studio growth.</h2>
          <p>
            CamerStars describes live streaming and online social connection as an evolving
            peer-to-peer experience. The company cites an estimate that nearly 65% of men aged
            35–65 in developed countries use online communication and spend over $300 per month.
          </p>
          <p>
            The page’s franchise plan describes a city-level market study, studio-size assessment,
            location selection and design with an architect, and negotiated pricing. It also lists
            a tailored 60-month business plan, staff hiring and training, and a month of hands-on
            experience in an operating studio.
          </p>
          <p>
            Ongoing support includes quarterly meetings with experienced teams, a marketing
            guidebook, local recruitment strategies, and a dedicated webpage for model applications.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Financial information</p>
          <h2>Studio income and investment.</h2>
          <p>
            CamerStars lists potential monthly revenue of $20,000–$40,000 per location, with
            significant revenue possibly beginning within 6–12 months. Results depend on location,
            studio size, management, local regulation, and execution.
          </p>
          <p>
            Investment varies with location and studio size. CamerStars offers a tailored plan with
            financial requirements and projected returns.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Common questions</p>
          <h2>Franchise questions, answered.</h2>
          <Faq items={franchiseFaq} />
        </div>
      </section>
      <section className="form-page">
        <div className="form-page-inner form-layout">
          <aside className="form-aside">
            <p className="eyebrow">Partner application</p>
            <h2>Tell us what you’re planning.</h2>
            <p>
              The source form asks about professional and entrepreneurial experience, intended
              city, investment amount in USD, and motivation for starting a videochat franchise.
              Do not send sensitive financial documents.
            </p>
          </aside>
          <SubmissionForm kind="partnership" />
        </div>
      </section>
      <Callout
        description="For a general affiliate or studio discussion, the partnership overview is a good place to start."
        eyebrow="Explore further"
        href="/partnership"
        label="Partnership overview"
        title="Start with the bigger picture."
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: franchiseFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </main>
  );
}
