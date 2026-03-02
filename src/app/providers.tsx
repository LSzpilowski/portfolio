"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
  }, []);

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
