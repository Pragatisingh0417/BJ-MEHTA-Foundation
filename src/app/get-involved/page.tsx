"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function GetInvolvedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED", form);
  };

  return (
    <div className="w-full">

      {/* ⭐ Banner */}
      <section className="relative w-full h-[300px] bg-blue-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold tracking-wide">Get in Touch</h1>
      </section>

      {/* ⭐ Contact Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>

          {/* Phone */}
          <div className="flex gap-4 items-start mb-6">
            <Phone className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Phone Number</p>
              <p className="text-gray-600">1-438-795-3481 / +237 682-084-962</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start mb-6">
            <Mail className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-600">info@maheartfoundation.org</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 items-start mb-6">
            <MapPin className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-600">
                255 D'Anjou Blvd, Suite 257F, Châteauguay, QC J6J 2R4  
                <br /> Monte Centre Entre CNPS, Yaounde
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex gap-4 items-start">
            <Clock className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Business Hours</p>
              <p className="text-gray-600">Mon–Fri: 9am – 5pm</p>
              <p className="text-gray-600">Saturday: 10am – 3pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border"
        >
          <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Write your message"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
