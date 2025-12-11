import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function OurDonorsPage() {
  const donors = await prisma.donor.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADING */}
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Our Supportive Donors
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We gratefully acknowledge the contribution and support from our donors.
        </p>

        {/* DONOR GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {donors.map((donor) => {
            const isTopDonor = donor.amount && donor.amount >= 50000;

            return (
              <div
                key={donor.id}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
              >
                {/* Donor Image */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-offset-2 ring-blue-300 group-hover:ring-blue-500 transition-all">
                    <Image
                      src={donor.logo || "/default-avatar.png"}
                      alt={donor.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>

                  {/* TOP DONOR BADGE */}
                  {isTopDonor && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow">
                      ⭐ Top Donor
                    </span>
                  )}
                </div>

                {/* Donor Name */}
                <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {donor.name}
                </p>

                {/* Amount */}
                {donor.amount && (
                  <p className="text-sm text-green-700 font-medium mt-1">
                    Donated: ₹{donor.amount.toLocaleString()}
                  </p>
                )}

                {/* Contribution */}
                {donor.contribution && (
                  <p className="text-xs text-gray-500 mt-1">
                    {donor.contribution}
                  </p>
                )}

                {/* Message */}
                {donor.message && (
                  <p className="text-xs text-gray-500 mt-3 italic text-center">
                    “{donor.message}”
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* NO DONORS */}
        {donors.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No donors added yet.
          </p>
        )}
      </div>
    </div>
  );
}
