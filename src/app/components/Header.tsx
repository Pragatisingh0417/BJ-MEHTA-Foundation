"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex w-full">
        {/* LEFT BLUE BLOCK WITH LOGO */}
        <div className="bg-[#0175C2] w-[260px] flex justify-center items-center py-3">
          <Link href="/" className="flex justify-center items-center">
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
        <div className="flex-1 flex justify-between items-center px-52">
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>

            {/* DROPDOWN FIXED WITH NO DISAPPEAR */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button className="flex items-center gap-1">
                Heart Health <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  dropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link
                  href="/what-is-heart-disease"
                  className="block px-4 py-2 hover:bg-[#0175C2]"
                >
                  What is Heart Disease?
                </Link>

                <Link
                  href="/facts-and-stats"
                  className="block px-4 py-2 hover:bg-[#0175C2]"
                >
                  Facts & Statistics
                </Link>

                <Link
                  href="/healthy-heart-tips"
                  className="block px-4 py-2 hover:bg-[#0175C2]"
                >
                  Tips for a Healthy Heart
                </Link>
              </div>
            </div>

            <Link href="/news">Latest News</Link>
            <Link href="/get-involved">Get Involved</Link>

            {/* DONATE BUTTON */}
            <Link href="/donate">
              <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
                DONATE NOW
              </button>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>
      </div>

     

{/* MOBILE MENU */}
<div
  className={`md:hidden bg-white w-full shadow-md px-14  space-y-4 transition-all duration-300 overflow-hidden ${
    mobileMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <Link
    href="/"
    className="block text-lg"
    onClick={() => setMobileMenu(false)}
  >
    Home
  </Link>

  <Link
    href="/about"
    className="block text-lg"
    onClick={() => setMobileMenu(false)}
  >
    About Us
  </Link>

  {/* MOBILE DROPDOWN */}
  <details className="w-full">
    <summary className="cursor-pointer flex items-center gap-2 text-lg">
      Heart Health
    </summary>

    <div className="ml-4 mt-2 space-y-2">
      <Link
        href="/what-is-heart-disease"
        className="block"
        onClick={() => setMobileMenu(false)}
      >
        What is Heart Disease?
      </Link>

      <Link
        href="/facts-and-stats"
        className="block"
        onClick={() => setMobileMenu(false)}
      >
        Facts & Statistics
      </Link>

      <Link
        href="/healthy-heart-tips"
        className="block"
        onClick={() => setMobileMenu(false)}
      >
        Healthy Heart Tips
      </Link>
    </div>
  </details>

  <Link
    href="/news"
    className="block text-lg"
    onClick={() => setMobileMenu(false)}
  >
    Latest News
  </Link>

  <Link
    href="/get-involved"
    className="block text-lg"
    onClick={() => setMobileMenu(false)}
  >
    Get Involved
  </Link>

  <Link href="/donate" onClick={() => setMobileMenu(false)}>
    <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
      DONATE NOW
    </button>
  </Link>
</div>

    </header>
  );
}
