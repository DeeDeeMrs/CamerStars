import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { StructuredData } from "@/components/structured-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://camerstars.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CamerStars | Webcam Modeling Agency & Model Opportunities",
    template: "%s | CamerStars",
  },
  description:
    "Explore webcam model jobs with CamerStars, including remote and studio opportunities, published commission terms, practical requirements, and partnership information.",
  applicationName: "CamerStars",
  creator: "CamerStars",
  publisher: "CamerStars",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "CamerStars",
    locale: "en_US",
    title: "CamerStars | Webcam Modeling Agency & Model Opportunities",
    description:
      "Explore webcam model jobs with CamerStars, including remote and studio opportunities, published commission terms, practical requirements, and partnership information.",
    url: siteUrl,
    images: [{ url: "/portrait-studio-editorial.jpg", width: 1000, height: 1500, alt: "CamerStars editorial portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CamerStars | Webcam Modeling Agency & Model Opportunities",
    description:
      "Explore webcam model jobs with CamerStars, including remote and studio opportunities, published commission terms, practical requirements, and partnership information.",
    images: ["/portrait-studio-editorial.jpg"],
  },
  icons: { icon: "/favicon.jpg" },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#FBF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieNotice />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "CamerStars",
            url: siteUrl,
            logo: `${siteUrl}/camerstars-logo.png`,
            telephone: "+40750424671",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+40750424671",
              contactType: "recruitment and general enquiries",
              availableLanguage: ["English"],
            },
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: "CamerStars",
            url: siteUrl,
            publisher: {
              "@id": `${siteUrl}/#organization`,
            },
          }}
        />
      </body>
    </html>
  );
}
