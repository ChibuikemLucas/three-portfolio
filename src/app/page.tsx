
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import HeroTitle3D from "@/components/HeroTitle3D";
import SocialPanel3D from "@/components/SocialPanel3D";
import TechChip3D from "@/components/TechChip3D";
import BlogPanel3D from "@/components/BlogPanel3D";
import Footer3D from "@/components/Footer3D";

export default function HomePage() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        {/* Space background */}
        <color attach="background" args={["#050508"]} />
        <Stars radius={80} depth={40} count={800} factor={3} fade />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Controls */}
        <OrbitControls enableZoom={false} />

        {/* Hero Title (center top) */}
        <HeroTitle3D position={[0, 2, 0]} />

        {/* Social Links (spaced below hero) */}
        <SocialPanel3D
          label="GitHub"
          url="https://github.com/ChibuikemLucas"
          position={[-3, 0, 0]}
        />
        <SocialPanel3D
          label="LinkedIn"
          url="https://linkedin.com/in/chibuikem"
          position={[0, 0, 0]}
        />
        <SocialPanel3D
          label="Resume"
          url="/resume.pdf"
          position={[3, 0, 0]}
        />

        {/* Tech Stack (orbiting chips around hero, slightly deeper in z) */}
        <TechChip3D label="Next.js" radius={5} speed={0.3} index={0} />
        <TechChip3D label="Tailwind" radius={5} speed={0.3} index={1} />
        <TechChip3D label="TypeScript" radius={5} speed={0.3} index={2} />
        <TechChip3D label="Three.js" radius={5} speed={0.3} index={3} />

        {/* Blog (further down the scene) */}
        <BlogPanel3D position={[0, -3.5, 0]} />

        {/* Footer (bottom, pushed back slightly) */}
        <Footer3D position={[0, -5, -1]} />
      </Canvas>
    </>
  );
}
