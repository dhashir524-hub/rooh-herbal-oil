
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

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
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Rooh Herbal Oil | 25 Herbal Ingredients",
    template: "%s | Rooh Herbal Oil",
  },
  description:
    "Discover Rooh Herbal Oil, a traditional blend of 25 herbal ingredients with almond and mustard oil. 120ml bottle for Rs. 700.",
  keywords: [
    "Rooh Herbal Oil",
    "Herbal Hair Oil",
    "25 Herbal Ingredients",
    "Almond Oil",
    "Mustard Oil",
  ],
  openGraph: {
    title: "Rooh Herbal Oil",
    description:
      "Explore Rooh Herbal Oil, a traditional blend of 25 herbal ingredients.",
    type: "website",
    images: ["/rooh-bottle.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
