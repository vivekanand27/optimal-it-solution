import type { Metadata } from "next";
import { BootstrapClient } from "@/components/BootstrapClient";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const siteUrl = "https://optimalitsolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Optimal IT Solution | Software Development Company in India",
    template: "%s | Optimal IT Solution",
  },
  description:
    "Software development company in Raipur, Chhattisgarh serving clients across India and neighbouring states. Custom software, web & app development, digital marketing, SEO, PPC & IT solutions. Get a quote today.",
  keywords: [
    "software development company",
    "software development company in India",
    "software development company Raipur",
    "software development Chhattisgarh",
    "web development Odisha",
    "software company Bhubaneswar",
    "IT solutions Madhya Pradesh",
    "web development MP",
    "software development Jharkhand",
    "IT company Ranchi",
    "software development Bihar",
    "web development Patna",
    "software company Maharashtra",
    "web development Mumbai",
    "IT solutions Visakhapatnam",
    "software development Vizag",
    "custom software development",
    "digital marketing India",
    "SEO company India",
  ],
  authors: [{ name: "Optimal IT Solution", url: siteUrl }],
  creator: "Optimal IT Solution",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Optimal IT Solution",
    title: "Optimal IT Solution | Software Development Company in India",
    description:
      "Software development company in Raipur, Chhattisgarh — serving India, Odisha, MP, Jharkhand, Bihar, Maharashtra, Visakhapatnam. Custom software, web & app development, digital marketing, SEO.",
    images: [{ url: "/logo.png", width: 600, height: 148, alt: "Optimal IT Solution" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimal IT Solution | Software Development Company in India",
    description: "Custom software, web & app development, digital marketing & SEO — Raipur, Chhattisgarh; serving India, Odisha, MP, Jharkhand, Bihar, Maharashtra, Visakhapatnam.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-vh-100">
        <JsonLd />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
