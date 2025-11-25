"use client";

import Image from "next/image";

export default function MeetOurTeams() {
  const directors = [
    { name: "Atul Mehta", image: "/atul.jpg" },
    { name: "Kokila Mehta", image: "/kokila.jpg" },
    { name: "Jayshree Vyas", image: "/jayshree.jpg" },
  ];

  return (
    <main className="w-full">
      <section className="bg-black py-24 text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-wide">
         Meet Our Teams
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Meet the dedicated leaders of the BJ Mehta Foundation
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {directors.map((d, i) => (
            <div
              key={i}
              className="text-center space-y-4 bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-full h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={d.image}
                  alt={d.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-105 transition duration-300"
                />
              </div>

              <h2 className="text-2xl font-bold text-red-600">{d.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 p-10 rounded-3xl shadow-md border">
          <p className="text-gray-800 leading-8 text-lg">
            Mr Mehta's youngest son Atul and his wife Kokila are the driving
            force behind the foundation. Atul is a Professor of Haematology at
            University College London and Kokila is a General Practitioner. They
            are assisted in their work by a close family friend, Jayshree Vyas,
            who works in the financial sector in London and is a trustee of
            Swamiji's charities.
            <br /><br />
            Our spiritual leader is Swami Satyamitranandgiriji of Bharat Mata
            Mandir Haridwar...
            <br /><br />
            <strong>
              To get in touch: <br />
              atul.mehta1@nhs.net <br />
              jayshreevyas@virginmedia.com
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
