"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex w-full">

        {/* LEFT BLUE BLOCK WITH LOGO */}
        <div className="bg-[#0175C2] w-[260px] flex justify-center items-center py-3">
          <Link href="/">
            <Image
              src="/heart-logo.png"
              alt="Foundation Logo"
              width={85}
              height={85}
              className="object-contain"
            />
          </Link>
        </div>

        {/* RIGHT NAVBAR */}
        <div className="flex-1 flex justify-between items-center px-50">
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <Link href="/">Home</Link>

            {/* ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link href="/about" className="flex items-center gap-1">
                About Us <ChevronDown size={16} />
              </Link>

              {/* DROPDOWN */}
              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  aboutDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#0175C2]">Word From Mercy</Link>
                <Link href="/board-of-directors" className="block px-4 py-2 hover:bg-[#0175C2]">Board of Directors</Link>
                <Link href="/our-medical-advisory-team" className="block px-4 py-2 hover:bg-[#0175C2]">
                  Medical Advisory Board
                </Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#0175C2]">What We Do</Link>
              </div>
            </div>

            {/* HEART HEALTH */}
            <div
              className="relative"
              onMouseEnter={() => setHealthDropdown(true)}
              onMouseLeave={() => setHealthDropdown(false)}
            >
              <Link href="/heart-health" className="flex items-center gap-1">
                Heart Health <ChevronDown size={16} />
              </Link>

              {/* DROPDOWN */}
              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  healthDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link href="/what-is-heart-disease" className="block px-4 py-2 hover:bg-[#0175C2]">
                  What is Heart Disease?
                </Link>
                <Link href="/heart-disease-facts-and-statistics" className="block px-4 py-2 hover:bg-[#0175C2]">Facts & Statistics</Link>
                <Link href="/tips-for-a-healthy-heart" className="block px-4 py-2 hover:bg-[#0175C2]">Healthy Heart Tips</Link>
              </div>
            </div>

            <Link href="/latest-news">Latest News</Link>
            <Link href="/get-involved">Get Involved</Link>

            <Link href="/donate">
              <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
                DONATE NOW
              </button>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-black text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white w-full shadow-md px-10 space-y-4 transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/" className="block text-lg" onClick={() => setMobileMenu(false)}>Home</Link>

        <details>
          <summary className="cursor-pointer text-lg">
            <Link href="/about">About Us</Link>
          </summary>
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/word-from-mercy" onClick={() => setMobileMenu(false)}>Word From Mercy</Link>
            <Link href="/board-of-directors" onClick={() => setMobileMenu(false)}>Board of Directors</Link>
            <Link href="/our-medical-advisory-team" onClick={() => setMobileMenu(false)}>Medical Advisory Board</Link>
            <Link href="/what-we-do" onClick={() => setMobileMenu(false)}>What We Do</Link>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer text-lg">
            <Link href="/heart-health">Heart Health</Link>
          </summary>
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/what-is-heart-disease" onClick={() => setMobileMenu(false)}>What is Heart Disease?</Link>
            <Link href="/heart-disease-facts-and-statistics" onClick={() => setMobileMenu(false)}>Facts & Statistics</Link>
            <Link href="/tips-for-a-healthy-heart" onClick={() => setMobileMenu(false)}>Healthy Heart Tips</Link>
          </div>
        </details>

        <Link href="/latest-news" className="block text-lg" onClick={() => setMobileMenu(false)}>Latest News</Link>
        <Link href="/get-involved" className="block text-lg" onClick={() => setMobileMenu(false)}>Get Involved</Link>

        <Link href="/donate" onClick={() => setMobileMenu(false)}>
          <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
            DONATE NOW
          </button>
        </Link>
      </div>
    </header>
  );
}
