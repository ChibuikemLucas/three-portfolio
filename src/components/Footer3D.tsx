"use client";

import { Text } from "@react-three/drei";

export default function Footer3D() {
    return (
        <Text
            position={[0, -5, 0]}
            fontSize={0.25}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
        >
            © 2025 Chibuikem — Built with Next.js, Tailwind, Three.js
        </Text>
    );
}
