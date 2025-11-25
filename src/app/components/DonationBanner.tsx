"use client";
import Link from "next/link";

import Image from "next/image";

export default function DonationBanner() {
  return (
    <section className="relative w-full h-[650px] sm:h-[700px] md:h-[600px] lg:h-[650px] overflow-hidden">

      {/* FULL BACKGROUND IMAGE */}
      <Image
        src="/bj-mehta-banner.jpg"
        alt="donation banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl h-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-16 md:pt-0">

        {/* LEFT: Heading */}
        <div className="text-left text-white max-w-xl md:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Honouring A Life 
            <br />
            Of Service
          </h1>

          {/* Red underline */}
          <svg
            viewBox="0 0 200 20"
            className="mt-4 w-40 h-6 sm:w-52 sm:h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#e11d2b"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* RIGHT: Donation Box */}
        <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm bg-white/95">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            MAKE A DONATION
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 text-center">
            Your donation will go a long way in helping us achieve our mission.
            You can visit our website to donate online or send a check to the Foundation.
            We are a registered Canadian charity, and you will receive a tax receipt.
          </p>

          <p className="mt-4 text-sm sm:text-base text-red-500 text-center">
            You can donate via PayPal, Credit Card, or Mobile Money.
          </p>

         <div className="mt-6 flex flex-col gap-4">
  <Link href="/bj-mehta-foundation" className="w-full">
  <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition">
Click here to donate us  </button>
  </Link>

  <Link href="/get-involved" className="w-full">
    <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition">
      OR Contact us
    </button>
  </Link>

</div>

          <p className="mt-4 text-xs text-gray-400 text-center">
            Thanks.
          </p>
        </div>

      </div>
    </section>
  );
}
