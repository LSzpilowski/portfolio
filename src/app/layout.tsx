import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-[#FAFAFA]`}>{children}</body>
    </html>
  );
}
