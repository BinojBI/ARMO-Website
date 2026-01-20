"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float, ContactShadows, Center } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

// Define props for our Nav Item
interface NavItemProps {
  label: string;
  position: [number, number, number];
  href: string;
}

function NavItem({ label, position, href }: NavItemProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    // Smoothly scale on hover
    mesh.current.scale.lerp(
      new THREE.Vector3(hovered ? 1.2 : 1, hovered ? 1.2 : 1, 1),
      0.1,
    );
    // Add a slight tilt based on mouse position
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      hovered ? 0.2 : 0,
      0.1,
    );
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={mesh}
        position={position}
        fontSize={0.3}
        color={hovered ? "#387498" : "white"}
        onPointerOver={() => (
          (document.body.style.cursor = "pointer"),
          setHover(true)
        )}
        onPointerOut={() => (
          (document.body.style.cursor = "auto"),
          setHover(false)
        )}
        onClick={() => (window.location.href = href)}
        // If you don't have a custom font yet, comment the line below
        // font="/fonts/Inter-Bold.ttf"
      >
        {label}
      </Text>
    </Float>
  );
}

function ResponsiveCenter({ children }: { children: React.ReactNode }) {
  const { viewport, size } = useThree();

  // Logic: If screen width (size.width) is less than 768,
  // move the group to the right (x = 1.5). Otherwise, keep it at 0.
  // Note: 1.5 is in 3D units, not pixels.
  const isMobile = size.width < 768;
  const positionX = isMobile ? 0.5 : 0;

  return (
    <Center top position={[positionX, 0, 0]}>
      {children}
    </Center>
  );
}

export default function Navbar3D() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -20]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed top-0 left-0 w-full h-40 z-[100] pointer-events-none"
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 35 }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        <ResponsiveCenter>
          <NavItem label="ABOUT" position={[-4, 0, 0]} href="/about" />
          <NavItem label="PRODUCTS" position={[-2, 0, 0]} href="/services" />
          <NavItem label="ARMO" position={[0, 0, 0]} href="/" />
          <NavItem label="CAREERS" position={[2, 0, 0]} href="/careers" />
          <NavItem label="CONTACT" position={[4, 0, 0]} href="/contact" />
        </ResponsiveCenter>

        {/* This helps visibility by adding a soft floor shadow */}
        <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} />
      </Canvas>
    </motion.div>
  );
}
