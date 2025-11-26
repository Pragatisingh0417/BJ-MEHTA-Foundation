"use client";

import Image from "next/image";
import Link from "next/link";


export default function AboutBjMehta() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT — Text Content */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide text-gray-700">ABOUT US</h3>

        <h2 className="mt-2 text-4xl font-extrabold text-[#FD201F]">
          About Mr B J Mehta

        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
The Foundation is inspired by the late Mr B J Mehta – a teacher and a philanthropist. He had a unique worldview and spent the majority of his life focussing on how he could improve the lives of those around him who were less fortunate than himself. His family would like to keep this legacy going.

        </p>

       <Link href="/our-projects">
  <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
    Learn more
  </button>
</Link>

      </div>

      {/* RIGHT — Image */}
    <div className="w-full h-[420px] relative rounded-2xl overflow-hidden shadow-lg">
  <Image
  src="/b-j-mehta-foundation-1.jpg"
  alt="Mercy profile"
  fill
  unoptimized
  className="object-cover"
/>

</div>

    </section>
  );
}
