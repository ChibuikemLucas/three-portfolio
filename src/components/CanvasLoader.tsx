"use client";

import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="text-sm tracking-wide">
                Loading {progress.toFixed(0)}%
            </div>
        </Html>
    );
}
