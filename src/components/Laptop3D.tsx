"use client";

import { GroupProps } from "@react-three/fiber";

export default function Laptop3D(props: GroupProps) {
    return (
        <group {...props}>
            {/* Base */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[2, 0.1, 1.5]} />
                <meshStandardMaterial color="#333" metalness={0.6} roughness={0.3} />
            </mesh>

            {/* Screen */}
            <mesh position={[0, 0.9, -0.75]} rotation-x={-0.2}>
                <boxGeometry args={[2, 1.2, 0.1]} />
                <meshStandardMaterial color="#111" emissive="#3b82f6" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}
