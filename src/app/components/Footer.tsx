"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white pt-14 pb-10 px-6 md:px-16">

      {/* TOP HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <Image
          src="/logo (1).jpg"
          alt="Logo"
          width={140}
          height={140}
          className="rounded-lg shadow-lg"
        />

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about"
            target="_blank"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 transition shadow-lg">
              <FaFacebookF className="text-white" />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/company/106902013/"
            target="_blank"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 transition shadow-lg">
              <FaLinkedinIn className="text-white" />
            </div>
          </Link>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-red-600 opacity-60 mb-10"></div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">B J Mehta Foundation</h3>
          <p>The Foundation is inspired by the late Mr B J Mehta – a teacher and a philanthropist. He had a unique worldview and spent the majority of his life focussing on how he could improve the lives of those around him who were less fortunate than himself. His family would like to keep this legacy going.</p>
         
        </div>

        {/* MAIN LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Explore</h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-red-400 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-400 transition">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-red-400 transition">
              <Link href="/meet-our-teams">Our Teams</Link>
            </li>
            <li className="hover:text-red-400 transition">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-red-400 transition">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            
            <li className="hover:text-red-400 transition">
              <Link href="/make-a-donation">Donate</Link>
            </li>
            
          
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-12 text-sm opacity-80">
        © {new Date().getFullYear()} BJ Mehta Foundation. All rights reserved.
      </div>
    </footer>
  );
}
