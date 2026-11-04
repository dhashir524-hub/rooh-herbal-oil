
"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import { SRGBColorSpace } from "three";

function RealBottle() {
  const texture = useTexture("/rooh-bottle.jpg.jpg");
  texture.colorSpace = SRGBColorSpace;

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.12}
      floatIntensity={0.2}
    >
      <mesh>
        <planeGeometry args={[1.5, 3.77]} />
        <meshBasicMaterial
          map={texture}
          transparent={false}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

export default function ProductScene() {
  return (
    <div className="w-full h-[430px] md:h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={2}
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={1.2}
          color="#d8b75a"
        />

        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.15, 0.15]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Suspense fallback={null}>
            <RealBottle />
          </Suspense>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.9, 0]}
          opacity={0.25}
          scale={3}
          blur={2}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
