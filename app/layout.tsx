import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morrix Labs | Premium Technology Solutions",
  description: "Morrix Labs builds intelligent, future-ready technology solutions. We deliver premium software engineering, AI integration, and digital transformation services.",
  keywords: ["technology", "software", "AI", "digital transformation", "engineering", "Morrix Labs"],
  authors: [{ name: "Morrix Labs" }],
  openGraph: {
    title: "Morrix Labs | Premium Technology Solutions",
    description: "Building intelligent, future-ready technology solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
