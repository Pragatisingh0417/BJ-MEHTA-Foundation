"use client";

import Image from "next/image";
import Link from "next/link";

export default function FactsAndStatsPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[300px] md:h-[360px]">
        <Image
          // local uploaded file path (your tooling will convert this to a URL)
          src="/mnt/data/45351f7b-ef76-4a3b-b339-18678ea6ae61.png"
          alt="Heart disease facts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/65"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Heart Disease Facts & Statistics
          </h1>
          <p className="mt-3 max-w-3xl text-sm md:text-lg opacity-95">
            Key facts and figures about cardiovascular disease — worldwide and in the United States.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* MAIN */}
        <article className="lg:col-span-3 space-y-8 text-gray-800 text-base leading-relaxed">

          {/* Worldwide */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">World-wide</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Cardiovascular diseases (CVDs), commonly referred to as heart disease
                or stroke, are the number 1 cause of death around the world.
              </li>
              <li>
                1 in 3 deaths globally are as a result of CVD; the majority of premature
                heart disease and stroke is preventable.
              </li>
              <li>
                In 2010 CVD cost US$ 863 billion — estimated to rise by 22% to US$ 1,044
                billion by 2030.
              </li>
              <li>
                80% of CVD deaths occur in low- to middle-income countries.
              </li>
            </ul>
          </div>

          {/* In the United States */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">In the United States</h2>
            <p className="mt-4">
              Heart disease is the leading cause of death for both men and women. Below are
              a few key statistics and facts:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>About 630,000 Americans die from heart disease each year — that's 1 in every 4 deaths.</li>
              <li>Every year roughly 735,000 Americans have a heart attack — ~525,000 are first attacks, 210,000 are recurrent.</li>
              <li>Someone in the U.S. has a heart attack every 40 seconds; each minute more than one person dies from a heart disease-related event.</li>
              <li>Heart disease costs the United States about $200 billion each year (health care, medication, lost productivity).</li>
              <li>Heart disease is the leading cause of death across most racial and ethnic groups; for some groups it is second only to cancer.</li>
            </ul>
          </div>

          {/* Early Action */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Early Action is Important for Heart Attack</h2>
            <p className="mt-4">
              Know the warning signs and act quickly — survival chances improve when treatment begins early.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Chest pain or discomfort.</li>
              <li>Pain in arms, back, neck, jaw, or upper stomach.</li>
              <li>Shortness of breath.</li>
              <li>Nausea, lightheadedness, or cold sweats.</li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              In a 2005 survey most respondents (92%) recognized chest pain as a heart attack symptom, but only 27% were aware of all major symptoms and knew to call emergency services immediately.
            </p>
          </div>

          {/* Callouts / Facts Box */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Fast fact</h3>
              <p className="mt-2 text-sm">
                About 47% of sudden cardiac deaths occur outside a hospital — many people don't act on early warning signs.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Economic impact</h3>
              <p className="mt-2 text-sm">
                The global economic burden of CVD is massive and rising, with huge impacts on healthcare systems and productivity.
              </p>
            </div>
          </div>

          {/* Links for further reading */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">More resources</h3>
            <p className="mt-3 text-sm text-gray-700">
              Kindly check out the following for more detailed statistics and breakdowns:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
              <li><a className="text-blue-700 underline" href="#">Heart disease facts and stats (global)</a></li>
              <li><a className="text-blue-700 underline" href="#">In the United States — detailed stats</a></li>
              <li><a className="text-blue-700 underline" href="#">What is heart disease? (overview)</a></li>
              <li><Link href="/heart-health/healthy-heart-tips" className="text-blue-700 underline">Tips for a healthy heart</Link></li>
            </ul>
          </div>
        </article>

        {/* SIDEBAR: quick nav / CTA */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="sticky top-28 bg-white border rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg">On this page</h4>
            <nav className="mt-4 text-sm">
              <a className="block py-2 text-blue-700 hover:underline" href="#worldwide">World-wide</a>
              <a className="block py-2 text-blue-700 hover:underline" href="#us">In the United States</a>
              <a className="block py-2 text-blue-700 hover:underline" href="#early-action">Early Action</a>
              <a className="block py-2 text-blue-700 hover:underline" href="#resources">Resources</a>
            </nav>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <h4 className="font-semibold text-lg">Need help?</h4>
            <p className="mt-2 text-sm">If you or someone shows heart attack symptoms, call your local emergency number immediately.</p>
            <Link href="/contact" className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-full text-sm">Contact us</Link>
          </div>
        </aside>
      </section>

      {/* FOOTER CTA */}
      <section className="w-full bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want more heart health resources?</h3>
            <p className="mt-1 text-sm">Explore prevention tips, facts, and guides to protect your heart.</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/heart-health/healthy-heart-tips" className="px-6 py-3 bg-red-500 rounded-full text-white font-semibold">Tips For A Healthy Heart</Link>
            <Link href="/heart-health/what-is-heart-disease" className="px-6 py-3 border border-white rounded-full text-white">What is heart disease?</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
