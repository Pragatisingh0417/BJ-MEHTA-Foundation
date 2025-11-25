"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex w-full items-center justify-between px-4 md:px-12">

        {/* LEFT LOGO */}
        <div className="py-3">
          <Link href="/">
            <Image
              src="/logo (1).jpg"
              alt="Foundation Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/meet-our-teams">Our Teams</Link>
          <Link href="/latest-news">Our Projects</Link>
          <Link href="/get-involved">Contact Us</Link>

          <Link href="/make-a-donation">
            <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
              CLICK HERE TO DONATE
            </button>
          </Link>

          <Link href="/get-involved">
            <button className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-black transition">
              GET IN TOUCH
            </button>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white w-full shadow-md px-6 space-y-4 transition-all duration-300 overflow-hidden 
        ${mobileMenu ? "max-h-[600px] py-6 opacity-100" : "max-h-0 opacity-0 py-0"}`}
      >
        <Link href="/" onClick={() => setMobileMenu(false)} className="block text-lg">
          Home
        </Link>

        {/* ABOUT US MOBILE */}
        <details>
          <summary className="text-lg cursor-pointer">About Us</summary>
          <div className="ml-4 mt-2 space-y-2 text-base">
            <Link href="/word-from-mercy">Word From Mercy</Link>
            <Link href="/board-of-directors">Board of Directors</Link>
            <Link href="/our-medical-advisory-team">Medical Advisory Board</Link>
            <Link href="/what-we-do">What We Do</Link>
          </div>
        </details>

        {/* HEART HEALTH MOBILE */}
        <details>
          <summary className="text-lg cursor-pointer">Heart Health</summary>
          <div className="ml-4 mt-2 space-y-2 text-base">
            <Link href="/what-is-heart-disease">What is Heart Disease?</Link>
            <Link href="/heart-disease-facts-and-statistics">Facts & Statistics</Link>
            <Link href="/tips-for-a-healthy-heart">Healthy Heart Tips</Link>
          </div>
        </details>

        <Link href="/latest-news" className="block text-lg">
          Latest News
        </Link>

        <Link href="/get-involved" className="block text-lg">
          Get Involved
        </Link>

        <Link href="/make-a-donation">
          <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
            DONATE NOW
          </button>
        </Link>

        <Link href="/get-involved">
          <button className="w-full bg-gray-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-black transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </header>
  );
}
