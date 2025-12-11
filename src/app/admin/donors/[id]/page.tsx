"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditDonorPage() {
  const { id } = useParams();
  const router = useRouter();

  const [donor, setDonor] = useState<any>(null);
  const [newLogo, setNewLogo] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch donor data
  useEffect(() => {
    async function loadDonor() {
      const res = await fetch(`/api/donors/${id}`);
      const data = await res.json();

      setDonor({
        name: data.name,
        contribution: data.contribution || "",
        amount: data.amount || "",
        message: data.message || "",
        logo: data.logo || "",
      });

      setLoading(false);
    }
    loadDonor();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!donor) return <p className="p-6">Donor not found</p>;

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", donor.name);
    formData.append("contribution", donor.contribution);
    formData.append("amount", donor.amount);
    formData.append("message", donor.message);
    formData.append("oldLogo", donor.logo);

    if (newLogo) {
      formData.append("logo", newLogo);
    }

    const res = await fetch(`/api/donors/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      alert("Donor updated successfully!");
      router.push("/admin/donors");
    } else {
      alert("Failed to update donor");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Donor</h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-4 bg-white p-6 shadow rounded"
      >
        {/* NAME */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            className="border p-2 rounded w-full"
            value={donor.name}
            onChange={(e) => setDonor({ ...donor, name: e.target.value })}
          />
        </div>

        {/* CONTRIBUTION */}
        <div>
          <label className="block font-medium">Contribution</label>
          <input
            className="border p-2 rounded w-full"
            value={donor.contribution}
            onChange={(e) =>
              setDonor({ ...donor, contribution: e.target.value })
            }
          />
        </div>

        {/* AMOUNT */}
        <div>
          <label className="block font-medium">Amount</label>
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={donor.amount}
            onChange={(e) => setDonor({ ...donor, amount: e.target.value })}
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            className="border p-2 rounded w-full"
            rows={3}
            value={donor.message}
            onChange={(e) =>
              setDonor({ ...donor, message: e.target.value })
            }
          />
        </div>

        {/* OLD LOGO PREVIEW */}
        {donor.logo && (
          <div>
            <p className="text-sm mb-1">Current Logo:</p>
            <img
              src={donor.logo}
              className="h-20 w-20 rounded-full object-cover border"
            />
          </div>
        )}

        {/* NEW LOGO UPLOAD */}
        <div>
          <label className="block font-medium">Upload New Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e: any) => setNewLogo(e.target.files?.[0] || null)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* PREVIEW NEW LOGO */}
        {newLogo && (
          <img
            src={URL.createObjectURL(newLogo)}
            className="h-20 w-20 rounded-full mt-2 object-cover border"
          />
        )}

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Update Donor
        </button>
      </form>
    </div>
  );
}
