import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const photoLinks = [
  {
    image: "/work-from-home-editorial.jpg",
    alt: "Woman working on her laptop from a bright home workspace",
    category: "01 / MODELLING",
    title: "Work from home",
    href: "/work-from-home",
  },
  {
    image: "/portrait-studio-editorial.jpg",
    alt: "Blonde woman in a tailored black suit in a confident studio portrait",
    category: "02 / CAREERS",
    title: "Find your role",
    href: "/jobs",
  },
  {
    image: "/partnership-team-editorial.jpg",
    alt: "Colleagues working together around a table",
    category: "03 / PARTNERSHIPS",
    title: "Build together",
    href: "/partnership",
  },
];

export function HomePhotoRow() {
  return (
    <section aria-label="Explore CamerStars opportunities" className="home-photo-row">
      {photoLinks.map((item) => (
        <Link
          aria-label={`${item.title}: ${item.category.split(" / ")[1]}`}
          className="home-photo-tile"
          href={item.href}
          key={item.href}
        >
          <Image
            alt={item.alt}
            fill
            sizes="(max-width: 620px) 100vw, 33vw"
            src={item.image}
          />
          <span aria-hidden="true" className="home-photo-shade" />
          <span className="home-photo-caption">
            <span>{item.category}</span>
            <strong>{item.title}</strong>
          </span>
          <span aria-hidden="true" className="home-photo-arrow">
            <ArrowUpRight size={19} />
          </span>
        </Link>
      ))}
    </section>
  );
}
