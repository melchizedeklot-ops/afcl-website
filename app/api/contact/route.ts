import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || "info@afrifoodconnect.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "no-reply@afrifoodconnect.com";

// Very small in-memory limiter: 5 messages per IP per 10 minutes.
// (Per server instance only; enough to stop casual abuse.)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

const TOPICS = [
  "General question",
  "Farmer or seller",
  "Buyer",
  "Driver or logistics",
  "Partnership",
  "Support",
];

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people leave this empty.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const topic = String(data.topic ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (name.length < 2 || name.length > 100)
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200)
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  if (message.length < 10 || message.length > 3000)
    return Response.json(
      { error: "Please write a message of at least 10 characters." },
      { status: 400 }
    );
  if (phone.length > 40 || !TOPICS.includes(topic))
    return Response.json({ error: "Invalid request." }, { status: 400 });

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip))
    return Response.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 }
    );

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_KEY;
  if (!user || !pass) {
    console.error("Contact form: SMTP_USER / SMTP_KEY are not set.");
    return Response.json(
      {
        error:
          "Messages are not available right now. Please email info@afrifoodconnect.com.",
      },
      { status: 503 }
    );
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass },
    });

    await transport.sendMail({
      from: `"AFCL Website" <${FROM}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[AFCL website] ${topic} from ${name}`,
      text: `Topic: ${topic}\nName: ${name}\nEmail: ${email}\nPhone: ${
        phone || "-"
      }\n\n${message}`,
      html: `<h3>New message from the AFCL website</h3>
<p><b>Topic:</b> ${esc(topic)}<br><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(
        email
      )}<br><b>Phone:</b> ${esc(phone || "-")}</p>
<p style="white-space:pre-wrap">${esc(message)}</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json(
      { error: "We could not send your message. Please email info@afrifoodconnect.com." },
      { status: 502 }
    );
  }
}
