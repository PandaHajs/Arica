"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import styles from "../styles/model.module.scss";

export default function Model() {
	const Model3D = () => {
		const fbx = useLoader(FBXLoader, "/wozek.fbx");
		return (
			<group>
				<primitive scale={0.02} object={fbx} />
			</group>
		);
	};

	const ModelCanvas = () => {
		return (
			<Canvas camera={{ position: [0, 5, 5] }}>
				<ambientLight intensity={50} />
				<Suspense fallback={null}>
					<Model3D />
				</Suspense>
				<CameraControls />
			</Canvas>
		);
	};

	return (
		<div className={styles.model}>
			<ModelCanvas />
		</div>
	);
}
