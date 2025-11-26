export default function OurProjects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* PROJECT 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Medical Camp at Ramakrishna Mission Hospital</h2>
          <p className="text-gray-700 mb-4">
            Our first big event was a Medical Camp at Ramakrishna Mission Hospital in Haridwar, India. His Holiness Swami
            Satyamitranand Giriji inaugurated the camp in September, 2017. A team of doctors and nurses from the UK, USA
            and India saw more than 750 patients over a 3 day period, including 150 eye examinations and over 80
            spectacles were dispensed. Previously unidentified diabetes, hypertension, thyroid disorders, blood
            conditions, heart disease and suspected cancer were diagnosed.
          </p>
          <p className="text-gray-700 mb-4">
            We established a partnership with the Ramakrishna Mission Hospital which will form a basis for future
            collaborative projects.
          </p>
          <p className="text-gray-700 mb-4">
            More than £10,000 was raised from generous donors. The sum was used for the expenses of the camp and as
            donations toward the work of the Mission hospital.
          </p>
          <p className="text-gray-700 mb-4">
            All 17 volunteers paid for their own travel and accommodation expenses. All donations were used directly to
            support charitable purposes.
          </p>
        </div>

        <img
          src="/project-1.jpg"
          alt="Medical Camp at Ramakrishna Mission Hospital"
          className="rounded-xl shadow-lg w-full h-[400px] object-cover"
        />
      </section>

      {/* PROJECT 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img
          src="/project-2.jpg"
          alt="Haridwar Health Camp - Haematology"
          className="rounded-xl shadow-lg w-full object-cover order-2 h-[400px] md:order-1"
        />

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Haridwar Health Camp - Haematology</h2>
          <p className="text-gray-700 mb-4">
            More than 150 patients were seen by the expert doctors from London and Ahmadabad. Dr. Atul Mehta, Dr.
            Ashutosh Wechalekar & Dr. Sandip Shah participated and gave free consultation on anemia, platelet disorders,
            bone marrow disorders, leukemia, hemophilia, bleeding disorders, sickle cell anemia, lymphoma and different
            types of blood cancer.
          </p>
          <p className="text-gray-700 mb-4">
            A special conference for doctors was conducted in which more than 30 doctors and staff participated.
          </p>
          <p className="text-gray-700 mb-4">
            The Ramakrishna Mission Sevashrama Hospital took active part in creating awareness among patients and staff,
            promoting the importance of screening to ensure early diagnosis of cancer.
          </p>
          <p className="text-gray-700 mb-4">Thus, the camp was a great success.</p>
          <p className="text-gray-700">
            <strong>Media Coverage:</strong> News reporters from various local papers were invited and wrote that the
            combined efforts from the doctors, staff & management of RKM are truly appreciable as awareness is essential to
            fight these diseases.
          </p>
        </div>
      </section>


 {/* PROJECT 3 */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

  {/* LEFT — Two Images Stacked */}
  <div className="space-y-6 order-2 md:order-1">
    <img
      src="/project-3.jpg"
      alt="Children Diabetes Project"
      className="rounded-xl shadow-lg w-full h-[200px] object-cover"
    />

    <img
      src="/lady-image.png"
      alt="Lady supporting diabetes care"
      className="rounded-xl shadow-lg w-full h-[250px] object-cover"
    />
  </div>

  {/* RIGHT — Content */}
  <div className="order-1 md:order-2">
    <h2 className="text-2xl font-bold mb-4">
      Caring for young children with diabetes
    </h2>

    <p className="text-gray-700 mb-4">
      The RKM Hospital in Haridwar currently has funds to care for 
      200 children with Type 1 Diabetes. There is a need to expand 
      this program to enable them to look after more children. 
      We need your help to achieve this.
    </p>

    <p className="text-gray-700 mb-4">
      Charitable donations would allow substantial expansion of the program. 
      Each child needs 20 to 30 units of insulin per day which costs up to 
      Rs. 2000 per month per child. Our aim is to provide Insulin for these 
      needy children and to provide extra nursing staff to support and 
      educate the children and their families.
    </p>

    <p className="text-gray-700 mb-4">
      A donation of £1000 will allow treatment of one child for three years. 
      RKM will then approach funding agencies for their ongoing care.
    </p>

    <p className="text-gray-700 mb-4">
      Please give generously.
    </p>

    <p className="text-gray-700">
      In March 2019 a program of lectures, demonstrations and a free advisory 
      camp will be held at the Hospital. Our aim is to support the treatment 
      of children needing insulin therapy.
    </p>
  </div>

</section>
{/* SUPPORTING PARTNER PROJECTS */}
<section className="mt-20 bg-gray-50 rounded-2xl p-10 shadow-sm">
  <h2 className="text-2xl font-bold text-[#FD201F] mb-4">
    Supporting Partner Projects
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    We are supporting the food and educational projects of our partner in India. 
    Acharya Narendra Ramanuj has been at the centre of all our previous work in 
    Haridwar and shares our devotion to Swami Satyamitranandji.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Manavatamission has a range of charitable projects that share the same aims as 
    the B J Mehta Foundation — providing health, education and nourishment to those 
    who need it most.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Learn more about their work here:
  </p>

  <div className="mt-4 space-y-2">
    <a 
      href="https://www.manavatamission.org" 
      target="_blank"
      className="text-blue-600 underline break-all"
    >
      https://www.manavatamission.org
    </a>
  </div>
</section>


    </div>
  );
}
