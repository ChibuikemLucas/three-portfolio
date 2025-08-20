"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function BlogPanel3D() {
    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y = Math.sin(t * 0.2) * 0.1; // gentle oscillation
    });

    return (
        <group ref={ref} position={[0, -3, 0]}>
            <mesh>
                <planeGeometry args={[4, 2]} />
                <meshStandardMaterial
                    color="#1e40af"
                    transparent
                    opacity={0.5}
                    emissive="#3b82f6"
                />
            </mesh>
            <Text position={[0, 0, 0.1]} fontSize={0.25} anchorX="center">
                Blog / Updates Coming Soon...
            </Text>
        </group>
    );
}
