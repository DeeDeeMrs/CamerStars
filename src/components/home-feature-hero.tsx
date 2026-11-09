"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const featuredImages = [
  {
    src: "/portrait-studio-editorial.jpg",
    alt: "Blonde woman in a tailored black suit in a confident studio portrait",
    label: "Find your own spotlight",
    position: "center top",
  },
  {
    src: "/portrait-red-editorial.jpg",
    alt: "Black woman in a tailored black blazer against a vivid red backdrop",
    label: "A space to be yourself",
    position: "center 37%",
  },
  {
    src: "/portrait-asian-editorial-v3.jpg",
    alt: "Asian woman in an elegant coral dress in an editorial city portrait",
    label: "Your next chapter starts here",
    position: "center top",
  },
];

const rotationInterval = 6500;

export function HomeFeatureHero() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return;

    const rotate = () => {
      if (document.visibilityState !== "visible") return;
      setActiveImage((current) => (current + 1) % featuredImages.length);
    };

    const intervalId = window.setInterval(rotate, rotationInterval);
    return () => window.clearInterval(intervalId);
  }, [isPaused, reducedMotion]);

  return (
    <section aria-label="Featured opportunities" className="home-feature-hero">
      <div aria-hidden="true" className="home-feature-images">
        {featuredImages.map((image, index) => (
          <div
            className={`home-feature-image${index === activeImage ? " is-active" : ""}`}
            key={image.src}
          >
            <Image
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              src={image.src}
              style={{ objectPosition: image.position }}
            />
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="home-feature-shade" />

      <div className="home-feature-content">
        <p className="home-feature-eyebrow">
          <span /> CamerStars <i /> Talent &amp; opportunity
        </p>
        <h1>
          Webcam model
          <br />
          <em>jobs. Your way.</em>
        </h1>
        <p className="home-feature-description">
          Work from home or in a studio, build your confidence, and find the support to grow.
        </p>
        <div className="home-feature-actions">
          <Link className="home-feature-cta" href="/apply-now">
            Find your opportunity <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <Link className="home-feature-link" href="/about-us">
            Get to know us
          </Link>
        </div>
        <p className="home-feature-note">For adults 18+ <span /> Remote or in-studio</p>
      </div>

      <div aria-label="Featured portrait controls" className="home-feature-controls">
        <div aria-label="Choose a featured portrait" className="home-feature-dots">
          {featuredImages.map((image, index) => (
            <button
              aria-current={index === activeImage ? "true" : undefined}
              aria-label={`Show portrait ${index + 1}: ${image.label}`}
              className={`home-feature-dot${index === activeImage ? " is-active" : ""}`}
              key={image.src}
              onClick={() => setActiveImage(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label={isPaused ? "Resume portrait rotation" : "Pause portrait rotation"}
          aria-pressed={isPaused}
          className="home-feature-pause"
          onClick={() => setIsPaused((paused) => !paused)}
          type="button"
        >
          {isPaused ? <Play aria-hidden="true" size={13} /> : <Pause aria-hidden="true" size={13} />}
          <span>{isPaused ? "Play" : "Pause"}</span>
        </button>
      </div>

      <a aria-label="Scroll to explore CamerStars" className="home-feature-scroll" href="#home-introduction">
        <span>Discover CamerStars</span>
        <ArrowDown aria-hidden="true" size={16} />
      </a>

      <span aria-hidden="true" className="home-feature-caption">
        {featuredImages[activeImage].label}
      </span>
    </section>
  );
}
