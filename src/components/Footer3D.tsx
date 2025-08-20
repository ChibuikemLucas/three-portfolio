"use client";

import { Text } from "@react-three/drei";

type Footer3DProps = {
    position?: [number, number, number];
};

export default function Footer3D({ position = [0, -5, 0] }: Footer3DProps) {
    return (
        <Text
            position={position}
            fontSize={0.25}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
        >
            © 2025 Chibuikem — Built with Next.js, Tailwind, Three.js
        </Text>
    );
}
