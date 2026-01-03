"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface HeroBackground3DProps {
  scrollProgress: number;
}

function CustomModel({ scrollProgress }: HeroBackground3DProps) {
  // Ensure the path to your .glb is correct
  const { scene, animations } = useGLTF("/models/space.glb");
  const group = useRef<THREE.Group>(null!);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      // Plays the first animation found in the GLB file
      const firstAction = actions[animations[0].name];
      if (firstAction) firstAction.play();
    }
  }, [actions, animations]);

  useFrame((state) => {
    if (group.current) {
      // Continuous rotation
      group.current.rotation.y += 0.005;

      // Scroll-based vertical movement (Parallax)
      // Lerp makes the movement smooth rather than jumpy
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        -scrollProgress * 4,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive
        object={scene}
        ref={group}
        scale={2.2} // Adjust this based on your specific model size
        position={[0, 0, 0]}
      />
    </Float>
  );
}

export default function HeroBackground3D({
  scrollProgress,
}: HeroBackground3DProps) {
  return (
    <Canvas
      // gl={{ alpha: true }} ensures the canvas background is transparent
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 0], fov: 50 }}
    >
      {/* Lights - Adjust intensity if model is too dark/bright */}
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} color="#93DCFF" intensity={1} />

      {/* IMPORTANT: background={false} ensures the HDR image 
          is used for LIGHTING only, not as a visible blue sphere.
      */}
      <Environment preset="city" background={false} />

      <CustomModel scrollProgress={scrollProgress} />
    </Canvas>
  );
}

useGLTF.preload("/models/space.glb");
