"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function UrbanCentersSection() {
  return (
    <section className="w-full">

      {/* ============================
          HERO BANNER
      ============================= */}
      <div className="relative w-full h-[620px]">
        <Image
          src="/heart-banner-image-2.jpg"
          alt="Urban Centers"
          fill
          className="object-cover"
        />

        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-6xl mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Urban Centers: The Frontline in the Fight <br />
            Against Cardiovascular Disease
          </h1>

          <p className="mt-4 text-base sm:text-lg max-w-3xl leading-relaxed">
            Urban centres, where the vast majority of the world’s population now resides,
            are the frontline in our fight against cardiovascular disease. By harnessing
            a wide array of sectors—not just healthcare, but also urban planning,
            environment, and technology—we can make significant strides towards healthier
            populations and reduced premature loss of life.
          </p>

          {/* BUTTON */}
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full text-lg font-semibold max-w-fit">
            Heart Health Tips
          </button>

         {/* STATS ROW */}
<div className="flex items-center gap-16 mt-10 mb-10">

  {/* LEFT STAT */}
  <div className="flex items-center gap-4 text-white">
    <Image
      src="/kindpng_52617.png"
      width={65}
      height={65}
      alt="chart"
    />
    <div>
      <p className="text-4xl font-bold leading-tight">20.5m</p>
      <p className="text-lg">Deaths every year from CVD</p>
    </div>
  </div>

  {/* RIGHT STAT */}
  <div className="flex items-center gap-4 text-white">
    <Image
      src="/persentage icon.png"
      width={65}
      height={65}
      alt="percentage"
    />
    <div>
      <p className="text-4xl font-bold leading-tight">33%</p>
      <p className="text-lg">Of all deaths are from CVD</p>
    </div>
  </div>

</div>

        </div>
      </div>

      {/* ============================
          BOTTOM CARDS (OVERLAPPING)
      ============================= */}
      <div className="relative">
        <div
          className="
            absolute 
            -top-24
            left-1/2 
            -translate-x-1/2 
            z-20 
            w-full 
            max-w-6xl 
            bg-white 
            px-6 
            py-10 
            rounded-xl
            shadow-xl
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            <Card
              title="Volunteer"
              text="Serving with heart, learning with every step. Volunteering is where kindness becomes action."
            />

            <Card
              title="Donate"
              text="Extend a hand to someone in need. Donate today and change a life."
            />

            <Card
              title="Fundraise"
              text="Help us raise the funds that change lives. Be a part of the mission—every effort counts."
            />

          </div>
        </div>

        <div className="bg-white h-[260px]"></div>
      </div>

    </section>
  );
}

/* ------------------------------------
   REUSABLE CARD COMPONENT
--------------------------------------*/
function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded-2xl shadow-md p-10 text-center bg-white">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>

      <div className="mt-6 flex justify-center">
        <ChevronDown className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
}
