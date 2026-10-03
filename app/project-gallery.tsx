"use client";

import Image from "next/image";
import { useState } from "react";

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
            <button type="button" aria-label="Next screenshot" onClick={() => moveSlide(1)}>
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        )}
      </div>
    </figure>
  );
}