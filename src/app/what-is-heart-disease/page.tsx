"use client";

export default function WhatIsHeartDiseasePage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          What Is Heart Disease?
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
          Understanding the causes, types, symptoms, and treatments of heart disease.
        </p>
      </section>

      {/* ============================
          CONTENT SECTION
      ============================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        {/* INTRO */}
        <article className="space-y-6 text-lg leading-relaxed text-gray-700">

          <p>
            <strong>Heart disease</strong> is a term covering any disorder of the heart.
            Unlike cardiovascular disease, which describes problems with the blood vessels
            and circulatory system as well as the heart, heart disease refers specifically
            to issues and deformities in the heart itself.
          </p>

          <p>
            According to the Centers for Disease Control (CDC), heart disease is the
            leading cause of death in the United Kingdom, United States, Canada, and
            Australia. One in every four deaths in the U.S occurs as a result of heart disease.
          </p>

          {/* FAST FACTS */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">Fast Facts</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>One in every four deaths in the U.S. is related to heart disease.</li>
            <li>Coronary heart disease, arrhythmia, and myocardial infarction are common examples.</li>
            <li>Heart disease can be treated with medications or surgical procedures.</li>
            <li>Stopping smoking and regular exercise can greatly reduce risk.</li>
          </ul>

          {/* TYPES */}
          <h2 className="text-3xl font-extrabold text-gray-900 mt-16">Types of Heart Disease</h2>

          <p>
            There are many different types of heart disease that affect the heart in
            different ways. These include:
          </p>

          <div className="space-y-8 mt-6">

            {/* 1. CONGENITAL */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Congenital Heart Disease</h3>
              <p className="mt-2">
                A general term for deformities present from birth, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Septal defects — holes between heart chambers.</li>
                <li>Obstruction defects — blocked blood flow within the heart.</li>
                <li>Cyanotic heart disease — causes low oxygen supply in the body.</li>
              </ul>
            </div>

            {/* 2. ARRHYTHMIA */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Arrhythmia</h3>
              <p className="mt-2">
                An irregular heartbeat caused by malfunctioning electrical impulses in the heart.
              </p>
              <p className="mt-2">Types include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Tachycardia — heart beats too fast.</li>
                <li>Bradycardia — heart beats too slowly.</li>
                <li>Premature ventricular contractions — abnormal extra beats.</li>
                <li>Fibrillation — irregular and chaotic heartbeat.</li>
              </ul>
            </div>

            {/* 3. CORONARY ARTERY DISEASE */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Coronary Artery Disease</h3>
              <p className="mt-2">
                Caused by plaque buildup that narrows coronary arteries, reducing oxygen
                supply to the heart.
              </p>
            </div>

            {/* 4. DILATED CARDIOMYOPATHY */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Dilated Cardiomyopathy</h3>
              <p className="mt-2">
                Heart chambers become enlarged and weakened, often due to long-term oxygen deficiency.
              </p>
            </div>

            {/* 5. HEART ATTACK */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Myocardial Infarction (Heart Attack)</h3>
              <p className="mt-2">
                Occurs when blood flow to the heart is blocked, damaging heart tissue.
              </p>
            </div>

            {/* 6. HEART FAILURE */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Heart Failure</h3>
              <p className="mt-2">
                The heart becomes too weak or stiff to pump blood effectively.
              </p>
            </div>

            {/* 7. OTHER TYPES */}
            <div>
              <h3 className="text-2xl font-bold text-red-600">Other Types</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Hypertrophic cardiomyopathy</li>
                <li>Mitral regurgitation</li>
                <li>Mitral valve prolapse</li>
                <li>Pulmonary stenosis</li>
              </ul>
            </div>
          </div>

          {/* SYMPTOMS */}
          <h2 className="text-3xl font-extrabold text-gray-900 mt-16">Symptoms</h2>
          <p className="mt-2">
            Symptoms vary depending on the heart condition, but common signs include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Chest pain (angina)</li>
            <li>Shortness of breath</li>
            <li>Heart palpitations</li>
            <li>Pain spreading to the arms, neck, jaw, or back</li>
            <li>Nausea or vomiting</li>
            <li>Dizziness or sweating</li>
          </ul>

          {/* CAUSES */}
          <h2 className="text-3xl font-extrabold text-gray-900 mt-16">Causes</h2>
          <p className="mt-2">
            Heart disease can be caused by damage to the heart, poor blood supply,
            lifestyle habits, or genetic factors.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>High blood pressure & cholesterol</li>
            <li>Smoking</li>
            <li>Obesity</li>
            <li>Diabetes</li>
            <li>Family history</li>
            <li>Poor diet</li>
            <li>Age</li>
            <li>Lack of physical activity</li>
          </ul>

          {/* TREATMENT */}
          <h2 className="text-3xl font-extrabold text-gray-900 mt-16">Treatment</h2>

          <h3 className="text-xl font-semibold mt-6">Medication</h3>
          <p className="mt-2">Common medicines include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Statins</li>
            <li>Aspirin or blood thinners</li>
            <li>Beta-blockers</li>
            <li>ACE inhibitors</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Surgery</h3>
          <p className="mt-2">
            Surgical procedures may include angioplasty, bypass surgery,
            valve repair, pacemakers, or heart transplants.
          </p>

          {/* PREVENTION */}
          <h2 className="text-3xl font-extrabold text-gray-900 mt-16">Prevention</h2>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Eat a balanced, low-fat, high-fiber diet.</li>
            <li>Exercise regularly.</li>
            <li>Maintain a healthy weight.</li>
            <li>Quit smoking.</li>
            <li>Limit alcohol consumption.</li>
            <li>Control diabetes and blood pressure.</li>
          </ul>

        </article>
      </section>

    </main>
  );
}
