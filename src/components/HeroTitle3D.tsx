"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Float,
    Text,
    Stars,
    OrbitControls,
    Environment,
} from "@react-three/drei";
import * as THREE from "three";
import ProjectCard3D from "./ProjectCard3D";
import { projects } from "@/lib/projects"; // <-- make sure this path matches your setup

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

            {/* Subtle accents 
            <mesh position={[-1.8, -1.1, 0]}>
                <torusGeometry args={[0.22, 0.06, 16, 64]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} />
            </mesh>
            <mesh position={[2, 0.9, -0.3]} rotation={[0.6, 0.2, 0.8]}>
                <icosahedronGeometry args={[0.22, 1]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} />
            </mesh>*/}
        </group>
    );
}

function Scene() {
    return (
        <>
            {/* background/stars */}
            <color attach="background" args={["#050508"]} />
            <Stars radius={80} depth={40} count={800} factor={3} fade />

            {/* lights */}
            <hemisphereLight intensity={0.5} />
            <directionalLight
                position={[3, 4, 2]}
                intensity={1.4}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Floating name */}
            <FloatingName />

            {/* Project cards spread out horizontally */}
            {projects.map((p, i) => (
                <ProjectCard3D
                    key={p.id}
                    project={p}
                    position={[i * 3 - projects.length, -2, 0]} // lower Y so they're below your name
                    onOpen={(url) => window.open(url, "_blank")}
                />
            ))}

            {/* nice IBL */}
            <Environment preset="city" />
            {/* lock panning, keep a little orbit for fun */}
            <OrbitControls enablePan={false} minDistance={3.5} maxDistance={8} />
        </>
    );
}

type HeroTitle3DProps = {
    position?: [number, number, number];
};

export default function HeroTitle3D({ position = [0, 0, 0] }: HeroTitle3DProps) {
    return <group position={position}><Scene /></group>;
}

