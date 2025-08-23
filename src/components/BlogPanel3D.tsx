"use client";

import { Text } from "@react-three/drei";

type BlogPanel3DProps = {
    position: [number, number, number];
    title: string;
    url: string;
};

export default function BlogPanel3D({ position, title, url }: BlogPanel3DProps) {
    return (
        <group position={position}>
            {/* Panel background */}
            <mesh>
                <planeGeometry args={[2.5, 1.2]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>

            {/* Blog text */}
            <Text
                position={[0, 0, 0.05]}
                fontSize={0.18}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
            >
                {title}
            </Text>

            {/* Click handler */}
            <mesh
                position={[0, 0, 0.1]}
                onClick={() => window.open(url, "_blank")}
            >
                <planeGeometry args={[2.5, 1.2]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </group>
    );
}
