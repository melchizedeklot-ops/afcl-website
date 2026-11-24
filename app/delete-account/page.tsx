import type { Metadata } from "next";
import { LegalPage, H2, UL, Mail, CONTACT_EMAIL } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Delete your AFCL account | AFCL",
  description:
    "How to ask AFCL (Afri Food Connect & Logistics) to delete your account and personal data.",
  alternates: { canonical: "/delete-account" },
};

const subject = encodeURIComponent("Delete my AFCL account");
const body = encodeURIComponent(
  "Please delete my AFCL account.\n\nName:\nEmail or phone number on the account:\nRole (buyer / farmer / driver):\n"
);

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Delete your AFCL account" updated="23 November 2026">
      <p>
        You can ask us to delete your AFCL account and personal data at any
        time. This page explains how, and what happens.
      </p>

      <H2>How to request deletion</H2>
      <ol className="list-decimal space-y-2 pl-6 marker:text-emerald-400">
        <li>
          Send an email to <Mail /> from the email address registered on your
          account. If you can&apos;t, tell us your registered phone number.
        </li>
        <li>
          Use the subject &quot;Delete my AFCL account&quot; and include your
          name, the email or phone number on the account, and your role
          (buyer, farmer or driver).
        </li>
        <li>
          We may ask one question to confirm that it is really you. We
          confirm by email when it is done, normally within 30 days.
        </li>
      </ol>
      <p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
          className="mt-2 inline-block rounded-full bg-emerald-500 px-7 py-3.5 font-medium text-black transition hover:bg-emerald-400"
        >
          Email a deletion request
        </a>
      </p>

      <H2>What we delete</H2>
      <UL>
        <li>Your profile: name, email, phone number and profile photo.</li>
        <li>Saved addresses and delivery locations.</li>
        <li>
          For drivers: identity and vehicle documents you uploaded, and
          location history.
        </li>
        <li>Your push-notification token and in-app messages.</li>
      </UL>

      <H2>What we may keep</H2>
      <p>
        We keep some records for as long as the law or a genuine need
        requires, with your name and contact details removed where possible:
      </p>
      <UL>
        <li>
          Order, payment and payout records, for tax, accounting and audit
          rules.
        </li>
        <li>
          Records needed to prevent fraud, settle a dispute or handle a
          legal claim.
        </li>
      </UL>

      <H2>Before you ask</H2>
      <UL>
        <li>
          Use or withdraw any money in your wallet first. We can pay out an
          eligible balance to you.
        </li>
        <li>
          Drivers must return any cash they are holding for AFCL and finish
          any active delivery.
        </li>
        <li>
          Deleting your account cannot be undone. You can register again
          later with a new account.
        </li>
      </UL>

      <p>
        See our{" "}
        <a
          href="/privacy"
          className="text-emerald-400 underline-offset-4 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        for more about your data and rights.
      </p>
    </LegalPage>
  );
}
