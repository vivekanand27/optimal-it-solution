import type { Metadata } from "next";
import { BootstrapClient } from "@/components/BootstrapClient";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const siteUrl = "https://optimalitsolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Optimal IT Solution | Software Development Company in Raipur",
    template: "%s | Optimal IT Solution",
  },
  description:
    "Software development company in Raipur, Chhattisgarh. Custom software, web & app development, digital marketing, SEO, PPC & IT solutions. Get a quote today.",
  keywords: [
    "software development company",
    "software development company in Raipur",
    "custom software development",
    "web development company Raipur",
    "app development Raipur",
    "IT solutions Chhattisgarh",
    "digital marketing Raipur",
    "SEO company Raipur",
  ],
  authors: [{ name: "Optimal IT Solution", url: siteUrl }],
  creator: "Optimal IT Solution",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Optimal IT Solution",
    title: "Optimal IT Solution | Software Development Company in Raipur",
    description:
      "Software development company in Raipur, Chhattisgarh. Custom software, web & app development, digital marketing, SEO & IT solutions.",
    images: [{ url: "/logo.png", width: 600, height: 148, alt: "Optimal IT Solution" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimal IT Solution | Software Development Company in Raipur",
    description: "Custom software, web & app development, digital marketing & SEO in Raipur, Chhattisgarh.",
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
