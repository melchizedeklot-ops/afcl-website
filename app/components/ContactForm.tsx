"use client";

import { useState } from "react";

const TOPICS = [
  "General question",
  "Farmer or seller",
  "Buyer",
  "Driver or logistics",
  "Partnership",
  "Support",
];

const field =
  "w-full rounded-xl border border-[#d9d2c0] bg-white px-4 py-3 text-[#1e2a23] placeholder-[#9aa39d] outline-none transition focus:border-[#0f3d2b] focus:ring-2 focus:ring-[#0f3d2b]/15";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      form.reset();
      setState("sent");
    } catch {
      setError("No connection. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-[#1f6b46]/30 bg-[#eef4ee] p-8 text-center">
        <p className="font-serif text-xl text-[#0f3d2b]">
          Thank you. Your message has been sent.
        </p>
        <p className="mt-3 text-[#4a554e]">
          We will reply to the email address you gave us.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 rounded-full border border-[#0f3d2b]/30 px-6 py-2.5 text-sm text-[#0f3d2b] transition hover:bg-[#0f3d2b]/5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      {/* Honeypot: hidden from people, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3f4b44]">Your name</span>
          <input
            name="name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            className={field}
            placeholder="Full name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3f4b44]">Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3f4b44]">
            Phone (optional)
          </span>
          <input
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className={field}
            placeholder="+234..."
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3f4b44]">
            What is this about?
          </span>
          <select name="topic" className={field} defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t} value={t} className="bg-white">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[#3f4b44]">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          className={field}
          placeholder="How can we help?"
        />
      </label>

      {state === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-full bg-[#0f3d2b] px-8 py-3.5 font-semibold text-white transition hover:bg-[#0b2e20] disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
