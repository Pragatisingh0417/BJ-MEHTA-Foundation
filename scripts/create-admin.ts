import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@bjmehta.com";
  const password = "Admin@123"; // <-- change later

  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    console.log("Admin already exists:", email);
    return;
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      isAdmin: true,
      name: "Super Admin",
    },
  });

  console.log("Admin created successfully:");
  console.log("Email:", email);
  console.log("Password:", password);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
