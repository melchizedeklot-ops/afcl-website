import Link from "next/link";
import type { ReactNode } from "react";

export const CONTACT_EMAIL = "info@afrifoodconnect.com";
export const COMPANY_NAME = "AFRI-FOOD CONNECT AND LOGISTICS LTD";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#06130F] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center">
            <img
              src="/AFCL-logo.svg"
              alt="AFCL - Afri Food Connect & Logistics"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
          AFCL
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/40">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-base leading-8 text-white/70">
          {children}
        </div>
      </article>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link
              href="/delete-account"
              className="transition hover:text-white"
            >
              Delete account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-6 text-2xl font-semibold text-white">{children}</h2>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-emerald-400">
      {children}
    </ul>
  );
}

export function Mail() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="text-emerald-400 underline-offset-4 hover:underline"
    >
      {CONTACT_EMAIL}
    </a>
  );
}
