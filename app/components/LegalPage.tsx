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
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2a23]">
      <header className="border-b border-[#e4ddcc] bg-white">
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
            className="text-sm text-[#5b6760] transition hover:text-[#0f3d2b]"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d26]">
          AFCL
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-[#0f3d2b] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#7a857d]">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-base leading-8 text-[#3f4b44]">
          {children}
        </div>
      </article>

      <footer className="border-t border-[#e4ddcc] bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-[#7a857d] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-[#0f3d2b]">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-[#0f3d2b]">
              Terms
            </Link>
            <Link
              href="/delete-account"
              className="transition hover:text-[#0f3d2b]"
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
    <h2 className="pt-6 font-serif text-2xl text-[#0f3d2b]">{children}</h2>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-[#b08d3c]">
      {children}
    </ul>
  );
}

export function Mail() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-medium text-[#0f3d2b] underline underline-offset-4"
    >
      {CONTACT_EMAIL}
    </a>
  );
}
