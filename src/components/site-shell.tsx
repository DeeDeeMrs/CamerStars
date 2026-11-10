"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="site-navigation"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span className="menu-toggle-icon">{menuOpen ? <X size={20} /> : <Menu size={20} />}</span>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <Link aria-label="CamerStars home" className="brand" href="/">
          <Image
            alt="CamerStars"
            className="brand-logo"
            height={70}
            priority
            src="/camerstars-logo-white.png"
            width={178}
          />
        </Link>
        <div className="header-utility">
          <WhatsAppLink
            aria-label="Contact CamerStars on WhatsApp"
            className="header-contact"
            message="Hello, I would like to contact CamerStars."
          >
            Contact
          </WhatsAppLink>
          <WhatsAppLink
            className="nav-cta"
            message="Hello, I would like to discuss opportunities at CamerStars."
          >
            Chat on WhatsApp <ArrowUpRight aria-hidden="true" size={15} />
          </WhatsAppLink>
        </div>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          id="site-navigation"
        >
          <span className="main-nav-eyebrow">Explore CamerStars</span>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
          <Link href="/work-from-home" onClick={() => setMenuOpen(false)}>
            Work from home
          </Link>
          <Link href="/jobs" onClick={() => setMenuOpen(false)}>
            Open roles
          </Link>
          <Link href="/partnership" onClick={() => setMenuOpen(false)}>
            Partnership
          </Link>
          <Link href="/privacy" onClick={() => setMenuOpen(false)}>
            Privacy
          </Link>
          <WhatsAppLink
            className="main-nav-apply"
            message="Hello, I would like to discuss opportunities at CamerStars."
            onClick={() => setMenuOpen(false)}
          >
            Chat on WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link aria-label="CamerStars home" href="/">
            <Image
              alt="CamerStars"
              className="footer-logo"
              height={70}
              src="/camerstars-logo-white.png"
              width={178}
            />
          </Link>
          <p>Room to grow. Support to go further.</p>
        </div>
        <div className="footer-column">
          <span className="footer-title">Explore</span>
          <Link href="/about-us">About CamerStars</Link>
          <Link href="/work-from-home">Work from home</Link>
          <Link href="/jobs">Open roles</Link>
          <WhatsAppLink message="Hello, I would like to discuss opportunities at CamerStars.">
            Chat on WhatsApp
          </WhatsAppLink>
        </div>
        <div className="footer-column">
          <span className="footer-title">For partners</span>
          <Link href="/partnership">Affiliate partnership</Link>
          <Link href="/partnership-application">Studio opportunity</Link>
          <Link href="/onboarding-1">Onboarding information</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className="footer-contact">
          <span className="footer-title">Start a conversation</span>
          <p>Questions about working with us? Get in touch.</p>
          <WhatsAppLink message="Hello, I have a question for CamerStars.">
            WhatsApp <ArrowUpRight aria-hidden="true" size={14} />
          </WhatsAppLink>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CamerStars. All rights reserved.</span>
        <span>All opportunities are for adults aged 18 and over.</span>
      </div>
    </footer>
  );
}
