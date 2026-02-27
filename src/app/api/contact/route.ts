import { NextResponse } from "next/server";
import { Resend } from "resend";

const ADMIN_EMAIL = "enquiries@nkatandiinyom.com";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not set. Add it to .env.local to enable the contact form.");
  }
  return new Resend(key);
}
const FROM_EMAIL = process.env.RESEND_FROM ?? "Nkata Ndi Inyom Igbo <enquiries@nkatandiinyom.com>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const html = `
      <p><strong>From:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${phone ? escapeHtml(String(phone).trim()) : "—"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: email.trim(),
      subject: `Contact form: ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err instanceof Error && err.message.includes("RESEND_API_KEY")
      ? "Contact form is not configured yet. Please try again later."
      : "Something went wrong. Please try again.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
