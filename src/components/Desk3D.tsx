"use client";

import { useState } from "react";
import { a, useSpring } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import ProjectCard3D from "./ProjectCard3D";
import { projects } from "@/lib/projects";

export default function Desk3D(props: GroupProps) {
    const [openDrawer, setOpenDrawer] = useState<number | null>(null);

    // For simplicity assume 3 drawers (left, middle, right)
    const drawers = [0, 1, 2];

    return (
        <group {...props}>
            {/* Desk top (reduced size) */}
            <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
                <boxGeometry args={[3, 0.2, 1.5]} /> {/* smaller desk */}
                <meshStandardMaterial color="#6b4f2d" />
            </mesh>

            {/* Legs */}
            <mesh position={[-1.3, 0.35, -0.6]}>
                <boxGeometry args={[0.1, 0.7, 0.1]} />
                <meshStandardMaterial color="#4a3621" />
            </mesh>
            <mesh position={[1.3, 0.35, -0.6]}>
                <boxGeometry args={[0.1, 0.7, 0.1]} />
                <meshStandardMaterial color="#4a3621" />
            </mesh>
            <mesh position={[-1.3, 0.35, 0.6]}>
                <boxGeometry args={[0.1, 0.7, 0.1]} />
                <meshStandardMaterial color="#4a3621" />
            </mesh>
            <mesh position={[1.3, 0.35, 0.6]}>
                <boxGeometry args={[0.1, 0.7, 0.1]} />
                <meshStandardMaterial color="#4a3621" />
            </mesh>

            {/* Drawers */}
            {drawers.map((d, i) => {
                const isOpen = openDrawer === d;
                const { x } = useSpring({
                    x: isOpen ? 0.8 : 0, // drawer slides out
                    config: { mass: 1, tension: 180, friction: 20 },
                });

                const project = projects[d % projects.length];

                return (
                    <a.group
                        key={i}
                        position={[i - 1, 0.4, 0]} // spread drawers under desk
                        onClick={() => setOpenDrawer(isOpen ? null : d)}
                    >
                        {/* Drawer box */}
                        <a.mesh position-x={x}>
                            <boxGeometry args={[0.8, 0.3, 1.2]} />
                            <meshStandardMaterial color="#5a3c1a" />
                        </a.mesh>

                        {/* Project card inside drawer */}
                        {isOpen && (
                            <a.group position={[0, 0.5, 0]}>
                                <ProjectCard3D
                                    project={project}
                                    position={[0, 0, 0]}
                                    onOpen={(url) => window.open(url, "_blank")}
                                />
                            </a.group>
                        )}
                    </a.group>
                );
            })}
        </group>
    );
}
