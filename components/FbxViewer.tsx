"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Model({ path }: { path: string }) {
  const group = useRef<THREE.Group>(null);
  const fbx = useLoader(FBXLoader, path);

  const model = useMemo(() => {
    const cloned = fbx.clone();

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    return cloned;
  }, [fbx]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group} scale={0.01}>
      <Center>
        <primitive object={model} />
      </Center>
    </group>
  );
}

export default function FbxViewer({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  return (
    <div
      className={`h-[420px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 shadow-inner ${className}`}
    >
      <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[4, 6, 4]}
            intensity={2}
            castShadow
          />
          <spotLight position={[-4, 8, 4]} intensity={1.2} />

          <Model path={path} />

          <Environment preset="city" />
          <OrbitControls
            enablePan={false}
            minDistance={2.5}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}