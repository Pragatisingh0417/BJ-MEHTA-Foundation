// src/app/api/projects/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}

/**
 * Accepts multipart/form-data:
 * - text fields: title, slug, description, status, startDate, endDate
 * - file fields: images (multiple)
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string | null;
    const slug = formData.get("slug") as string | null;
    const description = (formData.get("description") as string) || null;
    const status = (formData.get("status") as string) || null;
    const startDateStr = (formData.get("startDate") as string) || null;
    const endDateStr = (formData.get("endDate") as string) || null;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    // Get all files named "images"
    const files = formData.getAll("images") as File[] | any[];

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const savedUrls: string[] = [];

    // Save each file (if any)
    for (const f of files) {
      // Some entries may not be File objects (empty strings etc.), skip them
      if (!f || typeof f !== "object" || typeof (f as any).arrayBuffer !== "function")
        continue;

      const file: File = f as File;
      const buffer = Buffer.from(await file.arrayBuffer());

      // sanitize filename and make unique
      const orig = path.basename(file.name || "upload");
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}-${orig}`;
      const filePath = path.join(uploadDir, unique);

      fs.writeFileSync(filePath, buffer);
      savedUrls.push(`/uploads/${unique}`);
    }

    // Prepare data for Prisma
    // NOTE: adjust if your Prisma schema expects Json vs string[].
    const projectData: any = {
      title,
      slug,
      description,
      images: savedUrls.length ? savedUrls : [], // keep as array
      status: status || null,
      startDate: startDateStr ? new Date(startDateStr) : null,
      endDate: endDateStr ? new Date(endDateStr) : null,
    };

    const project = await prisma.project.create({
      data: projectData,
    });

    return NextResponse.json(project);
  } catch (err) {
    console.error("POST /api/projects error:", err);
    return NextResponse.json(
      { error: "Failed to create project", details: String(err) },
      { status: 500 }
    );
  }
}
