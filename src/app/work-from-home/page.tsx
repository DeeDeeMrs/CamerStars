import { Callout, PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Remote Webcam Model Jobs: Requirements & Setup",
  "See CamerStars’ webcam model requirements for remote work, including recommended internet speed, camera and lighting setup, privacy, boundaries, and support.",
  "/work-from-home",
);

const internetTips = [
  "Check your actual upload speed with an internet speed test.",
  "Prioritize the stream when several devices share the connection.",
  "Consider a wired connection for greater stability.",
  "Adjust resolution, frame rate, or bitrate if the stream needs more stability.",
];

const cameraBenefits = [
  "Higher resolution: many external webcams offer 1080p or 4K compared with a built-in camera.",
  "Low-light performance: some external cameras are designed to handle dimmer rooms better.",
  "Flexible placement: position the camera to create a more intentional frame.",
  "A polished image: better lighting and framing can improve the overall presentation.",
];

const ringLightBenefits = [
  "Soft, flattering light with fewer harsh shadows.",
  "More even skin tones and less noticeable blemishes.",
  "Portable, simple setup for a home streaming space.",
  "More consistent video quality in low-light environments.",
];

const roomBenefits = [
  "A tidy background can support a professional impression.",
  "Thoughtful decor can reflect personality and help viewers connect.",
  "Lighting and color choices can shape the atmosphere.",
  "A varied background can make a stream feel more considered.",
];

const verificationReasons = [
  "Confirm identity and reduce fake or duplicate accounts.",
  "Help deter identity fraud and support platform security.",
  "Meet age-verification and other legal requirements where applicable.",
  "Support trust, transparency, and payment to the correct person.",
];

export default function WorkFromHomePage() {
  return (
    <main id="main-content">
      <PageIntro
        description="A practical guide to working remotely: what the role involves, how to set boundaries, and what you may need to get started."
        eyebrow="Work from home"
        image={{ src: "/work-from-home-editorial.jpg", alt: "Woman working on her laptop from a bright home workspace" }}
        title="Your room. Your boundaries. Your way of working."
      />
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">The role</p>
          <h2>What is a webcam model?</h2>
          <p>
            A webcam model performs while streaming through a webcam. This work is also known as cam
            modeling, camgirl, camboy, or cammodel. The experience may be personal
            and intimate, and can involve adult-oriented content depending on the platform and
            boundaries you choose.
          </p>
          <div className="two-grid">
            <article className="editorial-card">
              <span className="card-index">01 / YOUR SPACE</span>
              <h3>Your room, your rules</h3>
              <p>
                You set the boundaries for your chat room. If someone makes you uncomfortable, the
                platform controls can let you kick, ban, or block them.
              </p>
            </article>
            <article className="editorial-card">
              <span className="card-index">02 / YOUR STYLE</span>
              <h3>Personality comes first</h3>
              <p>
                CamerStars says there is no single look required and welcomes different styles,
                shapes, and personalities. Its page emphasizes individuality and connection.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">A practical starting point</p>
          <h2>What you need to get started</h2>
          <ul className="feature-list">
            <li>A stable internet connection.</li>
            <li>A laptop with an external camera, or a smartphone that can be used as a camera.</li>
            <li>A ring light—CamerStars suggests two—or an umbrella light.</li>
            <li>A private, comfortable space where you can stream without interruptions.</li>
            <li>A valid ID, provided only through a verified secure onboarding process.</li>
          </ul>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap split-facts">
          <div>
            <p className="eyebrow">Connection checklist</p>
            <h2>Internet specifications</h2>
            <p>
              The source recommends at least 3 Mbps upload for basic quality and 5 Mbps or more for
              better quality and stability, particularly on a shared connection.
            </p>
          </div>
          <div className="connection-quality-grid payout-table">
            <div className="connection-quality-card payout-row">
              <strong>Basic quality</strong>
              <span>3 Mbps</span>
              <p>Minimum recommended upload speed.</p>
            </div>
            <div className="connection-quality-card payout-row">
              <strong>Preferred</strong>
              <span>5+ Mbps</span>
              <p>Better quality and stability on a shared connection.</p>
            </div>
            <div className="connection-quality-card payout-row">
              <strong>HD streaming</strong>
              <span>10–15 Mbps</span>
              <p>Source recommendation for HD video calls or streaming.</p>
            </div>
            <div className="connection-quality-card payout-row">
              <strong>4K streaming</strong>
              <span>25+ Mbps</span>
              <p>More is recommended for 4K at 60 frames per second.</p>
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <h3>Ways to optimize your stream</h3>
          <ul>{internetTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Camera, light, and space</p>
          <h2>Build a setup that works for you.</h2>
          <div className="three-grid">
            <article className="editorial-card">
              <span className="card-index">01 / EQUIPMENT</span>
              <h3>Camera</h3>
              <p>
                CamerStars recommends a laptop and external camera for image quality, framing
                flexibility, and low-light performance; it also lists a suitable smartphone as an
                option.
              </p>
              <ul>{cameraBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </article>
            <article className="editorial-card">
              <span className="card-index">02 / LIGHTING</span>
              <h3>Ring light</h3>
              <p>The source suggests a ring light, preferably two, or an umbrella light.</p>
              <ul>{ringLightBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </article>
            <article className="editorial-card">
              <span className="card-index">03 / PRIVATE ROOM</span>
              <h3>Make it your own</h3>
              <p>
                A decorated room is not stated as a strict requirement, but the source says a
                thoughtful background can create a professional, inviting atmosphere.
              </p>
              <ul>{roomBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </article>
          </div>
          <p className="section-lede">Makeup and styling are personal choices; there is no single required look.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Trust and safety</p>
          <h2>Why identity verification is required</h2>
          <p>
            The source describes ID checks as a way for platforms to confirm identity, deter fraud,
            support age verification and legal compliance, improve security, and help route payments
            to the correct person.
          </p>
          <ul>{verificationReasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
        </div>
      </section>
      <section className="content-section">
        <div className="content-wrap">
          <p className="eyebrow">Before you apply</p>
          <h2>What CamerStars says to expect</h2>
          <ul>
            <li>Published model commission is 50–70% of sales, depending on work and tier terms.</li>
            <li>The agency says it provides the account, training, technical information, and marketing guidance.</li>
            <li>Optional international social-media promotion has a fee negotiated individually and requires your agreement.</li>
            <li>Professional local photo/video shooting may be paid for on request after at least three months working with the agency.</li>
            <li>Remote models are still expected to respect their schedule, stay in contact, and follow instructions.</li>
          </ul>
        </div>
      </section>
      <Callout
        description="Read the open positions and application requirements, then decide whether you want to take the next step."
        eyebrow="Ready to explore?"
        href="/jobs"
        label="See open roles"
        title="Find the opportunity that fits."
      />
    </main>
  );
}
