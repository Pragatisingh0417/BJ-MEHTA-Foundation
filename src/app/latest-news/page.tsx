"use client";

import Link from "next/link";

export default function LatestNewsPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-blue-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Latest News
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
                    Updates from our outreach and humanitarian efforts
                </p>
            </section>

            {/* ============================
          CONTENT SECTION
      ============================= */}
            <section className="max-w-5xl mx-auto px-6 py-20">

                <div className="bg-white p-10 shadow-md border rounded-2xl">

                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                        Outreach Activities
                    </h2>

                    <p className="text-gray-800 leading-relaxed mb-8">
                        The Mercy Heart Foundation has consistently demonstrated its
                        commitment to uplifting vulnerable communities through impactful
                        outreach campaigns. The foundation ensures essential support reaches
                        those in dire need. Its health awareness campaigns target preventable
                        heart diseases. Through partnerships with local organizations and
                        volunteers, The Mercy Heart Foundation brings hope, healing, and
                        humanitarian aid to thousands each year—making compassion a tangible
                        force for change.
                    </p>

                    {/* ============================
              CAMPAIGN LIST CARDS
          ============================= */}

                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Campaign 1 */}
                            <Link href="/franky-campaign">
                                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        Franky Campaign
                                    </h3>
                                </div>
                            </Link>

                            {/* Campaign 2 */}
                            <Link href="/mevick-campaign">
                                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        Mevick Campaign
                                    </h3>
                                </div>
                            </Link>

                            {/* Campaign 3 */}
                            <Link href="/salvation-campaign">
                                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        Salvation Campaign
                                    </h3>
                                </div>
                            </Link>

                            {/* Campaign 4 */}
                            <Link href="/dylet-bible-school-campaign">
                                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        Bible School Campaign
                                    </h3>
                                </div>
                            </Link>

                        </div>


                </div>
            </section>

        </main>
    );
}
