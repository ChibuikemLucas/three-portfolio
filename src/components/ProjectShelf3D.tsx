"use client";

import { useState } from "react";
import { useSpring, a } from "@react-spring/three";
import ProjectCard3D from "./ProjectCard3D";
import { projects } from "@/lib/projects";

type Props = {
    position: [number, number, number];
    shelfIndex: number;
};

export default function ProjectShelf3D({ position, shelfIndex }: Props) {
    const [open, setOpen] = useState(false);

    // Animate the whole vector, explicitly typed
    const { pos } = useSpring<{ pos: [number, number, number] }>({
        pos: open ? [0, 0.6, 1.5] : [0, 0.6, 0],
        config: { mass: 1, tension: 170, friction: 20 },
    });

    const project = projects[shelfIndex % projects.length];

    return (
        <group position={position} onClick={() => setOpen(!open)}>
            {/* Shelf frame */}
            <mesh>
                <boxGeometry args={[3, 0.2, 1]} />
                <meshStandardMaterial color="#6b4f2d" />
            </mesh>

            {/* Project card slides out */}
            <a.group position={pos}>
                <ProjectCard3D
                    project={project}
                    position={[0, 0, 0]}
                    onOpen={(url) => window.open(url, "_blank")}
                />
            </a.group>
        </group>
    );
}
