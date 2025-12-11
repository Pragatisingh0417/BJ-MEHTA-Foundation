import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const token = cookie
    .split("; ")
    .find((r) => r.startsWith("cms_token="))
    ?.split("=")[1];

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const data = verifyToken(token);

  if (!data) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: data });
}
