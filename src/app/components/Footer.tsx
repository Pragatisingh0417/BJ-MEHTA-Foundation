"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-10 px-6 md:px-20">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT : LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <Image
              src="/logo (1).jpg"
              alt="Logo"
              width={110}
              height={110}
              className="rounded-lg shadow-md border border-red-600/40"
            />

            <h2 className="text-2xl font-semibold text-red-500">
              B J Mehta Foundation
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
            The Foundation is inspired by the late Mr B J Mehta – a teacher and a philanthropist. He had a unique worldview and spent the majority of his life focussing on how he could improve the lives of those around him who were less fortunate than himself. His family would like to keep this legacy going.
          </p>
        </div>

        {/* RIGHT : EXPLORE + IMAGES */}
        <div className="md:pl-10 flex flex-col justify-between">

          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              Explore
            </h3>

            <ul className="space-y-3 text-lg text-gray-300 mb-8">
              <li className="hover:text-red-400 transition"><Link href="/">Home</Link></li>
              <li className="hover:text-red-400 transition"><Link href="/about">About</Link></li>
              <li className="hover:text-red-400 transition"><Link href="/meet-our-teams">Our Teams</Link></li>
              <li className="hover:text-red-400 transition"><Link href="/projects">Projects</Link></li>
              <li className="hover:text-red-400 transition"><Link href="/get-involved">Contact Us</Link></li>
            </ul>
          </div>

          {/* IMAGES (FIXED DESIGN) */}
          <div className="grid grid-cols-2 gap-4 mt-4">

            <div className="relative w-full h-32 rounded-xl overflow-hidden group">
              <Image
                src="/bj-mehta-banner.jpg"
                alt="Footer Image 1"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="relative w-full h-32 rounded-xl overflow-hidden group">
              <Image
                src="/bj-mehta-banner.jpg"
                alt="Footer Image 2"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">

          <span>
            © {new Date().getFullYear()} B J Mehta Foundation. All rights reserved.
          </span>

          <a
            href="https://gemwebservices.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span>Made by</span>

            <img
              src="/gem-logo.png"
              alt="GEM Web Services"
              className="h-13 w-auto object-contain"
            />
          </a>

        </div>
      </div>

    </footer>
  );
}