"use client";

import { Html, Text } from "@react-three/drei";
import * as THREE from "three";

type Props = {
    label: string;
    url: string;
    position: [number, number, number];
};

export default function SocialPanel3D({ label, url, position }: Props) {
    return (
        <group position={position}>
            {/* Panel */}
            <mesh
                onClick={() => window.open(url, "_blank")}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[1.5, 0.5, 0.1]} />
                <meshStandardMaterial
                    color="#1e293b"
                    transparent
                    opacity={0.6}
                    metalness={0.5}
                    roughness={0.2}
                    emissive="#3b82f6"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Label */}
            <Text fontSize={0.2} anchorX="center" anchorY="middle" position={[0, 0, 0.1]}>
                {label}
            </Text>
        </group>
    );
}
