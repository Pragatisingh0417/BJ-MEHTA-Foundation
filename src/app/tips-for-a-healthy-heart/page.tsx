"use client";

export default function TipsForAHealthyHeart() {
  const tips = [
    {
      title: "Stop smoking—no ifs, buts or ands",
      text: "Avoiding tobacco is one of the best steps to protect your heart. Smoking is one of the leading controllable risk factors for heart disease."
    },
    {
      title: "Focus on the middle",
      text: "Excess belly fat is linked to higher blood pressure and unhealthy lipid levels. Reduce calories and increase activity to lower belly fat."
    },
    {
      title: "Play between the sheets",
      text: "Sexual activity may help lower your blood pressure and reduce heart disease risk."
    },
    {
      title: "Knit a scarf",
      text: "Relaxing hobbies like knitting, sewing, woodworking, or puzzles help relieve stress and support heart health."
    },
    {
      title: "Power up your salsa with beans",
      text: "Mixing beans into salsa adds fiber, which helps lower bad cholesterol (LDL)."
    },
    {
      title: "Let the music move you",
      text: "Dancing raises your heart rate and burns calories — up to 200 per hour."
    },
    {
      title: "Go fish",
      text: "Fish rich in omega-3s like salmon or tuna help prevent heart disease. Aim for two servings weekly."
    },
    {
      title: "Laugh out loud",
      text: "Laughing lowers stress hormones, reduces inflammation, and raises good cholesterol (HDL)."
    },
    {
      title: "Stretch it out",
      text: "Yoga improves flexibility, strength, reduces stress, and may lower cardiovascular disease risk."
    },
    {
      title: "Raise a glass",
      text: "Moderate alcohol—especially red wine—can increase HDL and protect arteries. Drink responsibly."
    },
    {
      title: "Sidestep salt",
      text: "Reducing sodium lowers cases of coronary heart disease. Avoid fast food and high-sodium processed meals."
    },
    {
      title: "Move it, move it, move it",
      text: "Sitting long hours harms blood fats and sugar levels. Take walking breaks and exercise regularly."
    },
    {
      title: "Know your numbers",
      text: "Track blood pressure, blood sugar, cholesterol, and triglycerides. Maintain them within healthy ranges."
    },
    {
      title: "Eat chocolate",
      text: "Dark chocolate (not milk chocolate) contains flavonoids that reduce inflammation and protect the heart."
    },
    {
      title: "Kick your housework up a notch",
      text: "Chores like vacuuming and mopping burn calories and increase heart rate."
    },
    {
      title: "Go nuts",
      text: "Nuts contain healthy fats and fiber that reduce cardiovascular risk. Keep portions small—they’re calorie dense."
    },
    {
      title: "Be a kid",
      text: "Activities like roller skating, bowling, or laser tag help you stay active while having fun."
    },
    {
      title: "Consider pet therapy",
      text: "Owning pets may improve heart and lung function and reduce risk of heart disease."
    },
    {
      title: "Start and stop",
      text: "Interval training burns more calories by alternating high-intensity and light movements."
    },
    {
      title: "Cut the fat",
      text: "Limit saturated fats to less than 7% of your daily intake. Read nutrition labels carefully."
    },
    {
      title: "Take the scenic route home",
      text: "Reduce stress while driving—stay calm and avoid distractions to support heart health."
    },
    {
      title: "Make time for breakfast",
      text: "Healthy breakfasts should include whole grains, lean protein, low-fat dairy, and fruits/vegetables."
    },
    {
      title: "Take the stairs",
      text: "Sneak exercise into your day—take stairs, walk more, and stay active whenever possible."
    },
    {
      title: "Brew up a heart-healthy potion",
      text: "1–3 cups of green or black tea may reduce risks of angina and heart attacks."
    },
    {
      title: "Brush your teeth regularly",
      text: "Good oral hygiene may reduce the risk of heart disease linked to gum bacteria."
    },
    {
      title: "Walk it off",
      text: "Short walks help reduce stress; daily 30-minute walks benefit heart and mind."
    },
    {
      title: "Pump some iron",
      text: "Strength training builds muscle, burns calories, and supports heart health."
    },
    {
      title: "Find your happy place",
      text: "Positive outlook reduces stress, anxiety, and the risk of heart disease and stroke."
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-red-600 mb-2">28 Healthy Heart Tips</h1>
      <p className="text-gray-700 mb-10 text-lg">
        HEALTH AND HOPE FROM HEART TO HEART
      </p>

      <div className="space-y-10">
        {tips.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{i + 1}. {item.title}</h2>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
