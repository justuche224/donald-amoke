import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Donald Amoke",
  description: "A full-stack JavaScript/TypeScript dev",
  openGraph: {
    title: "Donald Amoke - Full-Stack Developer",
    description:
      "A full-stack JavaScript/TypeScript dev that prioritize functionality and usability.",
    images: [{ url: "/me.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donald Amoke - Full-Stack Developer",
    description:
      "A full-stack JavaScript/TypeScript dev that prioritize functionality and usability.",
    images: [{ url: "/me.jpg" }],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-5xl mx-auto px-4 flex flex-col`}
      >
        <Navbar />
        <main className="grow mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
