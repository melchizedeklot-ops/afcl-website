import type { Metadata } from "next";
import { LegalPage, H2, UL, Mail, COMPANY_NAME } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | AFCL",
  description:
    "The terms for using the AFCL (Afri Food Connect & Logistics) marketplace and delivery service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="23 November 2026">
      <p>
        These Terms govern your use of the AFCL website, web app and mobile
        app (the &quot;Service&quot;), operated by {COMPANY_NAME}{" "}
        (&quot;AFCL&quot;, &quot;we&quot;), a company registered in Nigeria
        with its registered office at PUT YOUR FULL REGISTERED ADDRESS HERE, CITY, STATE, NIGERIA. By creating an
        account or using the Service you agree to them.
      </p>

      <H2>1. What AFCL is</H2>
      <p>
        AFCL is a marketplace and logistics platform that connects farmers
        and sellers, buyers and delivery drivers. Sellers list products,
        buyers order them, and drivers deliver them or deliver parcels sent
        through the app. Unless we say otherwise, the contract for a sale is
        between the buyer and the seller.
      </p>

      <H2>2. Your account</H2>
      <UL>
        <li>You must be 18 or over and give accurate information.</li>
        <li>
          Keep your password secret. You are responsible for activity on your
          account. Tell us at once if you think it has been misused.
        </li>
        <li>
          Drivers and sellers may be asked to verify their identity,
          vehicle or business before they can work on the platform.
        </li>
      </UL>

      <H2>3. Launch areas</H2>
      <p>
        We are opening the Service city by city. You can only order or
        deliver in areas we have opened. If your area is not open, you can
        join the waitlist and we will tell you when it is.
      </p>

      <H2>4. Orders, prices and fees</H2>
      <UL>
        <li>
          Sellers set their own prices and must describe products honestly.
        </li>
        <li>
          The total you pay, including delivery and any service or platform
          fee, is shown before you confirm an order.
        </li>
        <li>
          Prices are shown in the currency in the app. Payments may be
          converted and are processed in Nigerian naira by our payment
          provider.
        </li>
        <li>
          An order is accepted when it is approved in the app. We may cancel
          or refuse an order if there is a pricing error, a stock problem,
          suspected fraud or a breach of these Terms.
        </li>
      </UL>

      <H2>5. Payments</H2>
      <p>
        Online payments are handled by Paystack. AFCL does not store your
        card details. Wallet balances can be used to pay on the platform and
        can be topped up through Paystack. Where cash on delivery is offered,
        it may need our approval, and the driver collects the cash on our
        behalf and must hand it over under the driver terms.
      </p>

      <H2>6. Delivery and parcels</H2>
      <UL>
        <li>
          Delivery times are estimates. The delivery pin comes from the
          address you type, so please give a clear and complete address.
        </li>
        <li>
          You may not send weapons, drugs, illegal or dangerous goods, cash,
          jewellery or live animals as a parcel. We and drivers may refuse or
          cancel any parcel we think breaks this rule.
        </li>
        <li>
          If a parcel is lost or damaged in our care, AFCL compensates you up
          to the declared value shown when you sent it.
        </li>
      </UL>

      <H2>7. Cancellations, refunds and disputes</H2>
      <p>
        If an order cannot be completed, we refund payments you have already
        made under the rules shown in the app. If there is a problem with an
        order, contact support from the order page or at <Mail />. We will
        review it and may hold or release funds while we do.
      </p>

      <H2>8. Rules for everyone</H2>
      <UL>
        <li>
          Do not break the law, commit fraud, harass others or misuse the
          Service.
        </li>
        <li>
          Keep every deal on AFCL. Payments made outside the platform, such as
          bank transfers, mobile money, other apps or private cash, are at
          your own risk, and AFCL cannot protect you, refund you or settle
          disputes about them.
        </li>
        <li>
          Do not list prohibited, counterfeit, unsafe or unlawful items. We
          may review, hold or remove products and accounts at any time.
        </li>
      </UL>

      <H2>9. Sellers and drivers</H2>
      <p>
        Sellers and drivers act as independent businesses and not as AFCL
        employees. Sellers are responsible for the quality, safety and
        legality of what they sell. Drivers must hold the documents the law
        requires, drive safely, and follow the driver rules shown in the app,
        including the limit on cash they may hold.
      </p>

      <H2>10. Our liability</H2>
      <p>
        We provide the Service &quot;as is&quot;. To the extent the law
        allows, AFCL is not liable for indirect or consequential loss, for
        what sellers sell, or for events beyond our control. Nothing in these
        Terms limits liability that cannot be limited by law.
      </p>

      <H2>11. Suspending or closing accounts</H2>
      <p>
        We may suspend or close an account if these Terms are broken or if we
        suspect fraud or risk to others. You may close your account at any
        time (see our Delete account page).
      </p>

      <H2>12. Changes</H2>
      <p>
        We may update these Terms. We will post the new version here with a
        new date. If you keep using the Service afterwards, you accept the
        updated Terms.
      </p>

      <H2>13. Governing law</H2>
      <p>
        These Terms are governed by the laws of the Federal Republic of
        Nigeria, and the courts of Nigeria have jurisdiction over any
        dispute, unless the law gives you the right to go elsewhere.
      </p>

      <H2>14. Contact</H2>
      <p>
        {COMPANY_NAME}, PUT YOUR FULL REGISTERED ADDRESS HERE, CITY, STATE, NIGERIA, Nigeria. Email: <Mail />.
      </p>
    </LegalPage>
  );
}
