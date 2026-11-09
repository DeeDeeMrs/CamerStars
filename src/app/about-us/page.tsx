import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Callout, PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About the CamerStars Modeling Agency",
  "Learn about CamerStars, its published support, model training, working arrangements, commission terms, and privacy options.",
  "/about-us",
);

const principles = [
  {
    title: "Payment terms",
    copy:
      "Commission ranges from 50% to 70%, with payments every two weeks on Friday.",
  },
  {
    title: "Bonuses and recognition",
    copy:
      "CamerStars offers cumulative bonuses and periodic contests recognizing attitude, motivation, and performance.",
  },
  {
    title: "Contracts and transparency",
    copy:
      "The site says artist-performer contracts are offered from the first day, signed in two copies, with a copy provided to each model.",
  },
  {
    title: "Training and support",
    copy:
      "No prior online-modeling experience is required. CamerStars offers personalized training and 24/7 support.",
  },
  {
    title: "A glamour approach",
    copy:
      "CamerStars describes both non-adult and adult online modeling as options, and says beginners may start with non-adult work.",
  },
  {
    title: "Confidentiality or promotion",
    copy:
      "Work under a pseudonym and choose confidentiality or promotion and brand-building support.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="A modeling and content agency focused on online opportunities, practical guidance, and a more personal support experience."
        eyebrow="About CamerStars"
        image={{ src: "/portrait-asian-editorial-v3.jpg", alt: "Asian woman in an elegant coral dress in an editorial city portrait", position: "center top" }}
        title="Experience the work. Choose your own way forward."
      />
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Who we are</p>
          <h2>Support, professionalism, and room to grow.</h2>
          <p>
            CamerStars supports online models working from home or in its studio, with training,
            professional guidance, and opportunities to develop their work.
          </p>
          <p>
            CamerStars reports over eight years of team experience in the industry.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <div className="three-grid">
            {principles.map((item, index) => (
              <article className="editorial-card" key={item.title}>
                <span className="card-index">0{index + 1} / HOW WE WORK</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Published business figures</p>
          <h2>Experience and reach.</h2>
          <p>
            CamerStars reports a marketing budget above $100,000 per month, more than 300,000
            visitors sent to models daily, a studio-model average above $4,000 per month, and a
            possible model income range of $1,000–$10,000 per month.
          </p>
          <Link className="text-link" href="/work-from-home">
            Read work requirements <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </section>
      <Callout
        description="Review the working options, role details, and practical requirements before you decide whether to apply."
        eyebrow="Explore your options"
        href="/jobs"
        label="View open roles"
        title="Find the path that fits."
      />
    </main>
  );
}
