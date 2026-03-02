"use client";

import { FooterCTA } from "./FooterCTA";
import { FooterHoneycomb } from "./FooterHoneycomb";
import { FooterBottomBar } from "./FooterBottomBar";

export function Footer() {
  return (
    <footer id="contact" className="w-full h-screen flex flex-col border-t border-foreground/10 overflow-hidden">

      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto px-4 md:px-20">
        <FooterCTA />
        <FooterHoneycomb />
      </div>

      <FooterBottomBar />
    </footer>
  );
}
