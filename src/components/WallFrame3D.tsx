"use client";

import { Text } from "@react-three/drei";
import * as THREE from "three";

type WallFrame3DProps = {
    position: [number, number, number];
    imageUrl?: string;
    text?: string;
};

export default function WallFrame3D({ position, imageUrl, text }: WallFrame3DProps) {
    return (
        <group position={position}>
            {/* Frame */}
            <mesh>
                <boxGeometry args={[3.2, 2.2, 0.1]} />
                <meshStandardMaterial color="#5a3e1b" />
            </mesh>

            {/* Inner content */}
            <mesh position={[0, 0, 0.06]}>
                <planeGeometry args={[3, 2]} />
                {imageUrl ? (
                    <meshStandardMaterial map={new THREE.TextureLoader().load(imageUrl)} />
                ) : (
                    <meshStandardMaterial color="#ffffff" />
                )}
            </mesh>

            {/* Text option */}
            {text && (
                <Text
                    position={[0, 0, 0.1]}
                    fontSize={0.2}
                    maxWidth={2.8}
                    color="#222"
                    anchorX="center"
                    anchorY="middle"
                >
                    {text}
                </Text>
            )}
        </group>
    );
}
