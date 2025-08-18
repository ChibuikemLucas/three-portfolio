"use client";

import { useRef } from "react";
import { Text, Html, useTexture } from "@react-three/drei";
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

    // Load both a matcap (for frame) and the project cover texture
    const matcap = useTexture("/matcaps/blue.png");
    const coverTexture = useTexture(project.image);

    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onOpen(project.href);
    };

    return (
        <group position={position}>
            {/* Card base */}
            <mesh
                ref={mesh}
                onClick={handleClick}
                castShadow
                receiveShadow
                material={[
                    new THREE.MeshMatcapMaterial({ matcap }), // right
                    new THREE.MeshMatcapMaterial({ matcap }), // left
                    new THREE.MeshMatcapMaterial({ matcap }), // top
                    new THREE.MeshMatcapMaterial({ matcap }), // bottom
                    new THREE.MeshBasicMaterial({ map: coverTexture }), // front (cover)
                    new THREE.MeshMatcapMaterial({ matcap }), // back
                ]}
            >
                <boxGeometry args={[1.8, 1.2, 0.2]} />
            </mesh>

            {/* Project Title (floating above) */}
            <Text
                position={[0, 0.9, 0]}
                fontSize={0.25}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.004}
                outlineColor="#000"
            >
                {project.title}
            </Text>

            {/* Tags (Html overlay) */}
            <Html distanceFactor={10} position={[0, -1.1, 0]}>
                <div className="backdrop-blur bg-white/5 border border-white/10 rounded px-2 py-1 text-xs">
                    {project.tags.slice(0, 3).join(" • ")}
                </div>
            </Html>
        </group>
    );
}
