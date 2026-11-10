import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  Headset,
  House,
  WalletCards,
} from "lucide-react";
import { Faq } from "@/components/faq";
import { HomeFeatureHero } from "@/components/home-feature-hero";
import { HomeParallaxScene } from "@/components/home-parallax-scene";
import { HomeReveal } from "@/components/home-reveal";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";

const faqItems = [
  {
    question: "Do I need previous webcam-modeling experience?",
    answer:
      "No. CamerStars welcomes beginners and provides personalized training and ongoing support. Applicants must be adults aged 18 or over.",
  },
  {
    question: "Can I work from home?",
    answer:
      "Yes. CamerStars offers remote work from home and work in one of its studios, depending on the role.",
  },
  {
    question: "What commission does CamerStars offer?",
    answer:
      "CamerStars lists 50%, 60%, and 70% commission tiers based on time with the agency, schedule, performance, loyalty, and earnings.",
  },
  {
    question: "How much can a webcam model earn?",
    answer:
      "CamerStars lists a possible $1,000–$10,000 monthly range and a studio-model average above $4,000. Earnings vary and are not guaranteed.",
  },
  {
    question: "What equipment will I need?",
    answer:
      "A stable internet connection, laptop with a camera or a suitable smartphone, a ring light or umbrella light, and a private space.",
  },
  {
    question: "How often are models paid?",
    answer: "Payments are made every two weeks on Friday.",
  },
  {
    question: "How can I protect my privacy?",
    answer:
      "You can use a pseudonym and choose confidentiality or promotion.",
  },
];

const benefits = [
  {
    icon: House,
    title: "Work your way",
    text: "Choose remote or in-studio opportunities.",
    href: "#opportunities",
  },
  {
    icon: GraduationCap,
    title: "Start with support",
    text: "Personalized training, even if you are new.",
    href: "/about-us",
  },
  {
    icon: Headset,
    title: "A team beside you",
    text: "Online guidance and ongoing support.",
    href: "/about-us",
  },
  {
    icon: WalletCards,
    title: "Know the terms",
    text: "See the published commission tiers.",
    href: "#commission",
  },
];

const opportunities = [
  {
    eyebrow: "01 / MODELING",
    title: "Work from home",
    description: "Build a comfortable setup and make your space your own.",
    image: "/work-from-home-editorial.jpg",
    alt: "Woman working from a comfortable home workspace",
    href: "/work-from-home",
    link: "Explore remote work",
  },
  {
    eyebrow: "02 / CAREERS",
    title: "Find your role",
    description: "Explore opportunities on camera and behind the scenes.",
    image: "/portrait-studio-editorial.jpg",
    alt: "Confident model in a tailored black studio outfit",
    href: "/jobs",
    link: "See open roles",
  },
  {
    eyebrow: "03 / PARTNERSHIPS",
    title: "Build together",
    description: "Discover affiliate and studio partnership opportunities.",
    image: "/partnership-team-editorial.jpg",
    alt: "Creative team collaborating around a table",
    href: "/partnership",
    link: "Explore partnerships",
  },
];

export const metadata = pageMetadata(
  "Webcam Modeling Agency & Model Jobs",
  "Explore webcam model jobs with CamerStars, including remote and studio work, commission tiers, practical requirements, and application details for adults 18+.",
  "/",
);

