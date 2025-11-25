"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function TopHeader() {
  return (
    // Hides this entire top bar on mobile
    <div className="hidden md:block w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 text-sm">

        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={14} />
            <span>+237 682–084–962</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <span>atul.mehta1@nhs.net</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span>Contact us</span>

        {/* SOCIALS */}
<div className="flex items-center gap-4">
  <Link
    href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about"
    target="_blank"
  >
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
      <FaFacebookF className="cursor-pointer hover:text-gray-200 text-xl md:text-base" />
    </div>
  </Link>

  <Link
    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106902013%2Fadmin%2Fdashboard%2F"
    target="_blank"
  >
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
      <FaLinkedinIn className="cursor-pointer hover:text-gray-200 text-xl md:text-base" />
    </div>
  </Link>
</div>

        </div>

      </div>
    </div>
  );
}
