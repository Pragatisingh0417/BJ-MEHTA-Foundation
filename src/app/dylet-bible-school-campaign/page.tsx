"use client";

import Image from "next/image";

export default function DyletBiblecampaignPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-blue-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
BIBLE SCHOOL AND CHURCH CAMPAIGN                </h1>
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
                            Fig 1: Hall view of participants ready for free screening against NCDs at Dylet Bible School -Biyemassi Yaounde
                        </p>
                    </div>

                    {/* ========== Heading ========== */}
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">
                        About the Campaign
                    </h2>

                    {/* ========== Paragraphs ========== */}
                    <p className="text-gray-800 leading-relaxed mb-6">
We’re thrilled to share the success of The Mercy Azoh-Mbi Heart Foundation’s recent Heart Health Sensitization and Screening Campaign at the Dylet Bible School and Church in Biyemassi-Yaoundé. On June 21, 2025, we brought vital heart health awareness and services directly to the community.

           </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
Our mission was clear: to educate, detect, and empower. We provided interactive health talks on essential topics like hypertension, healthy eating, physical activity, and lifestyle modifications. Following these discussions, we offered FREE on-site screenings for blood pressure, body mass index (BMI), and blood sugar levels, helping to identify individuals at risk.




                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
Out of 33 total participants, 25 members of the congregation were screened. The event was supported by 7 volunteers, including 3 medical doctors and 4 medical students from the Faculty of Medicine and Biomedical Sciences, Yaoundé. They served as trainers, facilitators, and assisted with screening and general consultations.



                    </p>

                </div>
            </section>

        </main>
    );
}
