"use client";

import dynamic from "next/dynamic";
import { SideNav } from "./SideNav";

const MacbookScrollZoom = dynamic(
  () => import("@/components/models/MacbookModel").then(m => m.MacbookScrollZoom),
  { ssr: false }
);

function FixedInfo() {
  return (
    <div className="relative w-full pt-8 lg:pt-0 flex flex-col items-center lg:justify-between lg:h-full">
      <div
        className="absolute hidden lg:block"
        style={{
          right: "50%",
          top: "42%",
          width: "40rem",
          height: "40rem",
          transformOrigin: "center",
          transform: "translateX(60%)",
        }}
      >
        <MacbookScrollZoom />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col gap-3">
          <p className="text-5xl font-bold">Szpilowski Lukasz</p>
          <p className="text-xl font-bold">Frontend Developer</p>
          <div>
            <p>I build intuitive, engaging, </p>
            <p>and accessible digital experiences.</p>
          </div>
        </div>
        <SideNav />
      </div>
    </div>
  );
}

export default FixedInfo;
