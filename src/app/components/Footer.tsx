"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-12 px-6 md:px-20">

      {/* MAIN GRID: LEFT = ABOUT , RIGHT = EXPLORE + IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT : LOGO + ABOUT TEXT */}
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

          <p className="text-gray-300 leading-relaxed text-lg">
            The Foundation is inspired by the late Mr B J Mehta – a teacher and a philanthropist. He had a unique worldview and spent the majority of his life focussing on how he could improve the lives of those around him who were less fortunate than himself. His family would like to keep this legacy going.
          </p>
        </div>

        {/* RIGHT : EXPLORE + SMALL IMAGES */}
        <div className="md:pl-10">

          {/* Explore Links */}
          <h3 className="text-xl font-semibold mb-4 text-red-500">Explore</h3>

          <ul className="space-y-3 text-lg text-gray-300 mb-8">
            <li className="hover:text-red-400 transition"><Link href="/">Home</Link></li>
            <li className="hover:text-red-400 transition"><Link href="/about">About</Link></li>
            <li className="hover:text-red-400 transition"><Link href="/meet-our-teams">Our Teams</Link></li>
            <li className="hover:text-red-400 transition"><Link href="/projects">Projects</Link></li>
            <li className="hover:text-red-400 transition"><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* SMALL IMAGES BELOW EXPLORE */}
          <div className="grid grid-cols-2 gap-4">

            <div className="relative w-full h-28 rounded-lg overflow-hidden">
              <Image
                src="/bj-mehta-banner.jpg" // change to your image
                alt="Footer Small Image 1"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="relative w-full h-28 rounded-lg overflow-hidden">
              <Image
                src="/bj-mehta-banner.jpg" // change to your image
                alt="Footer Small Image 2"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>

          </div>
        </div>
        
      </div>

      {/* COPYRIGHT */}
      <p className="text-center mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} B J Mehta Foundation. All rights reserved.
      </p>
    </footer>
  );
}
