
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Szpilowski Lukasz – Frontend Developer Portfolio",
    template: "%s | Szpilowski Lukasz",
  },
  description: "Portfolio of Szpilowski Lukasz – freelance frontend developer. Modern, accessible web applications, React, Next.js, TypeScript.",
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
    description: "Portfolio of Szpilowski Lukasz – freelance frontend developer. Modern, accessible web applications, React, Next.js, TypeScript.",
    url: "https://lszpilowski.dev/",
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
    description: "Portfolio of Szpilowski Lukasz – freelance frontend developer. Modern, accessible web applications, React, Next.js, TypeScript.",
    images: ["/images/og-image.png"],
    creator: "@lszpilowski",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
