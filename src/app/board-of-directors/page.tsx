"use client";

import Image from "next/image";

export default function BoardOfDirectors() {
  const directors = [
    {
      name: "SOLOMON AZOH-MBI",
      role: "Chairperson",
      image: "/Bod-1.jpg",
      bio: `Mr. Solomon Azoh-Mbi joined the Cameroon Foreign Service as a career diplomat in 1985. He served in various capacities in the Cameroon Ministry of External Relations until 1988, when he was appointed Deputy Chief of Service in charge of official visits at the Department Protocol at the Civil Cabinet of the Presidency. Between 1991 and 1995, he served as Attaché at the General Secretariat at the Presidency, then as Chargé de Mission, where he also served as Senior Diplomatic Adviser to the President. From 2004 to 2008, he was Board Chair of the National School of Administration and Magistracy (ENAM) in Yaounde. In 2008 he was appointed Cameroon’s High Commissioner to Canada, Cuba and Jamaica, with residence in Ottawa. He has been Cameroon’s High Commissioner to South Africa since 2021.

`,
    },
    {
      name: "PAULA AZOH-MBI",
      role: "Director",
      image: "/Bod-2.png",
      bio: `Paula studied at the American International School of Johannesburg (AISJ) where she completed High School and obtained the International Baccalaureate in June 2024. She looks forward to reading Law at the University of Pretoria in South Africa in the new academic year. Paula took up her mother’s seat on the board when she turned 18.`,
    },
     {
      name: "JAY M. NFONOYIM",
      role: "Director",
      image: "/Bod-3.jpg",
      bio: `Dr. Jay Nonoyim is Program Director, Chief of Critical Care and Clinical Medicine at the Richmond University Medical Center, and Clinical Assistant Professor of Medicine at New York Medical College. He also served as director of the Surgical Trauma ICU at Elmhurst Hospital Center and Assistant Professor of Surgery at Mt. Sinai Medical School. He has close to four decades of experience in the field of medicine. His areas of expertise are Saddle Pulmonary Embolism, Emphysema, and Angioplasty. He is affiliated with numerous hospitals in New York, including the Richmond University Medical Center and the Staten Island University Hospital.

He studied at the Universidad Tenologica De Santiago and did his Intensive Care training at the Icahn School of Medicine at Mt. Sinai. He is a member of the American Board of Internal Medicine.`,
    },
     {
      name: "PAUL T. AYAH",
      role: "Secretary & CEO",
      image: "/Bod-4.jpg",
      bio: `Paul held various positions in industry (translator, product manager, recruiting and training manager) until 1995 before founding STF Traducation, a language services firm that provides translation and language training services to government and corporate clients. He studied concurrently at Keele University and University of London, as well as Université de Montréal and McGill University. A committed community servant, Paul was president of the Goodwill Association in 2005 and 2006, president of the Association of Cameroonians in Canada (ACC) from 2008 to 2010 and is currently a co-chair of the Sasse Alumni Association. He has also served as a big brother for the Big Brothers and Big Sisters of Montreal. Paul is a member of the Ordre de traducteurs, terminologues et interprètes agréés du Québec.`,
    },
     {
      name: "NTARIBO ASHU-AGBORNGAH",
      role: "Treasurer",
      image: "/Bod-5.jpg",
      bio: `Ntaribo is a career diplomat. He currently serves as Director of Protocol, Ceremonies and Consular Affairs at the Ministry of External Relations in Yaounde, Cameroon. Prior to this appointment, he served as First Secretary at the Cameroon High Commission in Ottawa, and as deputy to the head of cabinet for Chantal Biya, Cameroon’s First Lady, at the Circle of Friends of Cameroon, a charitable organization initiated by Cameroon’s first lady. He holds a bachelor’s degree in English Private Law from University of Yaounde and a doctorat de troisième cycle in International Relations from the International Relations Institute of Cameroon (IRIC).`,
    },
     {
      name: "PAULA AZOH-MBI",
      role: "Director",
      image: "/Bod-2.png",
      bio: `Paula studied at the American International School of Johannesburg (AISJ) where she completed High School and obtained the International Baccalaureate in June 2024. She looks forward to reading Law at the University of Pretoria in South Africa in the new academic year. Paula took up her mother’s seat on the board when she turned 18.`,
    },
     {
      name: "PAULA AZOH-MBI",
      role: "Director",
      image: "/Bod-2.png",
      bio: `Paula studied at the American International School of Johannesburg (AISJ) where she completed High School and obtained the International Baccalaureate in June 2024. She looks forward to reading Law at the University of Pretoria in South Africa in the new academic year. Paula took up her mother’s seat on the board when she turned 18.`,
    },
     {
      name: "PAULA AZOH-MBI",
      role: "Director",
      image: "/Bod-2.png",
      bio: `Paula studied at the American International School of Johannesburg (AISJ) where she completed High School and obtained the International Baccalaureate in June 2024. She looks forward to reading Law at the University of Pretoria in South Africa in the new academic year. Paula took up her mother’s seat on the board when she turned 18.`,
    },
  ];

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-blue-900 py-24 text-center text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-lg tracking-wide">Board Of Directors</h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Meet the dedicated leaders guiding the Mercy Azoh-Mbi Heart Foundation
        </p>
      </section>

      {/* LIST */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {directors.map((d, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center p-10 rounded-3xl shadow-xl border bg-white hover:shadow-2xl transition duration-300`}
          >
            <div className="w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src={d.image}
                alt={d.name}
                width={600}
                height={600}
                className="object-cover w-full h-[380px] hover:scale-105 transition duration-300"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600">{d.name}</h2>
              <p className="text-yellow-600 text-lg mt-1 font-semibold">{d.role}</p>
              <p className="mt-6 text-gray-700 leading-relaxed text-lg whitespace-pre-line">{d.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
