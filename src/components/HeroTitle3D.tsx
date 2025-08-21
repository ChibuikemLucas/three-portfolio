"use client";

import { useRef } from "react";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingName() {
    const group = useRef<THREE.Group>(null);

    return (
        <group ref={group}>
            {/* Your name */}
            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.7}>
                <Text
                    position={[0, 0.4, 0]}
                    fontSize={0.8}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.01}
                    outlineColor="#000"
                >
                    CHIBUIKEM LUCAS
                    <meshStandardMaterial metalness={0.2} roughness={0.25} />
                </Text>

                {/* Title */}
                <Text
                    position={[0, -0.6, 0]}
                    fontSize={0.28}
                    anchorX="center"
                    anchorY="middle"
                    color="#cfcfcf"
                >
                    Frontend Developer
                    <meshStandardMaterial metalness={0.15} roughness={0.6} />
                </Text>
            </Float>
        </group>
    );
}

type HeroTitle3DProps = {
    position?: [number, number, number];
};

export default function HeroTitle3D({ position = [0, 0, 0] }: HeroTitle3DProps) {
    return (
        <group position={position}>
            <FloatingName />
        </group>
    );
}
