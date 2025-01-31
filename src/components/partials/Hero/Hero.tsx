"use client";

import { Overlay } from "@/components/elements";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroProps {
  image?: string;
  headline?: string;
  description?: string;
  ctaLink?: string;
  ctaLabel?: string;
}

const Hero = ({
  image = "/images/home-hero.jpg",
  headline = "Relax, Refresh, Rejuvenate",
  description = "Escape the stress of daily life and indulge in pure tranquility. Experience soothing massages, revitalizing facials, and luxurious treatments designed to nourish your body and mind.",
  ctaLink = "/services",
  ctaLabel = "Book Your Escape",
}: HeroProps) => {
  const [heroHeight, setHeroHeight] = useState<string>("100vh");

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const headerHeight = header.getBoundingClientRect().height;
      setHeroHeight(`calc(100vh - ${headerHeight}px)`);
    }
  }, []);

  return (
    <div
      className="hero relative"
      style={{
        height: heroHeight,
        backgroundImage: `url(${image})`,
      }}
    >
      <Overlay />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
            {headline}
          </h1>
          <p className="mb-5">{description}</p>
          <Link href={ctaLink} className="btn btn-wide btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
