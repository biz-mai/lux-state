import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// ── Types ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  goal: string;
  budget: string;
  message?: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
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

// ── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, goal, budget, message } =
    req.body as ContactPayload;

  // ── Validation ─────────────────────────────────────────────────────────────
  if (!firstName?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: "Required fields are missing." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // ── Mail Transport (Gmail App Password) ────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,      // set in Vercel env vars
      pass: process.env.GMAIL_APP_PASS,  // Gmail App Password (not your real password)
    },
  });

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const safeMsg  = message?.trim() ? escapeHtml(message.trim()) : "<em>None provided</em>";

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0d0d0d;padding:24px 32px;border-bottom:3px solid #b8965a">
        <h2 style="color:#b8965a;margin:0;font-weight:300;letter-spacing:0.1em">
          NEW LEAD — STRATEGY SESSION REQUEST
        </h2>
      </div>
      <div style="background:#f9f8f5;padding:32px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:36%">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;font-weight:600;color:#1a1a1a">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#1a1a1a"><a href="mailto:${escapeHtml(email)}" style="color:#b8965a">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#1a1a1a">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Goal</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#1a1a1a">${escapeHtml(goal)}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em">Budget</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e0d5;color:#1a1a1a">${escapeHtml(budget)}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em;vertical-align:top">Message</td>
              <td style="padding:10px 0;color:#1a1a1a">${safeMsg}</td></tr>
        </table>
      </div>
      <div style="background:#0d0d0d;padding:16px 32px;text-align:center">
        <p style="color:#888;font-size:11px;margin:0">LuxEstate PH · Makati City · invest@luxestate.ph</p>
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
        <p style="color:#555;line-height:1.8">Thank you for reaching out to <strong>LuxEstate PH</strong>. We've received your strategy session request and a senior broker will contact you within <strong>2 hours</strong>.</p>
        <p style="color:#555;line-height:1.8">Here's what you submitted:</p>
        <ul style="color:#555;line-height:2">
          <li><strong>Goal:</strong> ${escapeHtml(goal)}</li>
          <li><strong>Budget:</strong> ${escapeHtml(budget)}</li>
        </ul>
        <p style="color:#555;line-height:1.8">If you have any urgent questions, call us at <a href="tel:+6328888LUXE" style="color:#b8965a">+63 (2) 8888–LUXE</a>.</p>
        <p style="color:#555;margin-top:32px">Warm regards,<br><strong>The LuxEstate Team</strong></p>
      </div>
      <div style="background:#0d0d0d;padding:16px 32px;text-align:center">
        <p style="color:#888;font-size:11px;margin:0">LuxEstate PH · 8F Ayala Avenue Tower, Makati City</p>
      </div>
    </div>
  `;

  try {
    // Email to you (the business)
    await transporter.sendMail({
      from: `"LuxEstate Lead Bot" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
      subject: `🏢 New Lead: ${fullName} — ${goal}`,
      html: htmlBody,
      replyTo: email,
    });

    // Auto-reply to the client
    await transporter.sendMail({
      from: `"LuxEstate PH" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your request — LuxEstate PH",
      html: autoReplyHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send. Please try again." });
  }
}
