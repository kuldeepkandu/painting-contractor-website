"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type BannerSlide = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

export function SwiperBanner({
  slides,
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  slides: BannerSlide[];
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="relative isolate min-h-screen w-full overflow-hidden border-b border-border/80">
        <button
          type="button"
          className="hero-prev absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer text-white/30 transition hover:text-white/70 md:inline-flex md:left-6"
          aria-label="Previous banner slide"
        >
          <ChevronLeft size={84} strokeWidth={0.75} />
        </button>

        <button
          type="button"
          className="hero-next absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer text-white/30 transition hover:text-white/70 md:inline-flex md:right-6"
          aria-label="Next banner slide"
        >
          <ChevronRight size={84} strokeWidth={0.75} />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000}
          slidesPerView={1}
          loop
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.src}-${index}`}>
              <div className="relative min-h-screen w-full">
                {slide.type === "video" ? (
                  <video
                    className="min-h-screen w-full object-cover"
                    src={slide.src}
                    poster={slide.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt ?? title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

<div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_38%)]" />

        <div className="absolute inset-0 z-10 flex items-center pt-16 md:pt-20">
          <div className="mx-auto max-w-7xl w-full px-4 text-center md:px-6">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/90">
                {eyebrow}
              </p>
            )}
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
