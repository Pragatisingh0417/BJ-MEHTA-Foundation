import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// GET DONOR BY ID
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const donor = await prisma.donor.findUnique({ where: { id } });
  return NextResponse.json(donor);
}

// UPDATE DONOR
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const contribution = formData.get("contribution") as string | null;
    const amount = formData.get("amount") as string | null;

    const message = formData.get("message") as string | null;

    const file = formData.get("logo") as File | null;

    let updatedImageUrl = formData.get("oldLogo") as string | null;

    // If uploading new image → delete old one
    if (file && typeof file !== "string") {
      if (updatedImageUrl) {
        const oldPath = path.join(process.cwd(), "public", updatedImageUrl);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads/donors");
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, filename);

      fs.writeFileSync(filePath, buffer);
      updatedImageUrl = `/uploads/donors/${filename}`;
    }

    const updated = await prisma.donor.update({
      where: { id },
      data: {
        name,
        contribution: contribution ? parseFloat(contribution) : null,
        amount: amount ? parseFloat(amount) : null,
        message,
        logo: updatedImageUrl,
      }
    });

    return NextResponse.json(updated);

  } catch (err) {
    console.error("Donor Update Error:", err);
    return NextResponse.json({ error: "Failed to update donor" }, { status: 500 });
  }
}

// DELETE DONOR
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const donor = await prisma.donor.findUnique({ where: { id } });

    if (!donor) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Delete image if exists
    if (donor.logo) {
      const pathToDelete = path.join(process.cwd(), "public", donor.logo);
      if (fs.existsSync(pathToDelete)) fs.unlinkSync(pathToDelete);
    }

    await prisma.donor.delete({ where: { id } });

    return NextResponse.json({ message: "Deleted" });

  } catch (err) {
    console.error("Donor Delete Error:", err);
    return NextResponse.json({ error: "Failed to delete donor" }, { status: 500 });
  }
}
