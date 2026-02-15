"use client";

import { useEffect, useRef } from "react";

const slides = [
  { src: "/carousel/carousel-1.png", alt: "Team collaboration and strategy meeting at Optimal IT Solution" },
  { src: "/carousel/carousel-2.png", alt: "Modern responsive admin dashboard and web application development" },
  { src: "/carousel/carousel-3.png", alt: "Software development and coding expertise" },
  { src: "/carousel/carousel-4.png", alt: "Cloud computing and IT solutions" },
  { src: "/carousel/carousel-5.png", alt: "Custom software and dashboard development" },
  { src: "/carousel/carousel-6.png", alt: "Healthcare and business management systems" },
  { src: "/carousel/carousel-7.png", alt: "Modern office and collaborative workspace" },
];

type HomeCarouselProps = { embed?: boolean };

export function HomeCarousel({ embed = false }: HomeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    let instance: { dispose: () => void } | null = null;
    import("bootstrap").then((mod) => {
      if (mod.Carousel && el) {
        instance = new mod.Carousel(el, { interval: 4500, ride: "carousel" });
      }
    });
    return () => { instance?.dispose(); };
  }, []);

  const carouselEl = (
    <div
      ref={carouselRef}
      id="homeCarousel"
      className={`carousel slide carousel-fade rounded-3 overflow-hidden shadow${embed ? " h-100" : ""}`}
    >
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="carousel-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    className="d-block w-100"
                    alt={slide.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
  );

  if (embed) {
    return <div className="carousel-section carousel-embed h-100">{carouselEl}</div>;
  }

  return (
    <section className="carousel-section py-3" aria-label="Our work and environment">
      <div className="container">{carouselEl}</div>
    </section>
  );
}
