import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string; position?: string };
}) {
  return (
    <section className={image ? "page-intro page-intro-image" : "page-intro page-intro-text"}>
      <div aria-hidden="true" className="page-intro-shade" />
      <div className="page-intro-copy">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lede">{description}</p>
        <span aria-hidden="true" className="page-intro-mark">
          CAMERSTARS <i /> {eyebrow}
        </span>
      </div>
      {image ? (
        <div aria-hidden="true" className="page-intro-photo">
          <Image
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            src={image.src}
            style={{ objectPosition: image.position ?? "center 34%" }}
          />
        </div>
      ) : null}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p className="section-lede">{children}</p> : null}
    </div>
  );
}

export function Callout({
  eyebrow,
  title,
  description,
  href,
  label,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <section className="callout">
      <div className="callout-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link className="button button-light" href={href}>
        {label} <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
