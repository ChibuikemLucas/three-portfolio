"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/HeroTitle3D";

export default function ThreeBackground() {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 6], fov: 45 }}
            style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}
        >
            <Scene />
        </Canvas>
    );
}
