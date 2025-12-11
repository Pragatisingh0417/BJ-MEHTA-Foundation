"use client";

import { useState, useEffect } from "react";

export default function ProjectsAdminPage() {
  const [activeTab, setActiveTab] = useState("add");
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
  });
  const [images, setImages] = useState<File[]>([]);

  // Fetch projects
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Create new project
  const handleCreate = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("slug", form.slug);
    fd.append("description", form.description);

    images.forEach((img) => fd.append("images", img));

    await fetch("/api/projects", {
      method: "POST",
      body: fd,
    });

    alert("Project added successfully!");

    setForm({ title: "", slug: "", description: "" });
    setImages([]);
    fetchProjects();
  };

  // Delete project
  const handleDelete = async (id: string) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    alert("Project deleted!");
    fetchProjects();
  };

  return (
    <div className="p-6">

      {/* TABS */}
      <div className="flex items-center gap-4 border-b pb-2 mb-6">
        <button
          onClick={() => setActiveTab("add")}
          className={`pb-2 text-lg ${
            activeTab === "add"
              ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          Add Project
        </button>

        <button
          onClick={() => setActiveTab("list")}
          className={`pb-2 text-lg ${
            activeTab === "list"
              ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          Project List
        </button>
      </div>

      {/* ADD PROJECT TAB */}
      {activeTab === "add" && (
        <form onSubmit={handleCreate} className="bg-white p-6 shadow rounded space-y-4">
          <div>
            <label className="block font-medium">Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Slug</label>
            <input
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="border p-2 w-full rounded"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Upload Images</label>
            <input
              type="file"
              multiple
              onChange={(e) => setImages(Array.from(e.target.files!))}
              className="border p-2 w-full rounded"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Project
          </button>
        </form>
      )}

      {/* PROJECT LIST TAB */}
      {activeTab === "list" && (
        <div className="space-y-4">
          {projects.map((p: any) => (
            <div
              key={p.id}
              className="bg-white p-4 shadow rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.slug}</p>
                <p className="text-sm text-gray-500 mt-1">{p.images?.length} images</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = `/admin/projects/${p.id}`)}
                  className="text-blue-600 font-medium"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {projects.length === 0 && <p>No projects yet.</p>}
        </div>
      )}
    </div>
  );
}
