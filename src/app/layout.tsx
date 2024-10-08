import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "LSzpilowski",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
