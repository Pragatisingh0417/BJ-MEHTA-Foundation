import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function OurProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {projects.map((project) => (
        <section
          key={project.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* LEFT = Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
          </div>

          {/* RIGHT = Images */}
          <div className="space-y-4">
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={project.title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
