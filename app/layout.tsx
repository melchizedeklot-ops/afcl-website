import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFCL | Afri Food Connect & Logistics",
  description:
    "AFCL connects African agriculture, markets, businesses, and logistics through one technology-driven ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}