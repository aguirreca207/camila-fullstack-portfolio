"use client";

import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Orb() {
  return (
    <Float speed={1.3} rotationIntensity={0.55} floatIntensity={0.8}>
      <Sphere args={[1.15, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#43B8BA"
          distort={0.28}
          speed={1.4}
          roughness={0.22}
          metalness={0.58}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 2, 4]} intensity={35} color="#EB6E25" />
        <pointLight position={[-3, -2, 2]} intensity={20} color="#43B8BA" />
        <Orb />
      </Canvas>
    </div>
  );
}
