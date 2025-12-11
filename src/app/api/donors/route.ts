import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// GET ALL DONORS
export async function GET() {
    const donors = await prisma.donor.findMany({
        orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(donors);
}

// CREATE DONOR (Single Image Optional)
export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const contribution = formData.get("contribution") as string | null;
        const amount = formData.get("amount") as string | null;

        const message = formData.get("message") as string | null;

        const file = formData.get("logo") as File | null;

        let imageUrl = "";

        if (file && typeof file !== "string") {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadDir = path.join(process.cwd(), "public/uploads/donors");
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

            const filename = `${Date.now()}-${file.name}`;
            const filePath = path.join(uploadDir, filename);

            fs.writeFileSync(filePath, buffer);
            imageUrl = `/uploads/donors/${filename}`;
        }

        const donor = await prisma.donor.create({
  data: {
    name,
    contribution: contribution ? parseFloat(contribution) : null,
    amount: amount ? parseFloat(amount) : null,
    message,
    logo: imageUrl || null,
  }
});

        return NextResponse.json(donor);

    } catch (err) {
        console.error("Donor Create Error:", err);
        return NextResponse.json({ error: "Failed to create donor" }, { status: 500 });
    }
}
