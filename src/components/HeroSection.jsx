"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { slug: "Event 1", image: "/assets/img/event1.jpg" },
  { slug: "Event 2", image: "/assets/img/event2.jpg" },
  { slug: "Event 3", image: "/assets/img/event3.jpg" },
  { slug: "Event 4", image: "/assets/img/event4.jpg" },
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
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image src={slide.image} alt={slide.slug} fill className="object-cover" priority={index === 0} />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 sm:px-8 md:px-12 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {slide.slug} Event Management
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
              Wedding • Birthday • Corporate • Private Events
            </p>
            <button className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-white font-medium shadow-lg hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
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
    </section>
  );
};

export default HeroSection;
