"use client";

import { Text } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
    label: string;
    url: string;
    position: [number, number, number];
};

export default function SocialPanel3D({ label, url, position }: Props) {
    const ref = useRef<THREE.Group>(null!);
    const [hovered, setHovered] = useState(false);

    const baseY = position[1]; // remember original Y so bobbing works

    useFrame(({ clock }) => {
        if (!ref.current) return;

        // Scale on hover
        ref.current.scale.lerp(
            new THREE.Vector3(
                hovered ? 1.2 : 1,
                hovered ? 1.2 : 1,
                hovered ? 1.2 : 1
            ),
            0.1
        );

        // Subtle floating (bobbing) animation
        ref.current.position.y = baseY + Math.sin(clock.elapsedTime * 2) * 0.05;

        // Slight tilt on hover
        ref.current.rotation.x = THREE.MathUtils.lerp(
            ref.current.rotation.x,
            hovered ? 0.15 : 0,
            0.1
        );
        ref.current.rotation.y = THREE.MathUtils.lerp(
            ref.current.rotation.y,
            hovered ? -0.15 : 0,
            0.1
        );
    });

    return (
        <group
            ref={ref}
            position={position}
            onClick={() => window.open(url, "_blank")}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1.5, 0.5, 0.1]} />
                <meshStandardMaterial
                    color="#1e293b"
                    transparent
                    opacity={0.6}
                    metalness={0.5}
                    roughness={0.2}
                    emissive="#3b82f6"
                    emissiveIntensity={hovered ? 1 : 0.4}
                />
            </mesh>

            <Text
                fontSize={0.2}
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.1]}
            >
                {label}
            </Text>
        </group>
    );
}
