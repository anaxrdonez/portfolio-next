import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const downloadRequestSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().max(2000).optional().or(z.literal("")),
  company: z.string().optional(),
  startedAt: z.number().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = downloadRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    const { name, email, message, company, startedAt } = parsed.data;

    // Honeypot anti-bot
    if (company && company.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Minimum completion time anti-bot
    if (startedAt && Date.now() - startedAt < 2500) {
      return NextResponse.json(
        { error: "Form submitted too quickly." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Finding Mabel Download <onboarding@resend.dev>",
      to: ["anaordonez.prac@gmail.com"],
      replyTo: email,
      subject: `Download request for Finding Mabel — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171717;">
          <h2 style="margin-bottom: 16px;">New download request</h2>
          <p><strong>Project:</strong> Finding Mabel</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 16px; border-radius: 12px; background: #f5f5f5; white-space: pre-wrap;">
            ${escapeHtml(message || "No message provided.")}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Download request API error:", error);
    return NextResponse.json(
      { error: "Failed to send request." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}