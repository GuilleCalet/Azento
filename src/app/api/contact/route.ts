import { NextResponse, type NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const payload = { ...parsed.data, receivedAt: new Date().toISOString() };
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "contact-submissions.json");

  try {
    await fs.mkdir(dataDir, { recursive: true });
    let existing: unknown[] = [];
    try {
      const current = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(current);
    } catch {
      existing = [];
    }
    await fs.writeFile(filePath, JSON.stringify([...existing, payload], null, 2));
  } catch (error) {
    console.error("contact write error", error);
    // Swap this block with your email provider (Resend/Sendgrid) if desired.
  }

  return NextResponse.json({ ok: true });
}
