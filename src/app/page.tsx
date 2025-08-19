"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import HeroTitle3D from "@/components/HeroTitle3D";
import SocialPanel3D from "@/components/SocialPanel3D";
import TechChip3D from "@/components/TechChip3D";
import BlogPanel3D from "@/components/BlogPanel3D";
import Footer3D from "@/components/Footer3D";

export default function HomePage() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Controls (optional for rotation/zoom) */}
        <OrbitControls enableZoom={false} />

        {/* Hero Title */}
        <HeroTitle3D />

        {/* Social Links */}
        <SocialPanel3D
          label="GitHub"
          url="https://github.com/ChibuikemLucas"
          position={[-3, -1, 0]}
        />
        <SocialPanel3D
          label="LinkedIn"
          url="https://linkedin.com/in/chibuikem"
          position={[0, -1, 0]}
        />
        <SocialPanel3D
          label="Resume"
          url="/resume.pdf"
          position={[3, -1, 0]}
        />

        {/* Tech Stack (orbiting chips) */}
        <TechChip3D label="Next.js" radius={4} speed={0.3} index={0} />
        <TechChip3D label="Tailwind" radius={4} speed={0.3} index={1} />
        <TechChip3D label="TypeScript" radius={4} speed={0.3} index={2} />
        <TechChip3D label="Three.js" radius={4} speed={0.3} index={3} />

        {/* Blog / Updates */}
        <BlogPanel3D />

        {/* Footer */}
        <Footer3D />
      </Canvas>
    </>
  );
}
