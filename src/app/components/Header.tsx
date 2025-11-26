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
          <Link href="/our-projects">Our Projects</Link>
          <Link href="/get-involved">Contact Us</Link>

          <Link href="/bj-mehta-foundation">
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
   <Link href="/about" className="block text-lg">
         About us
        </Link>
        <Link href="/meet-our-teams" className="block text-lg">
         Our Teams
        </Link>

        <Link href="/our-projects" className="block text-lg">
          Our Projects

        </Link>

        <Link href="/get-involved" className="block text-lg">
          Contact Us

        </Link>

        <div className="w-full flex flex-col md:flex-row items-center gap-4">

  <Link href="/bj-mehta-foundation" className="w-full md:w-auto">
    <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
      CLICK HERE TO DONATE
    </button>
  </Link>

  <Link href="/get-involved" className="w-full md:w-auto">
    <button className="w-full bg-gray-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-black transition">
      CONTACT US
    </button>
  </Link>

</div>

      </div>
    </header>
  );
}
