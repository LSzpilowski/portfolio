import { useEffect } from "react";
import * as THREE from "three";

export function useScreenTexture(scene: THREE.Group) {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#050810";
    ctx.fillRect(0, 0, 1024, 640);

    const glow = ctx.createRadialGradient(512, 320, 60, 512, 320, 480);
    glow.addColorStop(0, "rgba(80, 120, 255, 0.18)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1024, 640);

    const pillX = 512, pillY = 168, pillW = 210, pillH = 36, pillR = 18;
    ctx.beginPath();
    ctx.moveTo(pillX - pillW / 2 + pillR, pillY - pillH / 2);
    ctx.lineTo(pillX + pillW / 2 - pillR, pillY - pillH / 2);
    ctx.arcTo(pillX + pillW / 2, pillY - pillH / 2, pillX + pillW / 2, pillY + pillH / 2, pillR);
    ctx.lineTo(pillX + pillW / 2, pillY + pillH / 2);
    ctx.arcTo(pillX + pillW / 2, pillY + pillH / 2, pillX - pillW / 2, pillY + pillH / 2, pillR);
    ctx.lineTo(pillX - pillW / 2 + pillR, pillY + pillH / 2);
    ctx.arcTo(pillX - pillW / 2, pillY + pillH / 2, pillX - pillW / 2, pillY - pillH / 2, pillR);
    ctx.lineTo(pillX - pillW / 2, pillY - pillH / 2);
    ctx.arcTo(pillX - pillW / 2, pillY - pillH / 2, pillX + pillW / 2, pillY - pillH / 2, pillR);
    ctx.closePath();
    ctx.fillStyle = "rgba(34, 197, 94, 0.15)";
    ctx.fill();
    ctx.strokeStyle = "rgba(34, 197, 94, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(pillX - 62, pillY + 1, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#22c55e";
    ctx.fill();

    ctx.font = "600 20px 'SF Mono', 'Fira Code', monospace";
    ctx.fillStyle = "rgba(34, 197, 94, 0.9)";
    ctx.textAlign = "center";
    ctx.fillText("AVAILABLE", pillX + 14, pillY + 7);

    ctx.font = "800 92px 'Arial Black', 'Helvetica Neue', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(100, 140, 255, 0.45)";
    ctx.shadowBlur = 32;
    ctx.fillText("OPEN TO", 512, 298);
    ctx.fillText("WORK", 512, 400);
    ctx.shadowBlur = 0;

    ctx.font = "400 24px 'SF Mono', 'Fira Code', monospace";
    ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
    ctx.fillText("Frontend  ·  React  ·  Next.js", 512, 468);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh && mesh.name === "Object_123") {
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          emissiveMap: texture,
          emissive: new THREE.Color("#ffffff"),
          emissiveIntensity: 0.9,
          roughness: 0.1,
          metalness: 0.0,
        });
      }
    });

    return () => { texture.dispose(); };
  }, [scene]);
}
