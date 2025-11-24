"use client";

import Image from "next/image";

export default function MevickcampaignPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-blue-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                   MEVICK SECONDARY SCHOOL CAMPAIGN
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
                    Yaounde, Cameroon 
                </p>
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
                            Fig 1: A group picture with Mevick Secondary students and MA Heart Team, Yaounde -Cameroon
                        </p>
                    </div>

                    {/* ========== Heading ========== */}
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">
                        About the Campaign
                    </h2>

                    {/* ========== Paragraphs ========== */}
                    <p className="text-gray-800 leading-relaxed mb-6">
                        The “ Mevick Secondary School Sensitization Campaign” organized by the MA Heart Foundation’s Cameroon country office on March 20, 2025, aimed to raise heart health awareness among young people for early prevention. The campaign targeted students from Mevick Bilingual Grammar School in Yaoundé, with key objectives including sensitizing students, establishing future collaborations with the school, increasing public visibility through media, recruiting volunteers, and launching the Cameroon office’s activities for the year.
                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
                        The event had 74 participants, including 60 students, four volunteer medical doctors, and three medical students. Activities from 11:00 AM to 4:00 PM included presentations on heart structure and function, cardiovascular disease risk factors, and common heart conditions like coronary heart disease and sudden cardiac arrest. Practical sessions on blood pressure measurement and cardiopulmonary resuscitation (CPR) were also conducted.


                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
                        Despite challenges such as short planning time and electrical issues, the campaign successfully met its objectives, establishing a working relationship with the school and educating students on cardiovascular health. The campaign served as a crucial test event for the Cameroon office, providing valuable lessons for future activities.


                    </p>

                </div>
            </section>

        </main>
    );
}
