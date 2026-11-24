import type { Metadata } from "next";
import { LegalPage, H2, UL, Mail, COMPANY_NAME } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AFCL",
  description:
    "How AFCL (Afri Food Connect & Logistics) collects, uses, shares and protects your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="23 November 2026">
      <p>
        This Privacy Policy explains how {COMPANY_NAME} (&quot;AFCL&quot;,
        &quot;we&quot;, &quot;us&quot;), a company registered in Nigeria with
        its registered office at PUT YOUR FULL REGISTERED ADDRESS HERE, CITY, STATE, NIGERIA, collects, uses and
        protects your personal data when you use the AFCL website, web app
        and mobile app (together, the &quot;Service&quot;). We handle personal
        data in line with the Nigeria Data Protection Act 2023 (&quot;NDPA&quot;).
      </p>

      <H2>1. Who is responsible for your data</H2>
      <p>
        AFCL is the data controller for the personal data described here. You
        can contact us about your data at <Mail />.
      </p>

      <H2>2. What we collect</H2>
      <UL>
        <li>
          <strong className="text-white">Account details:</strong> your name,
          email address, phone number, role (buyer, farmer/seller or driver)
          and a password stored in hashed form.
        </li>
        <li>
          <strong className="text-white">Delivery details:</strong> delivery
          and pickup addresses and the map location they correspond to. We
          use your typed address to place the delivery pin. We use your
          device&apos;s GPS only if you choose to share it.
        </li>
        <li>
          <strong className="text-white">Driver location:</strong> if you are
          a driver, the app shares your live location with AFCL and with the
          buyer while you have an active delivery, including when the app is
          in the background. A notification shows on your phone while this is
          happening. Location sharing stops when you have no active delivery.
        </li>
        <li>
          <strong className="text-white">Orders and payments:</strong> items
          ordered, amounts, delivery status, payment status, wallet and cash
          records. Card and bank details are entered with our payment
          provider and are not stored by AFCL.
        </li>
        <li>
          <strong className="text-white">Photos and documents:</strong>{" "}
          product photos, profile photos and, for drivers, identity and
          vehicle documents you upload for verification.
        </li>
        <li>
          <strong className="text-white">Messages:</strong> messages sent
          between buyers, sellers, drivers and AFCL support in the app.
        </li>
        <li>
          <strong className="text-white">Device and usage data:</strong> a
          push-notification token, device type, language, and basic technical
          logs used to keep the Service secure and working.
        </li>
      </UL>

      <H2>3. How we use your data</H2>
      <UL>
        <li>To create and manage your account and verify who you are.</li>
        <li>
          To process orders, parcels, payments, refunds and payouts, and to
          show delivery progress on a map.
        </li>
        <li>
          To send order updates, security messages and (if you allow them)
          push notifications.
        </li>
        <li>
          To review products and accounts for safety, prevent fraud and
          enforce our Terms.
        </li>
        <li>To provide customer support and resolve disputes.</li>
        <li>To meet legal, tax and regulatory obligations in Nigeria.</li>
      </UL>
      <p>
        Our legal bases are: performing our contract with you, your consent
        (for example location sharing and notifications), our legitimate
        interests in running a safe marketplace, and legal obligations.
      </p>

      <H2>4. Who we share data with</H2>
      <p>We do not sell your personal data. We share it only as needed with:</p>
      <UL>
        <li>
          <strong className="text-white">Other users:</strong> a buyer sees a
          driver&apos;s name, vehicle and live position for their delivery. A
          driver and seller see the delivery address and contact number
          needed to complete an order.
        </li>
        <li>
          <strong className="text-white">Service providers</strong> that work
          for us, including Paystack (payments), Google (maps, geocoding and
          routes), Cloudinary (image storage), Brevo (email), Expo and
          Google Firebase (push notifications), MongoDB Atlas, Render and
          Cloudflare (hosting and data storage), and Vercel (website
          hosting).
        </li>
        <li>
          <strong className="text-white">Authorities</strong> where the law
          requires it or to protect people and property.
        </li>
      </UL>
      <p>
        Some providers process data outside Nigeria. Where that happens we
        take steps to make sure your data stays protected, as the NDPA
        requires.
      </p>

      <H2>5. How long we keep it</H2>
      <p>
        We keep your data while your account is active. After you ask us to
        delete your account we remove or anonymise your personal data, except
        records we must keep for legal, tax, fraud-prevention or dispute
        reasons, such as transaction records. Those are kept only for as long
        as the law or those purposes require.
      </p>

      <H2>6. Your rights</H2>
      <p>Under the NDPA you can ask us to:</p>
      <UL>
        <li>give you a copy of the personal data we hold about you;</li>
        <li>correct data that is wrong or incomplete;</li>
        <li>delete your data (see our Delete account page);</li>
        <li>restrict or object to certain uses of your data;</li>
        <li>withdraw consent you gave, such as location sharing.</li>
      </UL>
      <p>
        To use these rights, write to <Mail />. You can also complain to the
        Nigeria Data Protection Commission.
      </p>

      <H2>7. Security</H2>
      <p>
        We protect data with encrypted connections, hashed passwords, access
        controls and monitoring. No system is perfectly secure. If a breach
        affects you, we will tell you and the regulator as the law requires.
      </p>

      <H2>8. Children</H2>
      <p>
        The Service is for people aged 18 and over. We do not knowingly
        collect data from children. If you think a child has given us
        personal data, contact <Mail /> and we will delete it.
      </p>

      <H2>9. Changes to this policy</H2>
      <p>
        We may update this policy. We will post the new version here with a
        new date and, for important changes, tell you in the app or by email.
      </p>

      <H2>10. Contact</H2>
      <p>
        {COMPANY_NAME}, PUT YOUR FULL REGISTERED ADDRESS HERE, CITY, STATE, NIGERIA, Nigeria. Email: <Mail />.
      </p>
    </LegalPage>
  );
}
