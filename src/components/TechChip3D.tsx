"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
    label: string;
    radius: number;
    speed: number;
    index: number;
};

export default function TechChip3D({ label, radius, speed, index }: Props) {
    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + index;
        const x = Math.cos(t) * radius;
        const z = Math.sin(t) * radius;
        ref.current.position.set(x, 0, z);
    });

    return (
        <group ref={ref}>
            <mesh>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial color="#14b8a6" emissive="#0f766e" />
            </mesh>
            <Text position={[0, 0.5, 0]} fontSize={0.2} anchorX="center">
                {label}
            </Text>
        </group>
    );
}
