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
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-emerald-400";

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
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-8 text-center">
        <p className="text-xl font-semibold text-emerald-400">
          Thank you. Your message has been sent.
        </p>
        <p className="mt-3 text-white/60">
          We will reply to the email address you gave us.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm transition hover:bg-white/10"
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
          <span className="mb-2 block text-sm text-white/60">Your name</span>
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
          <span className="mb-2 block text-sm text-white/60">Email</span>
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
          <span className="mb-2 block text-sm text-white/60">
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
          <span className="mb-2 block text-sm text-white/60">
            What is this about?
          </span>
          <select name="topic" className={field} defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t} value={t} className="bg-[#06130F]">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-white/60">Message</span>
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
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
