"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function GetInvolvedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">

      {/* Banner */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-center">
        <Image
          src="/contact-banner.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Please use the contact form below if you have any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

          <div className="flex gap-4 mb-6">
            <Phone className="text-red-600" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+44 7803 789585</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-red-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p>atul.mehta1@nhs.net</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border"
        >
          <h2 className="text-2xl font-bold">Send us a message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message"
            className="w-full p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>

      </section>
    </div>
  );
}