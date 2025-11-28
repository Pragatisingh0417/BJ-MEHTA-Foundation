"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
       <section className="relative w-full h-[420px] flex items-center justify-center text-center overflow-hidden">
      
        {/* Background Image */}
        <Image
          src="/contact-banner.jpg"  // ← change to your image name
          alt="What we do background"
          fill
          className="object-cover"
        />
      
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      
        {/* Content */}
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
           Get Un Touch
          </motion.h1>
      
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow"
          >
           Please use the contact form below if you have any general questions or requests about our foundation.


          </motion.p>
        </div>
      
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
              <p className="text-gray-600">+44 -00-00-000</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start mb-6">
            <Mail className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-600">jayshreevyas@virginmedia.com</p>
                            <p className="text-gray-600">atul.mehta1@nhs.net</p>

            </div>
          </div>

          {/* Address */}
          {/* <div className="flex gap-4 items-start mb-6">
            <MapPin className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-600">
                255 D'Anjou Blvd, Suite 257F, Châteauguay, QC J6J 2R4  
                <br /> Monte Centre Entre CNPS, Yaounde
              </p>
            </div>
          </div> */}

          {/* Business Hours */}
          {/* <div className="flex gap-4 items-start">
            <Clock className="text-red-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-700">Business Hours</p>
              <p className="text-gray-600">Mon–Fri: 9am – 5pm</p>
              <p className="text-gray-600">Saturday: 10am – 3pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div> */}
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
