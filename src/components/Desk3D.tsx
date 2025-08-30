"use client";

import { useState } from "react";
import { a, useSpring } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import ProjectCard3D from "./ProjectCard3D";
import { projects } from "@/lib/projects";

export default function Desk3D(props: GroupProps) {
    const [openDrawer, setOpenDrawer] = useState<number | null>(null);

    // 3 drawers (left, middle, right)
    const drawers = [0, 1, 2];

    return (
        <group {...props}>
            {/* Desk top */}
            <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
                <boxGeometry args={[3, 0.2, 1.5]} />
                <meshStandardMaterial color="#6b4f2d" />
            </mesh>

            {/* Legs */}
            {([
                [-1.3, 0.35, -0.6] as [number, number, number],
                [1.3, 0.35, -0.6] as [number, number, number],
                [-1.3, 0.35, 0.6] as [number, number, number],
                [1.3, 0.35, 0.6] as [number, number, number],
            ]).map((pos, i) => (
                <mesh key={i} position={pos}>
                    <boxGeometry args={[0.1, 0.7, 0.1]} />
                    <meshStandardMaterial color="#4a3621" />
                </mesh>
            ))}

            {/* Drawers */}
            {drawers.map((d, i) => {
                const isOpen = openDrawer === d;
                const { z } = useSpring({
                    z: isOpen ? 0.8 : 0, // slide forward on z-axis
                    config: { mass: 1, tension: 180, friction: 20 },
                });

                const project = projects[d % projects.length];

                return (
                    <a.group
                        key={i}
                        position={[i - 1, 0.4, 0]} // spread drawers
                        onClick={() => setOpenDrawer(isOpen ? null : d)}
                    >
                        {/* Drawer box */}
                        <a.mesh position-z={z}>
                            <boxGeometry args={[0.8, 0.3, 1.2]} />
                            <meshStandardMaterial color="#5a3c1a" />
                        </a.mesh>

                        {/* Drawer group */}
                        <a.group
                            key={i}
                            position={[i - 1, 0.4, 0]} // spread drawers
                            onClick={() => setOpenDrawer(isOpen ? null : d)}
                        >


                            {/* Project card - only shows when open */}
                            {isOpen && (
                                <a.group
                                    position-x={0}
                                    position-y={0.5}
                                    position-z={z.to(val => val + 0.6)} // sits just in front of drawer face
                                >
                                    <ProjectCard3D
                                        project={project}
                                        position={[0, 0, 0]}
                                        onOpen={(url) => window.open(url, "_blank")}
                                    />
                                </a.group>
                            )}
                        </a.group>

                    </a.group>
                );
            })}
        </group>
    );
}
