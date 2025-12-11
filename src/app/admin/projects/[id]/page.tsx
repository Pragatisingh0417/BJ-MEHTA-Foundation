"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [oldImages, setOldImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch project data
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
      setOldImages(data.images || []);
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!project) return <p className="p-6">Project not found</p>;

  // Remove an old image
  const removeOldImage = (img: string) => {
    setOldImages(oldImages.filter((i) => i !== img));
  };

  // Submit update
  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("slug", project.slug);
    formData.append("description", project.description);

    // Pass remaining old images
    formData.append("oldImages", JSON.stringify(oldImages));

    // Add new image files
    newImages.forEach((file) => formData.append("images", file));

    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      alert("Project updated successfully!");
      router.push("/admin/projects");
    } else {
      alert("Failed to update project");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>

      <form onSubmit={handleUpdate} className="space-y-4 bg-white p-6 shadow rounded">

        {/* TITLE */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            className="border p-2 rounded w-full"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
        </div>

        {/* SLUG */}
        <div>
          <label className="block font-medium">Slug</label>
          <input
            className="border p-2 rounded w-full"
            value={project.slug}
            onChange={(e) => setProject({ ...project, slug: e.target.value })}
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            className="border p-2 rounded w-full"
            rows={4}
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
        </div>

        {/* EXISTING IMAGES */}
        <div>
          <label className="block font-medium mb-1">Existing Images</label>
          <div className="flex flex-wrap gap-3">
            {oldImages.length === 0 && (
              <p className="text-gray-500 text-sm">No old images remaining</p>
            )}

            {oldImages.map((img: string, index: number) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt=""
                  className="h-24 w-24 object-cover rounded border"
                />

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeOldImage(img)}
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-6 w-6 flex justify-center items-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* UPLOAD NEW IMAGES */}
        <div>
          <label className="block font-medium">Upload New Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setNewImages(Array.from(e.target.files || []))}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* PREVIEW NEW IMAGES */}
        {newImages.length > 0 && (
          <div className="mt-2 flex gap-3 flex-wrap">
            {newImages.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                className="h-24 w-24 object-cover rounded border"
              />
            ))}
          </div>
        )}

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}
