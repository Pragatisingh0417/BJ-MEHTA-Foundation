"use client";
import Link from "next/link";

export default function NewsletterBanner() {
  return (
    <section className="w-full bg-red-600 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* TEXT */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center md:text-left">
          Keep Updated About Our Newsletter
        </h2>

        {/* BUTTON */}
        <Link href="/get-involved">
  <button className="mt-6 px-8 py-3 bg-black text-white rounded-full font-semibold transition">
    Learn more
  </button>
</Link>
        
      </div>
    </section>
  );
}
