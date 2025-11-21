"use client";

import Link from "next/link";

export default function HeartHealthPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Heart Health
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
          Resources for a healthy heart
        </p>
      </section>

      {/* ============================
          CLICKABLE BUTTON CARDS
      ============================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <Link
            href="/what-is-heart-disease"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-900">
              What Is Heart Disease?
            </h3>
          </Link>

          {/* Card 2 */}
          <Link
            href="/heart-disease-facts-and-statistics"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-900">
              Heart Disease Facts & Stats
            </h3>
          </Link>

          {/* Card 3 */}
          <Link
            href="/tips-for-a-healthy-heart"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-900">
              Tips For A Healthy Heart
            </h3>
          </Link>

        </div>
      </section>

    </main>
  );
}
