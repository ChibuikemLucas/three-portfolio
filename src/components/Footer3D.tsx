"use client";

import { Text } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

type Footer3DProps = MeshProps & {
    text?: string;
};

export default function Footer3D({
    position = [0, -5, 0],
    rotation,
    text = "© 2025 Chibuikem — Built with Next.js, Tailwind, Three.js",
    ...props
}: Footer3DProps) {
    return (
        <Text
            position={position}
            rotation={rotation}
            fontSize={0.25}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
            {...props}
        >
            {text}
        </Text>
    );
}
