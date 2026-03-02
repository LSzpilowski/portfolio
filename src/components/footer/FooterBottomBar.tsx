"use client";

import { useState } from "react";
import { socials, credits } from "./data";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function FooterBottomBar() {
  const [credentialsOpen, setCredentialsOpen] = useState(false);

  return (
    <div className="border-t border-foreground/10 w-full max-w-screen-xl mx-auto px-4 md:px-20 h-16 flex flex-row items-center justify-between gap-4">
      <ul className="flex items-center gap-5" aria-label="Social media">
        {socials.map((social, index) => (
          <li key={index} className="shrink-0">
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.title} opens in a new tab`}
              title={social.title}
              className="block text-foreground/40 hover:text-foreground transition-colors duration-200"
            >
              <span className="sr-only">{social.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={social.viewBox}
                fill="currentColor"
                className={social.className}
                aria-hidden="true"
              >
                <path d={social.path} />
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <nav aria-label="Footer navigation" className="hidden md:block">
        <ul className="flex items-center gap-6">
          {["About", "Experience", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <p className="text-xs text-foreground/30 font-mono">© 2026 Szpilowski Lukasz.</p>
        <Drawer open={credentialsOpen} onOpenChange={setCredentialsOpen}>
          <DrawerTrigger asChild>
            <button className="text-xs font-mono text-foreground/30 hover:text-foreground/60 transition-colors duration-200 underline underline-offset-4">
              Credentials
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-sm font-bold uppercase tracking-widest">
                3D Model Credits
              </DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-10 flex flex-col gap-5">
              {credits.map((c) => (
                <p key={c.labelHref} className="text-xs text-muted-foreground leading-relaxed">
                  <a
                    href={c.labelHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="italic hover:text-foreground transition-colors"
                  >
                    &ldquo;{c.label}&rdquo;
                  </a>{" "}
                  by{" "}
                  <a
                    href={c.authorHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {c.author}
                  </a>{" "}
                  is licensed under{" "}
                  <a
                    href={c.licenseHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {c.license}
                  </a>
                </p>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
