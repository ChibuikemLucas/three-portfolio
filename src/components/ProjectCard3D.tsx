"use client";

import { useRef } from "react";
import { MeshDistortMaterial, Text, Html } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { Project } from "@/lib/projects";

type Props = {
    project: Project;
    position: [number, number, number];
    onOpen: (url: string) => void;
};

export default function ProjectCard3D({ project, position, onOpen }: Props) {
    const mesh = useRef<THREE.Mesh>(null!);

    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onOpen(project.href);
    };

    return (
        <group position={position}>
            <mesh ref={mesh} onClick={handleClick} castShadow receiveShadow>
                <icosahedronGeometry args={[0.8, 1]} />
                <MeshDistortMaterial distort={0.25} speed={2} roughness={0.2} />
            </mesh>

            <Text
                position={[0, 1.4, 0]}
                fontSize={0.28}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.005}
                outlineColor="#000"
            >
                {project.title}
            </Text>

            <Html distanceFactor={10} position={[0, -1.4, 0]}>
                <div className="backdrop-blur bg-white/5 border border-white/10 rounded px-3 py-1 text-xs">
                    {project.tags.slice(0, 3).join(" • ")}
                </div>
            </Html>
        </group>
    );
}
