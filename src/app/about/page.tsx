"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import WordFromMercy from "../components/WordFromMercy";


export default function AboutPage() {
  return (
    <main className="w-full text-gray-800">

      {/* ======================================
          HERO SECTION
      ====================================== */}
      <section className="relative w-full h-[550px] overflow-hidden">
        <Image
          src="/bj-mehta-banner.jpg"
          alt="About Mercy Foundation"
          fill
          className="object-cover scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col justify-center px-6 max-w-6xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-snug">
           Carrying forward a legacy built on kindness, service, and compassion.
          </h1>

          <p className="mt-5 text-xl max-w-2xl opacity-90 tracking-wide">
Dedicated to continuing Mr. B. J. Mehta’s lifelong mission of helping others.          </p>
        </motion.div>
      </section>
<WordFromMercy />
      
     

  

      
    </main>
  );
}

/* -----------------------------------------
   MISSION CARD
------------------------------------------*/
function MissionCard({ text }: { text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition duration-300">
      <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
    </div>
  );
}

/* -----------------------------------------
   VALUE CARD
------------------------------------------*/
function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

/* -----------------------------------------
   STORY SECTION
------------------------------------------*/
function StorySection({
  title,
  text,
  image,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
}) {
  return (
    <section className="py-24 bg-red-50/40">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">{text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={image}
            width={520}
            height={520}
            alt="Mercy Founder"
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   DATA
------------------------------------------*/
const missionList = [
  "Conduct outreach activities to raise awareness about heart disease.",
  "Promote community cardiovascular health support centers.",
  "Support medical students & researchers in cardiac care.",
  "Strengthen medical institutions’ diagnostic & treatment capacities.",
  "Coordinate global cardiologist networks for free care.",
];

const values = [
  {
    title: "Accountability & Transparency",
    text: "Responsible management of the Foundation’s affairs.",
  },
  {
    title: "Care & Compassion",
    text: "Empathetic and human-driven cardiovascular services.",
  },
  {
    title: "Credibility & Trust",
    text: "Reliable partnerships with patients and stakeholders.",
  },
];
