"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/CameroonOffice.png"  // replace with your hero image
          alt="About Mercy Foundation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-900/60"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About The Mercy Azoh-Mbi Heart Foundation
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Dedicated to creating a world where heart health is a right — not a privilege.
          </p>
        </div>
      </section>

      {/* ============================
          VISION SECTION
      ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Our Vision</h2>
        <p className="text-center text-red-500 font-semibold mt-2">
          Cardiovascular health for everyone
        </p>

        <p className="mt-8 text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto">
          Contribute to the promotion of healthy hearts in order to reduce the mortality
          rate from cardiovascular diseases. We believe every human being should have
          access to the information, care and treatment they need to keep their heart healthy.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold flex items-center gap-2">
            More On Heart Disease <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ============================
          MISSION SECTION
      ============================= */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Mission</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">

            <MissionItem text="Conduct outreach activities to raise awareness about heart disease, its prevention and treatment, with a focus on women and the underprivileged." />

            <MissionItem text="Promote community cardiovascular health support centers to raise awareness and take action to prevent heart disease." />

            <MissionItem text="Support medical students and researchers from developing countries to advance cardiac care research." />

            <MissionItem text="Strengthen the capacity of medical institutions and practitioners to improve their ability to prevent, diagnose and cure heart diseases." />

            <MissionItem text="Establish and coordinate a network of cardiologists and heart institutes worldwide offering free care services for underprivileged populations." />
          </div>
        </div>
      </section>

      {/* ============================
          VALUES SECTION
      ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>

        <div className="grid sm:grid-cols-3 gap-10 mt-12">

          <ValueCard
            title="Accountability & Transparency"
            text="Responsible management of all foundation affairs."
          />

          <ValueCard
            title="Care & Compassion"
            text="Delivering heart health services with empathy."
          />

          <ValueCard
            title="Credibility & Trust"
            text="Building strong, trustworthy relationships."
          />

        </div>
      </section>

      {/* ============================
          A WORD FROM MERCY
      ============================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold">A Word From Mercy</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Born out of a vision to save lives, The Mercy Azoh-Mbi Heart Foundation
              continues to stand as a beacon of hope. Our commitment is to ensure that
              everyone—regardless of background—has access to life-changing information
              and cardiovascular care.
            </p>
          </div>

          <Image
            src="/about-image1.webp"
            width={500}
            height={500}
            alt="Mercy Founder"
            className="rounded-xl object-cover"
          />

        </div>
      </section>

      {/* ============================
          TEAM SECTION
      ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <TeamSection title="Board of Directors" />

        <TeamSection title="Medical Board" />

        <TeamSection title="Jobs" />

      </section>

    </main>
  );
}

/* -----------------------------------
   COMPONENTS
------------------------------------*/
function MissionItem({ text }: { text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-8 border rounded-xl shadow-sm text-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function TeamSection({ title }: { title: string }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">Content coming soon...</p>
    </div>
  );
}
