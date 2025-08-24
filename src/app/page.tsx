"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";

import HeroTitle3D from "@/components/HeroTitle3D";
import SocialPanel3D from "@/components/SocialPanel3D";
import BlogPanel3D from "@/components/BlogPanel3D";
import Footer3D from "@/components/Footer3D";
import Laptop3D from "@/components/Laptop3D";
import Desk3D from "@/components/Desk3D";
import WallFrame3D from "@/components/WallFrame3D";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // phones
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{
        position: isMobile ? [0, 2, 17] : [0, 2, 8], // further back on mobile
        fov: isMobile ? 90 : 45, // wider view on mobile
      }}
      shadows
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >

      {/* Scale whole scene down on mobile */}
      <group scale={isMobile ? 0.9 : 1}>
        {/* Tech stack wallpaper (left wall) */}
        <WallFrame3D
          position={[-7, 1, -4.9]}
          text={`Tech Stack\n- Next.js\n- TypeScript\n- Tailwind\n- Three.js\n- Redux\n- Node.js\n- Express\n- MongoDB`}
        />

        {/* Profile picture wallpaper (right wall) */}
        <WallFrame3D position={[7, 1, -4.9]} imageUrl="/me.jpg" />

        {/* Floor */}
        <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#d9c9b6" roughness={0.8} />
        </mesh>

        {/* Ceiling */}
        <mesh rotation-x={Math.PI / 2} position={[0, 4, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#d9c9b6" roughness={0.8} />
        </mesh>

        {/* Back wall */}
        <mesh position={[0, 3, -5]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#f5f0e6" />
        </mesh>

        {/* Left wall */}
        <mesh rotation-y={Math.PI / 2} position={[-10, 3, 0]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#f5f0e6" />
        </mesh>

        {/* Right wall */}
        <mesh rotation-y={-Math.PI / 2} position={[10, 3, 0]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#f5f0e6" />
        </mesh>

        {/* Desk */}
        <Desk3D position={[0, -2, 0]} />

        {/* Laptop */}
        <Laptop3D position={[0, -1, 0]} />

        {/* Hero Title */}
        <HeroTitle3D position={[0, 1.5, 0]} />

        {/* Social panels */}
        <SocialPanel3D label="GitHub" url="https://github.com/ChibuikemLucas" position={[-2, -0.3, 1]} />
        <SocialPanel3D label="LinkedIn" url="https://www.linkedin.com/in/chibuikem-lucas-073355261" position={[0, -0.3, 1]} />
        <SocialPanel3D label="Resume" url="/resume.docx" position={[2, -0.3, 1]} />

        {/* Blog panel */}
        <BlogPanel3D
          position={[2.7, -1.5, 0]}
          title="The Developer Experience Blog"
          url="https://the-developer-experience.hashnode.dev"
        />

        {/* Footer */}
        <Footer3D position={[0, -1.99, 0.8]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>

      {/* Environment */}
      <Environment preset="apartment" />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={isMobile ? 11 : 10} // allow further zoom-out on mobile
      />

    </Canvas>
  );
}