export default function Home() {
  return (
    <main className="home-redesign home-grand" id="main-content">
      <HomeFeatureHero />

      <section aria-label="CamerStars advantages" className="home-benefits" id="home-introduction">
        <HomeReveal className="home-benefits-grid">
          {benefits.map(({ icon: Icon, title, text, href }, index) => (
            <Link className="home-benefit" href={href} key={title}>
              <span className="home-benefit-icon">
                <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
              </span>
              <span className="home-benefit-number">0{index + 1}</span>
              <strong>{title}</strong>
              <span className="home-benefit-copy">{text}</span>
              <ArrowUpRight aria-hidden="true" className="home-benefit-arrow" size={16} />
            </Link>
          ))}
        </HomeReveal>
      </section>

      <nav aria-label="On this page" className="home-section-nav">
        <a href="#opportunities">Opportunities</a>
        <a href="#commission">Commission</a>
        <a href="#getting-started">Getting started</a>
        <a href="#questions">FAQ</a>
      </nav>

      <section className="home-section home-opportunities" id="opportunities">
        <HomeReveal className="home-section-inner">
          <div className="home-section-heading">
            <div>
              <p className="eyebrow">Find your direction</p>
              <h2>One team. <em>Different paths.</em></h2>
            </div>
            <p>Explore the work and find an opportunity that feels right for you.</p>
          </div>
          <div className="home-opportunity-grid">
            {opportunities.map((item) => (
              <Link className="home-opportunity" href={item.href} key={item.eyebrow}>
                <div className="home-opportunity-image">
                  <Image alt={item.alt} fill sizes="(max-width: 700px) 90vw, 32vw" src={item.image} />
                  <span className="home-opportunity-index">{item.eyebrow}</span>
                  <span className="home-opportunity-arrow">
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </span>
                </div>
                <div className="home-opportunity-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.link} <ArrowRight aria-hidden="true" size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </HomeReveal>
      </section>

      <HomeParallaxScene
        alt="Confident model in a red editorial studio portrait"
        className="home-grand-parallax"
        sizes="100vw"
        src="/portrait-red-editorial.jpg"
      >
        <div className="home-grand-parallax-copy">
          <p className="eyebrow">A place to begin</p>
          <h2>
            Your next chapter.
            <br />
            <em>Your own way.</em>
          </h2>
          <p>Bring your personality. We’ll help you build the rest.</p>
          <WhatsAppLink
            className="button button-primary"
            message="Hello, I would like to learn about opportunities at CamerStars."
          >
            Chat about opportunities <ArrowUpRight aria-hidden="true" size={16} />
          </WhatsAppLink>
        </div>
        <span className="home-grand-parallax-caption">CamerStars · Talent &amp; opportunity</span>
      </HomeParallaxScene>

      <section className="home-section home-commission" id="commission">
        <HomeReveal className="home-section-inner home-commission-inner">
          <div className="home-commission-heading">
            <p className="eyebrow">Commission &amp; payment</p>
            <h2>Clear tiers.<br /><em>Room to grow.</em></h2>
            <p>CamerStars lists three commission tiers, with payments every two weeks on Friday.</p>
            <Link className="home-inline-link" href="/about-us">
              Learn about CamerStars <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <div className="home-commission-tiers">
            {[
              {
                name: "Beginner",
                rate: "50%",
                detail: "Under 2 months · 40 online hours weekly · below $3,000 per work period",
              },
              {
                name: "Growth",
                rate: "60%",
                detail: "2+ months · consistent schedule · $3,000–$8,000 per work period",
              },
              {
                name: "Top",
                rate: "70%",
                detail: "$10,000+ per work period · long-term loyalty · self-motivation",
              },
            ].map((tier, index) => (
              <article className="home-tier" key={tier.rate}>
                <span className="home-tier-number">0{index + 1}</span>
                <span className="home-tier-name">{tier.name}</span>
                <strong>{tier.rate}</strong>
                <p>{tier.detail}</p>
              </article>
            ))}
            <p className="home-tier-note">Earnings depend on your schedule, audience, and performance.</p>
          </div>
        </HomeReveal>
      </section>

      <section className="home-section home-start" id="getting-started">
        <HomeReveal className="home-section-inner home-start-layout">
          <div className="home-start-image">
            <Image
              alt="A calm, well-lit home workspace"
              fill
              sizes="(max-width: 760px) 90vw, 47vw"
              src="/work-from-home-editorial.jpg"
            />
            <span>Start with what you have.</span>
          </div>
          <div className="home-start-copy">
            <p className="eyebrow">Getting started</p>
            <h2>Set up for <em>your success.</em></h2>
            <p>A few essentials help you create a comfortable, reliable streaming space.</p>
            <ul>
              <li><Check aria-hidden="true" size={17} /> Stable internet connection</li>
              <li><Check aria-hidden="true" size={17} /> Laptop with camera or suitable smartphone</li>
              <li><Check aria-hidden="true" size={17} /> Ring light or umbrella light</li>
              <li><Check aria-hidden="true" size={17} /> Private space where you feel comfortable</li>
            </ul>
            <Link className="button button-outline" href="/work-from-home">
              See all requirements <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </HomeReveal>
      </section>

      <section className="home-income">
        <div className="home-income-image">
          <Image
            alt="Model in an elegant studio portrait"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            src="/portrait-asian-editorial-v3.jpg"
          />
        </div>
        <HomeReveal className="home-income-copy">
          <p className="eyebrow">Published earning information</p>
          <h2>Make an informed start.</h2>
          <p>CamerStars lists a possible monthly range and a studio-model average:</p>
          <div className="home-income-stats">
            <div><strong>$1k–$10k</strong><span>possible monthly range</span></div>
            <div><strong>$4k+</strong><span>studio-model monthly average</span></div>
          </div>
          <p className="home-income-note">These are CamerStars figures. Earnings vary and are not guaranteed.</p>
        </HomeReveal>
      </section>

      <section className="home-section home-faq" id="questions">
        <HomeReveal className="home-section-inner">
          <div className="home-section-heading">
            <div>
              <p className="eyebrow">Good to know</p>
              <h2>Your questions, <em>answered.</em></h2>
            </div>
            <p>Get the details you need to decide what’s right for you.</p>
          </div>
          <div className="home-faq-list">
            <Faq items={faqItems} />
          </div>
        </HomeReveal>
      </section>

      <section className="home-apply">
        <div>
          <p className="eyebrow">For adults 18+</p>
          <h2>Ready to take the <em>first step?</em></h2>
          <p>Explore the roles, then start a conversation with CamerStars.</p>
        </div>
        <WhatsAppLink
          className="button button-light"
          message="Hello, I would like to learn about opportunities at CamerStars."
        >
          Chat about opportunities <ArrowUpRight aria-hidden="true" size={16} />
        </WhatsAppLink>
      </section>

      <section className="home-section home-contact">
        <HomeReveal className="home-section-inner home-contact-layout">
          <div>
            <p className="eyebrow">Contact CamerStars</p>
            <h2>Let’s start with <em>a conversation.</em></h2>
            <p>Have a question? Reach the team directly on WhatsApp at +40 750 424 671.</p>
          </div>
          <WhatsAppLink
            className="button button-primary"
            message="Hello, I would like to contact CamerStars."
          >
            Chat on WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
          </WhatsAppLink>
        </HomeReveal>
      </section>

      <a aria-label="Back to top" className="home-back-to-top" href="#main-content">
        Back to top <ArrowDown aria-hidden="true" size={14} />
      </a>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </main>
  );
}
