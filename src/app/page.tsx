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
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust room width dynamically (narrower on mobile)
  const roomWidth = isMobile ? 12 : 20;

  return (
    <Canvas
      camera={{
        position: isMobile ? [0, 2, 11] : [0, 2, 8], // pull back more on mobile
        fov: isMobile ? 55 : 45,
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
      {/* Tech stack wallpaper */}
      <WallFrame3D
        position={isMobile ? [-roomWidth / 2 + 1.5, 1, -4.9] : [-7, 1, -4.9]}
        text={`Tech Stack\n- Next.js\n- TypeScript\n- Tailwind\n- Three.js\n- Redux\n- Node.js\n- Express\n- MongoDB`}
      />

      {/* Profile picture wallpaper  */}
      <WallFrame3D
        position={isMobile ? [roomWidth / 2 - 1.5, 1, -4.9] : [7, 1, -4.9]}
        imageUrl="/me.jpg"
      />

      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[roomWidth, 20]} />
        <meshStandardMaterial color="#d9c9b6" roughness={0.8} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} position={[0, 4, 0]} receiveShadow>
        <planeGeometry args={[roomWidth, 20]} />
        <meshStandardMaterial color="#d9c9b6" roughness={0.8} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -5]} receiveShadow>
        <planeGeometry args={[roomWidth, 10]} />
        <meshStandardMaterial color="#f5f0e6" />
      </mesh>


      {/* Left wall */}
      <mesh rotation-y={Math.PI / 2} position={[-roomWidth / 2, 3, 0]} receiveShadow>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#f5f0e6" />
      </mesh>

      {/* ✅ Right wall */}
      <mesh rotation-y={-Math.PI / 2} position={[roomWidth / 2, 3, 0]} receiveShadow>
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
      <SocialPanel3D
        label="GitHub"
        url="https://github.com/ChibuikemLucas"
        position={isMobile ? [-1.2, -0.3, 1] : [-2, -0.3, 1]}
      />
      <SocialPanel3D
        label="LinkedIn"
        url="https://linkedin.com/in/chibuikem"
        position={[0, -0.3, 1]}
      />
      <SocialPanel3D
        label="Resume"
        url="/resume.docx"
        position={isMobile ? [1.2, -0.3, 1] : [2, -0.3, 1]}
      />

      {/* Blog panel */}
      <BlogPanel3D
        position={isMobile ? [2, -1.5, 0] : [2.7, -1.5, 0]}
        title="The Developer Experience Blog"
        url="https://the-developer-experience.hashnode.dev"
      />

      {/* Footer */}
      <Footer3D position={[0, -1.99, 0.8]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* Environment */}
      <Environment preset="apartment" />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={isMobile ? 12 : 10}
      />
    </Canvas>
  );
}
