"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

interface HeroBackground3DProps {
  scrollProgress: number; // Prop to receive scroll progress from parent
}

function AnimatedSphere({ scrollProgress }: HeroBackground3DProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (mesh.current) {
      // Rotate the sphere based on time for continuous animation
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.x += 0.003;

      // Add a subtle bounce effect based on scroll
      const scale = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1; // Oscillate between 0.9 and 1.1
      mesh.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={mesh}>
      <MeshDistortMaterial
        color="#2233ff" // A blue-purple shade for a techy feel
        roughness={0.5}
        metalness={0.8}
        distort={0.6} // Amount of distortion
        speed={2} // Speed of distortion animation
      />
    </Sphere>
  );
}

export default function HeroBackground3D({
  scrollProgress,
}: HeroBackground3DProps) {
  return (
    <Canvas
      className="absolute inset-0 z-0" // Stretch to fill parent, send to back
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.6} />

      {/* Environment lighting (optional, but makes models look better) */}
      <Environment preset="night" background={false} />

      {/* The animated sphere component */}
      <AnimatedSphere scrollProgress={scrollProgress} />

      {/* Optional: OrbitControls for debugging during development */}
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
}
