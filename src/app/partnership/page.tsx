import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Callout, PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Webcam Studio Affiliate & Business Partnership",
  "Explore CamerStars affiliate opportunities and webcam studio partnerships, including how to discuss recruiting, a model group, or a potential studio property.",
  "/partnership",
);

export default function PartnershipPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="Connect with CamerStars to discuss affiliate opportunities, a group of models, or a property you are considering for a studio."
        eyebrow="Affiliate partnership"
        image={{ src: "/partnership-team-editorial.jpg", alt: "Colleagues working together around a table" }}
        title="Build an opportunity with the right partner."
      />
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">An evolving industry</p>
          <h2>Explore a growing live-cam business.</h2>
          <p>
            Live-cam is part of a broader online communication and peer-to-peer experience.
            CamerStars welcomes affiliate partners interested in this market.
          </p>
          <p>
            CamerStars cites research estimating that nearly 65% of men aged 35–65 in developed
            countries use online communication services and spend more than $300 per month.
          </p>
          <p>
            CamerStars also describes online models as an important part of the industry’s
            competitive position. If you have a group of models interested in working with a
            company, or a property you want to explore as a cam studio, the team invites you to
            start a conversation.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <div className="two-grid">
            <article className="editorial-card">
              <span className="card-index">01 / AFFILIATE</span>
              <h3>Introduce the right people</h3>
              <p>
                Discuss a collaboration if you know a group of models interested in working with a
                company or have an audience and recruitment channel suited to the opportunity.
              </p>
              <Link href="/partnership-application">
                Discuss a partnership <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </article>
            <article className="editorial-card">
              <span className="card-index">02 / STUDIO</span>
              <h3>Explore a physical space</h3>
              <p>
                If you have a property or are considering a studio, the franchise page outlines the
                published support package and questions to clarify before moving forward.
              </p>
              <Link href="/partnership-application">
                View studio opportunity <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <Callout
        description="Share your experience, intended city, indicative investment, and what you hope to build. Do not send sensitive financial documents."
        eyebrow="Start a conversation"
        href="/partnership-application"
        label="Partnership application"
        title="Let’s talk about the opportunity."
      />
    </main>
  );
}
