import type { Metadata } from "next";
import { BootstrapClient } from "@/components/BootstrapClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimal IT Solution | Digital Marketing, Web & App Development, SEO & PPC",
  description:
    "Digital marketing, web & app development, SEO & PPC, social media management, and custom software. Raipur, Chhattisgarh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-vh-100">
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
