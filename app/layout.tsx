import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ameche Cleaning Service | Commercial Cleaning & Janitorial Services",
  description:
    "Commercial cleaning services including janitorial maintenance, floor care, deep cleaning, and sanitization for businesses across Western Canada.",
  metadataBase: new URL("https://amechecleaning.ca"),
  keywords: [
    "Commercial Cleaning",
    "Janitorial Services",
    "Deep Cleaning",
    "Floor Care",
    "Sanitization",
    "Commercial Janitorial",
  ],
  openGraph: {
    title: "Ameche Cleaning Service",
    description:
      "Professional commercial cleaning and janitorial services for retail stores, offices, and commercial buildings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
            <div className="absolute inset-x-0 top-[-200px] mx-auto h-[420px] max-w-5xl bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_55%)] blur-3xl" />
          </div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
