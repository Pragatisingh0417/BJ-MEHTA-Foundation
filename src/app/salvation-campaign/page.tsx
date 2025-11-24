"use client";

import Image from "next/image";

export default function SalvationcampaignPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-blue-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                   SALVATION CAMPAIGN
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
                    Yaounde, Cameroon </p>
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
                            Fig 1: A group picture with Salvation Baptist Church men/ women group and MA Heart Team, Yaounde -Cameroon
                        </p>
                    </div>

                    {/* ========== Heading ========== */}
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">
                        About the Campaign
                    </h2>

                    {/* ========== Paragraphs ========== */}
                    <p className="text-gray-800 leading-relaxed mb-6">
On Saturday, May 31, 2025, The Mercy Azoh-Mbi Heart Foundation conducted its monthly sensitization and screening campaign at the Salvation Baptist Church in Obili, Yaoundé. This event commemorated World Hypertension Day, with the theme “Measure your blood pressure accurately, Control it and Live Longer”.                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
The campaign aimed to raise awareness about cardiovascular diseases, particularly hypertension and its complications, among the church’s men and women. It also sought to provide free screenings for hypertension, Type 2 Diabetes, and diabetic/hypertensive nephropathy , establish a link with the church for future collaboration , increase the foundation’s public visibility , and recruit volunteers.



                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
Out of 33 total participants, 25 members of the congregation were screened. The event was supported by 7 volunteers, including 3 medical doctors and 4 medical students from the Faculty of Medicine and Biomedical Sciences, Yaoundé. They served as trainers, facilitators, and assisted with screening and general consultations.



                    </p>

                </div>
            </section>

        </main>
    );
}
