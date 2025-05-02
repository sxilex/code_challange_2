"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
];

export default function InfiniteCarousel() {
  const [current, setCurrent] = useState(1); // Start at the 1st real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const extendedSlides = [
    slides[totalSlides - 1], // Duplicate last
    ...slides,
    slides[0], // Duplicate first
  ];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Handle looping
  useEffect(() => {
    if (current === totalSlides + 1) {
      // Reached clone of first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1); // Jump to real first
      }, 300);
    } else if (current === 0) {
      // Reached clone of last slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(totalSlides); // Jump to real last
      }, 300);
    } else {
      setIsTransitioning(true);
    }
  }, [current, totalSlides]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl bg-gray-800 text-white">
      <div
        ref={slideRef}
        className={`flex`}
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          width: `${extendedSlides.length * 100}%`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-64 flex items-center justify-center text-2xl font-bold"
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-3 py-1"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-3 py-1"
      >
        ›
      </button>
    </div>
  );
}
