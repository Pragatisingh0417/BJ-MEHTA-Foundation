"use client";

import Image from "next/image";

export default function FrankyCampaignPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Franky Secondary School Campaign
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
          Yaounde, Cameroon • April 25, 2025
        </p>
      </section>

      {/* ============================
          CONTENT SECTION
      ============================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        {/* White Card */}
        <div className="bg-white p-10 shadow-lg border rounded-2xl">

          {/* ========== Image ========== */}
          <div className="w-full mb-8">
            {/* Replace with real image */}
            <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Image Placeholder (Fig 1)
            </div>

            <p className="text-sm text-gray-600 mt-2 italic">
              Fig 1: A group picture with Franky Secondary students and MA Heart Team, Yaounde - Cameroon
            </p>
          </div>

          {/* ========== Heading ========== */}
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            About the Campaign
          </h2>

          {/* ========== Paragraphs ========== */}
          <p className="text-gray-800 leading-relaxed mb-6">
            The “Franky Campaign” was a heart health sensitization event organized
            by The Mercy Azoh-Mbi Heart Foundation’s Cameroon office at Franky
            Bilingual Secondary and High School in Yaounde on April 25, 2025. The
            campaign aimed to raise awareness about heart health and early
            prevention among young people.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            Fifty participants, including students and volunteer medical doctors,
            attended the event. The activities, held from 10:00 AM to 1:00 PM,
            featured presentations on heart structure and function,
            cardiovascular disease risk factors, and common heart diseases.
            Students also engaged in practical sessions on measuring blood
            pressure and performing cardiopulmonary resuscitation (CPR).
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            The campaign successfully established a working relationship with the
            school, and participating students gained valuable knowledge about
            cardiovascular diseases. A key challenge faced was a short planning
            period, which led to hurried preparations. Despite this, the campaign
            was considered a success in achieving its objectives and initiating
            the country office’s activities for 2025.
          </p>

        </div>
      </section>

    </main>
  );
}
