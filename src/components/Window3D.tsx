"use client";

import { useMemo } from "react";
//import * as THREE from "three";

export function Window3D({ position = [0, 2, -4.9] }: {
    position?: [number, number, number];
    rotation?: [number, number, number];
}) {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;

    const skyColor = useMemo(() => (isDay ? "#87CEEB" : "#0b1a34"), [isDay]); // bright blue / dark night
    const lightIntensity = isDay ? 1.2 : 0.3;

    return (
        <group>
            {/* Window frame */}
            <mesh position={position}>
                <boxGeometry args={[4, 3, 0.1]} />
                <meshStandardMaterial color="#5a3e1b" />
            </mesh>

            {/* Glass area */}
            <mesh position={[position[0], position[1], position[2] + 0.05]}>
                <planeGeometry args={[3.6, 2.6]} />
                <meshStandardMaterial color={skyColor} transparent opacity={0.9} />
            </mesh>

            {/* Sunlight / moonlight */}
            <directionalLight
                position={[0, 5, -5]}
                intensity={lightIntensity}
                color={isDay ? "#ffffff" : "#aabbee"}
                castShadow
            />
        </group>
    );
}
