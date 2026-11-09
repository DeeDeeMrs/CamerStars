import type { Metadata } from "next";

const origin = "https://camerstars.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = path === "/" ? "/" : path;
  return {
    title: path === "/" ? `${title} | CamerStars` : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | CamerStars`,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/portrait-studio-editorial.jpg", width: 1000, height: 1500, alt: "CamerStars editorial portrait" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CamerStars`,
      description,
      images: ["/portrait-studio-editorial.jpg"],
    },
    metadataBase: new URL(origin),
  };
}
