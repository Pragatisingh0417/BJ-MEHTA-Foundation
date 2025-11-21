"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function TopHeader() {
  return (
    // Hides this entire top bar on mobile
    <div className="hidden md:block w-full bg-[#0A75CE] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 text-sm">

        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={14} />
            <span>+237 682–084–962</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <span>info@maheartfoundation.org</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span>Contact us</span>

          <FaFacebookF className="cursor-pointer hover:text-gray-200" size={16} />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-200" size={16} />
        </div>

      </div>
    </div>
  );
}
