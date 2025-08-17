"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import ProjectCard3D from "./ProjectCard3D";
import CanvasLoader from "./CanvasLoader";
import { projects } from "@/lib/projects";

function Scene() {
    const positions = useMemo(() => {
        const radius = 5;
        const step = (2 * Math.PI) / projects.length;
        return projects.map((_, i) => {
            const angle = i * step;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return [x, 0, z] as [number, number, number];
        });
    }, []);

    const open = (url: string) => window.open(url, "_blank");

    return (
        <>
            <color attach="background" args={["#050505"]} />

            <hemisphereLight intensity={0.4} />
            <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

            {projects.map((p, i) => (
                <ProjectCard3D key={p.id} project={p} position={positions[i]} onOpen={open} />
            ))}

            <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={20} blur={2.5} />

            <Environment preset="city" />
            <OrbitControls enablePan={false} minDistance={6} maxDistance={12} />
        </>
    );
}

export default function ProjectWorld() {
    return (
        <div className="h-[70vh] w-full">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 4, 10], fov: 45 }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
