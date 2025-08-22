"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import HeroTitle3D from "@/components/HeroTitle3D";
import SocialPanel3D from "@/components/SocialPanel3D";
import BlogPanel3D from "@/components/BlogPanel3D";
import Footer3D from "@/components/Footer3D";
import Laptop3D from "@/components/Laptop3D";
import Desk3D from "@/components/Desk3D";

export default function HomePage() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 45 }}
      shadows
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      {/* Background lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />

      {/* 🏠 Room */}
      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} receiveShadow>
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

      {/* Desk with drawers */}
      <Desk3D position={[0, -1.5, 0]} />

      {/* Laptop on desk */}
      <Laptop3D position={[0, -0.5, 0]} />

      {/* Hero Title above laptop */}
      <HeroTitle3D position={[0, 1.5, 0]} />

      {/* Social panels in front of laptop */}
      <SocialPanel3D
        label="GitHub"
        url="https://github.com/ChibuikemLucas"
        position={[-2, -0.3, 1]}
      />
      <SocialPanel3D
        label="LinkedIn"
        url="https://linkedin.com/in/chibuikem"
        position={[0, -0.3, 1]}
      />
      <SocialPanel3D
        label="Resume"
        url="/resume.pdf"
        position={[2, -0.3, 1]}
      />

      {/* Blog panel beside desk */}
      <BlogPanel3D position={[3.5, -1.5, 0]} />

      {/* Footer engraved into desk */}
      <Footer3D position={[0, -1.8, 0.8]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* Environment */}
      <Environment preset="apartment" />

      {/* Camera controls */}
      <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
    </Canvas>
  );
}
