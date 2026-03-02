
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/scrollbar.css";
import "@/styles/flip-card.css";
import "@/styles/hex.css";
import "@/styles/navigation.css";
import { Providers } from "./providers";
import Script from "next/script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lszpilowski.com"),
  title: {
    default: "Szpilowski Lukasz – Frontend Developer Portfolio",
    template: "%s | Szpilowski Lukasz",
  },
  description: "Portfolio of Szpilowski Lukasz – frontend Developer. Modern, accessible web applications, React, Next.js, TypeScript.",
  keywords: ["frontend developer", "React", "Next.js", "TypeScript", "Wrocław", "portfolio", "web developer"],
  authors: [{ name: "Szpilowski Lukasz", url: "https://lszpilowski.com" }],
  alternates: {
    canonical: "https://lszpilowski.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Szpilowski Lukasz – Frontend Developer Portfolio",
    description: "Portfolio of Szpilowski Lukasz – frontend Developer. Modern, accessible web applications, React, Next.js, TypeScript.",
    url: "https://lszpilowski.com",
    siteName: "Szpilowski Lukasz Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Szpilowski Lukasz Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szpilowski Lukasz – Frontend Developer Portfolio",
    description: "Portfolio of Szpilowski Lukasz – frontend Developer. Modern, accessible web applications, React, Next.js, TypeScript.",
    images: ["/images/og-image.png"],
    creator: "@lszpilowski",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Szpilowski Lukasz",
  jobTitle: "Frontend Developer",
  url: "https://lszpilowski.com",
  sameAs: [
    "https://github.com/lszpilowski",
    "https://www.linkedin.com/in/lszpilowski/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${syne.variable}`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
