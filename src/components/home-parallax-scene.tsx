"use client";

import Image from "next/image";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

export function HomeParallaxScene({
  alt,
  children,
  className,
  priority = false,
  interactive = false,
  sizes = "100vw",
  src,
}: {
  alt: string;
  children: ReactNode;
  className: string;
  priority?: boolean;
  interactive?: boolean;
  sizes?: string;
  src: string;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (
      !interactive ||
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--scene-pointer-x", `${(x * 18).toFixed(1)}px`);
    event.currentTarget.style.setProperty("--scene-pointer-y", `${(y * 14).toFixed(1)}px`);
  }

  function resetPointer() {
    if (!interactive) return;
    mediaRef.current?.parentElement?.style.setProperty("--scene-pointer-x", "0px");
    mediaRef.current?.parentElement?.style.setProperty("--scene-pointer-y", "0px");
  }

  useEffect(() => {
    const media = mediaRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media) return;

    let frame = 0;
    const updatePosition = () => {
      cancelAnimationFrame(frame);
      if (reducedMotion.matches) {
        media.style.setProperty("--scene-parallax", "0px");
        media.parentElement?.style.setProperty("--scene-pointer-x", "0px");
        media.parentElement?.style.setProperty("--scene-pointer-y", "0px");
        return;
      }

      frame = requestAnimationFrame(() => {
        const bounds = media.parentElement?.getBoundingClientRect();
        if (!bounds) return;

        const distanceFromCenter =
          window.innerHeight / 2 - (bounds.top + bounds.height / 2);
        const motionScale = window.innerWidth <= 620 ? 0.2 : 0.4;
        const travelLimit = window.innerWidth <= 620 ? 66 : 150;
        const offset = Math.max(
          -travelLimit,
          Math.min(travelLimit, distanceFromCenter * motionScale),
        );
        media.style.setProperty("--scene-parallax", `${offset.toFixed(1)}px`);
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    reducedMotion.addEventListener("change", updatePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      reducedMotion.removeEventListener("change", updatePosition);
    };
  }, []);

  return (
    <section
      className={`home-parallax-scene ${className}`}
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
    >
      <div aria-hidden="true" className="home-parallax-media" ref={mediaRef}>
        <Image alt={alt} fill priority={priority} sizes={sizes} src={src} />
      </div>
      <div aria-hidden="true" className="home-parallax-shade" />
      {children}
    </section>
  );
}
