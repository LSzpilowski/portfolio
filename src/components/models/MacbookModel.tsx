"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

if (typeof window !== "undefined") {
  const _warn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    _warn(...args);
  };
}
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useScreenTexture } from "@/hooks/useScreenTexture";

const Y_TILTED = Math.PI / 10;
const Y_STRAIGHT = 0;

function MacbookModel({ hoveredRef, onHover }: {
  hoveredRef: React.RefObject<boolean>;
  onHover: (h: boolean) => void;
}) {
  const { scene } = useGLTF("/3D/macbook/macbook_pro_m3_16_inch_2024.glb");
  const groupRef = useRef<THREE.Group>(null);

  useScreenTexture(scene);

  React.useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Y_TILTED;
      groupRef.current.rotation.x += 0.2;
    }
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = hoveredRef.current ? Y_STRAIGHT : Y_TILTED;
    groupRef.current.rotation.y += (target - groupRef.current.rotation.y) * Math.min(delta * 4, 1);
  });

  return (
    <group
      ref={groupRef}
      onClick={(e) => { e.stopPropagation(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
      onPointerEnter={(e) => { e.stopPropagation(); onHover(true); document.body.style.cursor = "pointer"; }}
      onPointerLeave={(e) => { e.stopPropagation(); onHover(false); document.body.style.cursor = "default"; }}
    >
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color="#888" wireframe />
    </mesh>
  );
}

export function MacbookScrollZoom() {
  const [opacity, setOpacity] = useState(0);
  const hoveredRef = useRef<boolean>(false);

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setOpacity(1); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full h-full"
      style={{ opacity, transition: "opacity 2s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 85], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        performance={{ min: 0.5 }}
        onPointerMissed={() => { hoveredRef.current = false; document.body.style.cursor = "default"; }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />

        <Suspense fallback={<Loader />}>
          <MacbookModel
            hoveredRef={hoveredRef}
            onHover={(h) => { hoveredRef.current = h; }}
          />
          <Environment files="/hdr/potsdamer_platz_1k.hdr" />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={8} blur={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/3D/macbook/macbook_pro_m3_16_inch_2024.glb");
