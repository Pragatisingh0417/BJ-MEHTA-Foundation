"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


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
            About The Mercy Azoh-Mbi Heart Foundation
          </h1>

          <p className="mt-5 text-xl max-w-2xl opacity-90 tracking-wide">
            Dedicated to creating a world where heart health is accessible for all.
          </p>
        </motion.div>
      </section>

      {/* ======================================
          OUR VISION
      ====================================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-red-600 mt-2 text-lg font-semibold">
            Cardiovascular health for everyone
          </p>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            We aim to reduce global deaths from cardiovascular diseases through
            accessibility, awareness, and medical support.
          </p>
        </motion.div>
<Link href="/heart-health">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="mt-10 px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg"
  >
    More On Heart Disease <ChevronRight size={18} />
  </motion.button>
</Link>
      </section>

      {/* ======================================
          MISSION SECTION — NOW PREMIUM
      ====================================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative">

        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center">Our Mission</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {missionList.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MissionCard text={text} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          VALUES SECTION — PREMIUM CARDS
      ====================================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center">Our Core Values</h2>

        <div className="grid sm:grid-cols-3 gap-10 mt-16">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ValueCard title={v.title} text={v.text} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================
          STORY SECTIONS — ANIMATED
      ====================================== */}
      <StorySection
        title="OUR INSPIRATION"
        text="Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn. On October 23, 2009, she complained of fatigue, fever, a headache, blurred vision … and was rushed to the hospital for what she thought was a routine ailment. Amid the H1N1 crisis, emergency room staff overlooked her medical history, misdiagnosed her condition, prescribed Tamiflu, and sent her home, only for her to be rushed again to the emergency department two days later following a sudden deterioration of her condition. When she was placed in a wheelchair shortly thereafter, little did she know that she had just taken her last steps on her own two feet. She was in fact in the throes of endocarditis, a virulent infection of the heart valves. She soon slipped into a coma and spent several weeks wavering between life and death.

"
        image="/about-image1.webp"
        reverse={false}
      />

      <StorySection
        title="TRAGEDY TO TRIUMPH"
        text="Mercy would later make a miraculous recovery just when her caregivers had pointed out that she had only a few hours to live. In the weeks and months that followed, she would undergo four heart surgeries as well as the amputation of her two arms and two legs – the only options left to save her life. Following intensive physical and psychological therapy and the fitting of prostheses, Mercy became a virtual prosthetic woman: two prosthetic heart valves, two prosthetic arms and two prosthetic legs.

The bouts of depression and the suicidal thoughts she wrestled with following her amputations were merely the clouds that foreshadowed the sunshine. Guided by her faith, fortitude and the support of her family and community, Mercy has found a new calling as champion for the afflicted. Through The Mercy Azoh-Mbi Heart

Foundation, she aims to spread rays of sunshine so that others do not die needlessly from easily treatable heart conditions."
        image="/about-image1.webp"
        reverse={true}
      />
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
