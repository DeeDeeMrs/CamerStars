import { Callout, PageIntro } from "@/components/page-intro";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata = pageMetadata(
  "Webcam Model Jobs & Remote Careers",
  "Explore CamerStars openings for webcam models, content creators, remote recruiters, TikTok marketing streamers, and chatters. Roles are for adults 18+.",
  "/jobs",
);

const roles = [
  {
    title: "Cam models",
    type: "Modeling · Remote or studio",
    description:
      "CamerStars’ main mission is to help models succeed and benefit from the agency’s support. The company is looking for long-term models interested in developing their work, and welcomes content creators interested in TikTok marketing as streamers.",
    requirements: [
      "Outgoing and comfortable meeting new people.",
      "Interested in building a long-term opportunity.",
      "Willing to discuss schedule, boundaries, and working terms.",
    ],
  },
  {
    title: "Content creators",
    type: "Full-time · Content and live sessions",
    description:
      "Produce engaging content and stream daily, interact with audiences, host live sessions, and help grow the brand.",
    requirements: [
      "Ring light.",
      "Strong conversational skills.",
      "Comfort being in the spotlight.",
    ],
  },
  {
    title: "Team leader / recruiter",
    type: "Full-time · Remote",
    description:
      "Recruit models and take responsibility for a team of content creators. The role is remote and full-time.",
    requirements: [
      "Laptop and smartphone.",
      "Advanced English.",
      "Responsibility and leadership skills.",
      "Industry experience, including familiarity with TikTok marketing as a streamer.",
    ],
  },
  {
    title: "TikTok marketing streamer",
    type: "Full-time · 10 a.m.–7 p.m.",
    description:
      "Engage the audience on the CamerStars TikTok account through live sessions and content creation.",
    requirements: [
      "Ring light.",
      "Conversational skills.",
      "Comfort being the center of attention.",
      "Schedule includes a one-hour break.",
    ],
  },
  {
    title: "Chatter",
    type: "Full-time · Remote",
    description:
      "Support written audience conversations in an experienced adult chat role.",
    requirements: [
      "At least one year in the industry.",
      "Laptop and smartphone.",
      "Advanced English.",
      "Fast, engaging, professional written communication.",
    ],
    pay: "10% of total earnings.",
  },
];

export default function JobsPage() {
  return (
    <main id="main-content">
      <PageIntro
        description="A place for people with different strengths—from on-camera talent to content, community, and recruitment."
        eyebrow="Careers at CamerStars"
        image={{ src: "/portrait-studio-editorial.jpg", alt: "Blonde woman in a tailored black suit in a studio portrait", position: "center top" }}
        title="Bring your talent. Find your next role."
      />
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Current opportunities</p>
          <h2>Explore the roles listed by CamerStars.</h2>
          <p>
            Every opportunity is for adults aged 18 or over. Review the requirements for each role.
          </p>
          {roles.map((role, index) => (
            <article className="job-card" key={role.title}>
              <div>
                <span className="card-index">0{index + 1} / {role.type}</span>
                <h2>{role.title}</h2>
                <WhatsAppLink
                  className="button button-outline"
                  message={`Hello, I am interested in the ${role.title} opportunity at CamerStars.`}
                >
                  Ask about this role <span aria-hidden="true">↗</span>
                </WhatsAppLink>
              </div>
              <div>
                <p>{role.description}</p>
                <h3>What you’ll need</h3>
                <ul>{role.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
                {role.pay ? <p className="info-note">{role.pay}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Callout
        description="Message the CamerStars team on WhatsApp to ask about roles and next steps. All opportunities are for adults aged 18 and over."
        eyebrow="Next step"
        external
        href={whatsappHref("Hello, I would like to discuss job opportunities at CamerStars.")}
        label="Chat on WhatsApp"
        title="Ready to introduce yourself?"
      />
    </main>
  );
}
