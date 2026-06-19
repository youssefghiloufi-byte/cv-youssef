import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef Ghiloufi — QA Automation Engineer",
  description:
    "Ingénieur QA Senior avec 8 ans d'expérience en automatisation des tests — Playwright, WebdriverIO, Cucumber, CI/CD.",
  openGraph: {
    title: "Youssef Ghiloufi — QA Automation Engineer",
    description: "Ingénieur QA Senior spécialisé en automatisation des tests.",
    url: "https://cv-youssef-ghiloufi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
