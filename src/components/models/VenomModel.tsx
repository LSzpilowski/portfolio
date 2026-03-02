"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/3D/venom/venom_trimmed.glb";

export interface VenomModelProps {
  playShackle?: boolean;
  onShackleDone?: () => void;
  inViewport?: boolean;
  onClickMesh?: () => void;
}

interface VenomSceneProps {
  playShackle: boolean;
  onShackleDone: () => void;
  inViewport: boolean;
  onClickMesh: () => void;
}

function VenomScene({ playShackle, onShackleDone, inViewport, onClickMesh }: VenomSceneProps) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  const appearRunning = useRef(false);
  const descentRunning = useRef(false);

  useEffect(() => {
    if (!inViewport) {
      if (descentRunning.current) return;
      descentRunning.current = true;

      const idle    = actions["Idle_C"];
      const descent = actions["103531_Descent_Start"];

      if (!descent) {
        Object.values(actions).forEach((a) => a?.stop());
        appearRunning.current = false;
        descentRunning.current = false;
        return;
      }

      idle?.fadeOut(0.2);
      descent.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
      descent.clampWhenFinished = true;

      const mixer = descent.getMixer();
      const onDescentDone = (e: THREE.Event) => {
        if ((e as unknown as { action: THREE.AnimationAction }).action !== descent) return;
        mixer.removeEventListener("finished", onDescentDone);
        Object.values(actions).forEach((a) => a?.stop());
        appearRunning.current = false;
        descentRunning.current = false;
      };
      mixer.addEventListener("finished", onDescentDone);

      return () => mixer.removeEventListener("finished", onDescentDone);
    }

    if (appearRunning.current) return;
    appearRunning.current = true;

    const appear = actions["103571_Devouring_Appear"];
    const idle   = actions["Idle_C"];
    if (!appear || !idle) return;

    appear.reset().setLoop(THREE.LoopOnce, 1).play();
    appear.clampWhenFinished = true;

    const mixer = appear.getMixer();
    const onAppearDone = (e: THREE.Event) => {
      if ((e as unknown as { action: THREE.AnimationAction }).action !== appear) return;
      mixer.removeEventListener("finished", onAppearDone);
      appear.fadeOut(0.3);
      idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.3).play();
    };
    mixer.addEventListener("finished", onAppearDone);

    return () => mixer.removeEventListener("finished", onAppearDone);
  }, [actions, inViewport]);

  useEffect(() => {
    if (!playShackle) return;

    const idle    = actions["Idle_C"];
    const shackle = actions["103541_Shackle"];
    if (!shackle) {
      onShackleDone();
      return;
    }

    idle?.fadeOut(0.2);
    shackle.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
    shackle.clampWhenFinished = true;

    const mixer = shackle.getMixer();
      const onFinish = (e: THREE.Event) => {
        if ((e as unknown as { action: THREE.AnimationAction }).action !== shackle) return;
        mixer.removeEventListener("finished", onFinish);
        shackle.fadeOut(0.3);
        idle?.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.3).play();
        onShackleDone();
      };
      mixer.addEventListener("finished", onFinish);

      return () => mixer.removeEventListener("finished", onFinish);
  }, [actions, onShackleDone, playShackle]);

  useEffect(() => {
    if (!inViewport) return;
    const timer = setInterval(() => {
      if (playShackle) return;

      const idle  = actions["Idle_C"];
      const emote = actions["Emote_10355012020"];
      if (!emote) return;

      idle?.fadeOut(0.2);
      emote.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();
      emote.clampWhenFinished = true;

      const mixer = emote.getMixer();
      const onEmoteDone = (e: THREE.Event) => {
        if ((e as unknown as { action: THREE.AnimationAction }).action !== emote) return;
        mixer.removeEventListener("finished", onEmoteDone);
        emote.fadeOut(0.3);
        idle?.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.3).play();
      };
      mixer.addEventListener("finished", onEmoteDone);
    }, 10000);

    return () => clearInterval(timer);
  }, [actions, inViewport, playShackle]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group
      ref={group}
      dispose={null}
      onClick={(e) => { e.stopPropagation(); onClickMesh(); }}
      onPointerEnter={(e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; }}
      onPointerLeave={(e) => { e.stopPropagation(); document.body.style.cursor = "default"; }}
    >
      <primitive
        object={scene}
        scale={0.6}
        position={[0, -1.4, 0]}
        rotation={[-0.2, 0.4, 0]}
      />
    </group>
  );
}

export function VenomModel({
  playShackle = false,
  onShackleDone = () => {},
  inViewport = false,
  onClickMesh = () => {},
}: VenomModelProps) {
  return (
    <Canvas
      camera={{ position: [0, 2.2, 4.0], fov: 32 }}
      style={{ width: "100%", height: "100%", background: "transparent", display: "block" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 6, 3]} intensity={1.4} castShadow={false} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#aaaaff" />

      <Suspense fallback={null}>
        <VenomScene
          playShackle={playShackle}
          onShackleDone={onShackleDone}
          inViewport={inViewport}
          onClickMesh={onClickMesh}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
