"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { image: "https://i.ibb.co/YTBVbc0r/Wedding.jpg" },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Slide Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-30 hover:scale-110 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-30 hover:scale-110 transition"
      >
        &#10095;
      </button>

      {/* Login Button */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
  <Link href="/events">
    <button className="bg-teal-600 hover:bg-teal-700 text-white text-base px-8 py-3 rounded-lg shadow-md transition transform hover:scale-105">
      Get Started
    </button>
  </Link>
</div>
    </section>
  );
};

export default HeroSection;
