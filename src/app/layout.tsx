import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vision Wrld | Custom Tattoo Studio in Newmarket",
    template: "%s | Vision Wrld Tattoo",
  },
  description:
    "Newmarket's premier destination for custom tattooing. Vision Wrld features expert artists specializing in blackwork, realism, neo-traditional, fineline, and watercolor tattoos. Book your consultation today.",
  keywords: [
    "custom tattoo",
    "tattoo studio Newmarket",
    "Vision Wrld",
    "blackwork tattoo",
    "realism tattoo",
    "neo-traditional tattoo",
    "fineline tattoo",
    "watercolor tattoo",
    "tattoo artist Newmarket",
    "tattoo shop Ontario",
  ],
  openGraph: {
    title: "Vision Wrld | Custom Tattoo Studio in Newmarket",
    description:
      "Where your vision meets our world. Custom tattooing by Newmarket's finest artists.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-vw-black text-vw-white antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
