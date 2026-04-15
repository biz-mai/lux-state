import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

interface ConsultPayload {
  name: string;
  phone: string;
  email: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email } = req.body as ConsultPayload;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const firstName = name.trim().split(" ")[0];

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0d0d0d;padding:24px 32px;border-bottom:3px solid #b8965a">
        <h2 style="color:#b8965a;margin:0;font-weight:300;letter-spacing:0.1em">
          BOOKING REQUEST — FREE STRATEGY CALL
        </h2>
      </div>
      <div style="background:#f9f8f5;padding:32px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:36%">Full Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;font-weight:600;color:#1a1a1a">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#1a1a1a"><a href="mailto:${escapeHtml(email)}" style="color:#b8965a">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Phone</td>
              <td style="padding:10px 0;color:#1a1a1a">${escapeHtml(phone)}</td></tr>
        </table>
      </div>
      <div style="background:#0d0d0d;padding:16px 32px;text-align:center">
        <p style="color:#888;font-size:11px;margin:0">LuxEstate PH · Free Strategy Call Booking</p>
      </div>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0d0d0d;padding:24px 32px;border-bottom:3px solid #b8965a">
        <h2 style="color:#b8965a;margin:0;font-weight:300;letter-spacing:0.1em">LuxEstate PH</h2>
      </div>
      <div style="background:#f9f8f5;padding:40px 32px">
        <p style="color:#1a1a1a;font-size:16px">Hi ${escapeHtml(firstName)},</p>
        <p style="color:#555;line-height:1.8">Your <strong>Free Investment Strategy Call</strong> has been booked. A senior broker will confirm your 30-minute session within <strong>2 hours</strong> via phone or email.</p>
        <p style="color:#555;line-height:1.8">This call is completely free with no commitment. Come ready with your investment goals and questions — we'll build a clear roadmap together.</p>
        <p style="color:#555;line-height:1.8">If you need to reach us sooner: <a href="tel:+6328888LUXE" style="color:#b8965a">+63 (2) 8888–LUXE</a></p>
        <p style="color:#555;margin-top:32px">Looking forward to speaking with you,<br><strong>The LuxEstate Team</strong></p>
      </div>
      <div style="background:#0d0d0d;padding:16px 32px;text-align:center">
        <p style="color:#888;font-size:11px;margin:0">LuxEstate PH · 8F Ayala Avenue Tower, Makati City</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"LuxEstate Lead Bot" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
      subject: `📅 Strategy Call Booking: ${name}`,
      html: htmlBody,
      replyTo: email,
    });

    await transporter.sendMail({
      from: `"LuxEstate PH" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your Strategy Call is Booked — LuxEstate PH",
      html: autoReplyHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send. Please try again." });
  }
}
