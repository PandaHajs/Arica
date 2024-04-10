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
				<primitive scale={0.02} object={fbx} />
			</group>
		);
	};

	const ModelCanvas = () => {
		return (
			<Canvas camera={{ position: [0, 5, 5] }}>
				<ambientLight intensity={50} />
				<Suspense fallback={null}>
					<Model />
				</Suspense>
				<OrbitControls />
			</Canvas>
		);
	};

	return (
		<div className={styles.main}>
			<section className={styles.menu}>
				<h1>Models</h1>
				<p>Here are some 3D models</p>
			</section>
			<div className={styles.model}>
				<ModelCanvas />
			</div>
		</div>
	);
}
