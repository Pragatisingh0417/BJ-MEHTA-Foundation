import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// =======================
// GET PROJECT BY ID
// =======================
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const project = await prisma.project.findUnique({
    where: { id },
  });

  return NextResponse.json(project);
}

// =======================
// UPDATE PROJECT (PUT)
// =======================
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;

    // New uploaded images
    const newFiles = formData.getAll("images") as File[];

    // OLD images passed from frontend (comma separated)
    const oldImagesRaw = formData.get("oldImages");
    const oldImages = oldImagesRaw
      ? (JSON.parse(oldImagesRaw.toString()) as string[])
      : [];

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const newImageUrls: string[] = [];

    // Save new uploaded images
    for (const file of newFiles) {
      if (!file || typeof file === "string") continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const unique = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, unique);

      fs.writeFileSync(filePath, buffer);
      newImageUrls.push(`/uploads/${unique}`);
    }

    // Merge OLD + NEW
    const finalImages = [...oldImages, ...newImageUrls];

    // Update DB
    const updated = await prisma.project.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        images: finalImages,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE PROJECT
// =======================
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Delete image files
    if (Array.isArray(project.images)) {
      const publicDir = path.join(process.cwd(), "public");

      for (const url of project.images) {
        const filePath = path.join(publicDir, url);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete" },
      { status: 500 }
    );
  }
}
