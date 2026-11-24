import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://afrifoodconnect.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AFCL | Afri Food Connect & Logistics",
    template: "%s",
  },
  description:
    "AFCL connects African agriculture, markets, businesses, and logistics through one technology-driven ecosystem. Buy farm-fresh food and get it delivered.",
  applicationName: "AFCL",
  keywords: [
    "AFCL",
    "Afri Food Connect",
    "farm to table Nigeria",
    "buy farm produce online",
    "food delivery Kaduna",
    "agriculture marketplace Africa",
    "logistics Nigeria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AFCL",
    title: "AFCL | Afri Food Connect & Logistics",
    description:
      "Connecting African agriculture to the world. Farmers, buyers, businesses and logistics in one platform.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFCL | Afri Food Connect & Logistics",
    description:
      "Connecting African agriculture to the world. Farmers, buyers, businesses and logistics in one platform.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06130F",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AFCL - Afri Food Connect & Logistics",
  legalName: "AFRI-FOOD CONNECT AND LOGISTICS LTD",
  url: SITE_URL,
  logo: `${SITE_URL}/AFCL-logo.svg`,
  email: "info@afrifoodconnect.com",
  sameAs: ["https://www.facebook.com/share/1Fx2MPAZ5o/"],
  areaServed: "NG",
  description:
    "A farm-to-table marketplace and delivery service connecting African farmers, buyers, businesses and logistics.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@afrifoodconnect.com",
      contactType: "customer support",
      areaServed: "NG",
      availableLanguage: ["en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
