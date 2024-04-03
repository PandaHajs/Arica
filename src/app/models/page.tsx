"use client";
import { OrbitControls } from "@react-three/drei";
import styles from "./page.module.scss";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/Addons.js";

export default function Models() {
  const Model = () => {
    const fbx = useLoader(FBXLoader, "/diorama.fbx");
    return (
      <group>
        <primitive scale={2} object={fbx} />
      </group>
    );
  };

  const ModelCanvas = () => {
    return (
      <Canvas>
        <ambientLight intensity={50} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    );
  };

  return (
    <div className={styles.model}>
      <ModelCanvas />
    </div>
  );
}
