import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morrix Labs - Digital Engineering Studio",
  description: "We design and build fast, scalable web products. Morrix Labs helps startups and small teams turn ideas into reliable websites and web applications.",
  keywords: "web development, web design, startup, engineering, digital products",
  metadataBase: new URL("https://morrixlabs.com"),
  openGraph: {
    title: "Morrix Labs - Digital Engineering Studio",
    description: "We design and build fast, scalable web products.",
    type: "website",
    locale: "en_US",
    siteName: "Morrix Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-primary">
        {children}
      </body>
    </html>
  );
}
