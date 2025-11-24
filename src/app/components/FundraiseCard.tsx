"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "FUNDRAISE",
    text: "We raise funds because the seed money donated by Mercy and her family can only sustain the activities...",
    img: "/testimonial-1.jpg",
  },
  {
    id: 2,
    title: "DONATE",
    text: "Your contribution helps us reach more families and expand our mission...",
    img: "/testimonial-1.jpg",
  },
  {
    id: 3,
    title: "SUPPORT",
    text: "Support our mission by getting involved in our activities...",
    img: "/testimonial-1.jpg",
  },
   {
    id: 4,
    title: "SUPPORT",
    text: "Support our mission by getting involved in our activities...",
    img: "/testimonial-1.jpg",
  },
   {
    id: 5,
    title: "SUPPORT",
    text: "Support our mission by getting involved in our activities...",
    img: "/testimonial-1.jpg",
  },
   {
    id: 6,
    title: "SUPPORT",
    text: "Support our mission by getting involved in our activities...",
    img: "/testimonial-1.jpg",
  },
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(1);

  const next = () => index < cards.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 overflow-hidden">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* SLIDER TRACK */}
      <div
        className="flex transition-all duration-500"
        style={{
          transform: `translateX(calc(-${index * 33.33}% - ${index * 40}px))`,
        }}
      >
        {cards.map((card, i) => {
          const isActive = index === i;
          const isSide = Math.abs(index - i) === 1;

          return (
            <div
              key={i}
              className={`relative shrink-0 transition-all duration-500 ${
                isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
              style={{
                width: "33.33%",
                margin: "0 40px",
              }}
            >
              {/* TOP CIRCLE IMAGE */}
              <div className="absolute left-1/2 -top-12 -translate-x-1/2 z-20">
                <div className="h-24 w-24 rounded-full border-[5px] border-white shadow-xl overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* MAIN CARD */}
              <div className="bg-[#007BFF] text-white rounded-xl px-10 pt-16 pb-10 shadow-xl text-center">
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>

                <p className="text-sm leading-relaxed mb-6">
                  {card.text}
                </p>

                <button className="bg-white text-red-600 font-semibold px-5 py-2 rounded-full hover:bg-red-100 transition">
                  Read Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* GRADIENT MASKS */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-[12%] bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        <div className="w-[12%] bg-gradient-to-l from-white via-white/70 to-transparent"></div>
      </div>
    </div>
  );
}
