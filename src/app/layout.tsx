import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Ezekiel Technique | Performance Coaching — Hollywood, CA",
  description:
    "The Ezekiel Technique — Premium performance coaching in Hollywood, CA. Master acting exertion, vessel preservation, and high-stakes performance science. Train with the elite.",
  keywords:
    "performance coaching Hollywood, acting coach Los Angeles, exertion mastery, vessel preservation, high-stakes performance, performance science",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-ink-950 text-ink-100 antialiased font-sans selection:bg-gold-400/30 selection:text-gold-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
