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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ezekieltechnique.bolt.host/#organization",
      name: "The Ezekiel Technique",
      url: "https://ezekieltechnique.bolt.host",
      logo: "https://ezekieltechnique.bolt.host/logo.png",
      image: "https://images.pexels.com/photos/17727343/pexels-photo-17727343.jpeg",
      description:
        "Elite performance coaching for actors, performers, and public speakers in Hollywood, California.",
      telephone: "+1-424-653-9123",
      email: "connect@ezekieltechnique.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1938 Argyle Avenue",
        addressLocality: "Hollywood",
        addressRegion: "CA",
        postalCode: "90068",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.1016,
        longitude: -118.3268,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "$$$$",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-ink-950 text-ink-100 antialiased font-sans selection:bg-gold-400/30 selection:text-gold-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
