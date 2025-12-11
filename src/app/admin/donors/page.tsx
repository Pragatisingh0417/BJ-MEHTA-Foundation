"use client";

import { useEffect, useState } from "react";

export default function DonorsAdminPage() {
  const [activeTab, setActiveTab] = useState("add");
  const [donors, setDonors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    contribution: "",
    amount: "",
    message: "",
  });

  const [logo, setLogo] = useState<File | null>(null);

  const fetchDonors = async () => {
    const res = await fetch("/api/donors");
    const data = await res.json();
    setDonors(data);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const handleCreate = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("contribution", form.contribution);
    fd.append("amount", form.amount);
    fd.append("message", form.message);

    if (logo) fd.append("logo", logo);

    await fetch("/api/donors", {
      method: "POST",
      body: fd,
    });

    alert("Donor added successfully!");

    setForm({ name: "", contribution: "", amount: "", message: "" });
    setLogo(null);
    fetchDonors();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/donors/${id}`, { method: "DELETE" });
    alert("Donor deleted!");
    fetchDonors();
  };

  return (
    <div className="p-6">

      {/* TABS */}
      <div className="flex items-center gap-6 border-b pb-2 mb-6">
        <button
          onClick={() => setActiveTab("add")}
          className={`pb-2 text-lg ${
            activeTab === "add"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Add Donor
        </button>

        <button
          onClick={() => setActiveTab("list")}
          className={`pb-2 text-lg ${
            activeTab === "list"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Donor List
        </button>
      </div>

      {/* ADD DONOR */}
      {activeTab === "add" && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded shadow space-y-4">

          <div>
            <label className="block font-medium">Name *</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Contribution</label>
            <input
              value={form.contribution}
              onChange={(e) => setForm({ ...form, contribution: e.target.value })}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Amount</label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border p-2 w-full rounded"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Upload Logo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files?.[0] || null)}
              className="border p-2 w-full rounded"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Donor
          </button>
        </form>
      )}

      {/* DONOR LIST */}
      {activeTab === "list" && (
        <div className="space-y-4">
          {donors.map((d: any) => (
            <div
              key={d.id}
              className="bg-white p-4 shadow rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={d.logo || "/default-avatar.png"}
                  className="w-16 h-16 rounded-full object-cover border"
                />

                <div>
                  <p className="font-semibold">{d.name}</p>
                  {d.amount && <p className="text-sm text-gray-600">₹{d.amount}</p>}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = `/admin/donors/${d.id}`)}
                  className="text-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(d.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
