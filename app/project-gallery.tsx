"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type ProjectSlide = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export function ProjectGallery({
  name,
  slides,
}: {
  name: string;
  slides: ProjectSlide[];
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [activeSlide, paused, reducedMotion, slides.length]);

  function moveSlide(direction: number) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <figure
      className="project-gallery"
      aria-label={`${name} screenshots`}
    >
      <div className="project-gallery-stage" aria-live="off">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            className={`project-gallery-image${index === activeSlide ? " is-active" : ""}`}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 760px) 92vw, 48vw"
            priority={index === 0}
            aria-hidden={index !== activeSlide}
            style={{ objectFit: slide.fit ?? "cover" }}
          />
        ))}
        <div className="project-gallery-shade" aria-hidden="true" />
        <span className="project-gallery-caption" aria-live="polite">
          {slides[activeSlide].caption}
        </span>
        {slides.length > 1 && (
          <div className="project-gallery-controls" aria-label={`${name} screenshot controls`}>
            <button type="button" aria-label="Previous screenshot" onClick={() => moveSlide(-1)}>
              <span aria-hidden="true">&#8249;</span>
            </button>
            <div className="project-gallery-dots" role="group" aria-label="Choose screenshot">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={index === activeSlide ? "is-active" : ""}
                  aria-label={`Show ${slide.caption}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="project-gallery-pause"
              aria-label={paused ? "Play screenshot transitions" : "Pause screenshot transitions"}
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                {paused ? <path d="M5 3.5 12 8l-7 4.5z" /> : <path d="M5.5 3.5v9m5-9v9" />}
              </svg>
            </button>
            <button type="button" aria-label="Next screenshot" onClick={() => moveSlide(1)}>
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        )}
      </div>
      <figcaption className="project-gallery-meta">
        <span>{name}</span>
        <span>{String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}