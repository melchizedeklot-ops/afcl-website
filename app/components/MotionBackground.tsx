"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

/* =========================================================
   STAR FIELD
   ========================================================= */

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 22;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 14;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 8 - 2;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!starsRef.current) return;

    starsRef.current.rotation.y =
      state.clock.elapsedTime * 0.003;

    starsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.01;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </points>
  );
}


/* =========================================================
   GLOBE
   ========================================================= */

function Globe({
  rotationSpeed = 0.055,
}: {
  rotationSpeed?: number;
}) {
  const globeRef = useRef<THREE.Group>(null);

  const texture = useTexture(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
  );

  useFrame((_, delta) => {
    if (!globeRef.current) return;

    globeRef.current.rotation.y +=
      delta * rotationSpeed;
  });

  return (
    <group ref={globeRef}>

      {/* Earth */}
      <mesh>
        <sphereGeometry
          args={[2, 64, 64]}
        />

        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.38}
          roughness={1}
          metalness={0}
        />
      </mesh>


      {/* Atmospheric Glow */}
      <mesh scale={1.04}>
        <sphereGeometry
          args={[2, 64, 64]}
        />

        <meshBasicMaterial
          color="#5eead4"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

    </group>
  );
}


/* =========================================================
   GLOBE CANVAS
   ========================================================= */

function GlobeCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 45,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      dpr={[1, 1.5]}
    >

      <ambientLight intensity={0.7} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.4}
      />

      <Globe />

    </Canvas>
  );
}


/* =========================================================
   MAIN MOTION BACKGROUND
   ========================================================= */

export default function MotionBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >

      {/* =================================================
          STAR FIELD
          ================================================= */}

      <div
        className="
          absolute
          inset-0
        "
      >
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 50,
          }}
          gl={{
            alpha: true,
            antialias: true,
          }}
          dpr={[1, 1.5]}
        >
          <Stars />
        </Canvas>
      </div>


      {/* =================================================
          GLOBE 1 — LANDING PAGE
          ================================================= */}

      <div
        className="
          absolute
          right-[3%]
          top-[8%]
          h-[360px]
          w-[360px]
          opacity-70
        "
      >
        <GlobeCanvas />
      </div>


      {/* =================================================
          GLOBE 2 — LOWER / ENDING
          ================================================= */}

      <div
        className="
          absolute
          bottom-[-5%]
          left-[2%]
          h-[330px]
          w-[330px]
          opacity-65
        "
      >
        <GlobeCanvas />
      </div>

    </div>
  );
}