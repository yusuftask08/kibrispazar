"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function HeroBannerSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    autoplay: true,
  });

  const banners = ["/banner-1.jpg", "/banner-2.jpg"];

  return (
    <section className="w-full bg-gray-100 overflow-hidden">
      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        {banners.map((src, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              width={1440}
              height={400}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}