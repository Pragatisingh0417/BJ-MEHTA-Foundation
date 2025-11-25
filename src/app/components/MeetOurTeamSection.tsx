"use client";

import Image from "next/image";
import Link from "next/link";

export default function MeetOurTeamSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A dedicated group of compassionate individuals working together
          to bring heart health and hope to underserved communities.
        </p>

        {/* === Team Preview Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/atul.jpg"
              alt="Team Member"
              width={300}
              height={300}
              className="rounded-xl mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Atul Mehta
</h3>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/kokila.jpg"
              alt="Team Member"
              width={300}
              height={300}
              className="rounded-xl mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Kokila Mehta
</h3>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/jayshree.jpg"
              alt="Team Member"
              width={300}
              height={300}
              className="rounded-xl mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Jayshree Vyas
</h3>
          </div>
        </div>

        {/* === READ MORE BTN === */}
        <div className="mt-12">
          <Link
            href="/meet-our-teams"
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}
