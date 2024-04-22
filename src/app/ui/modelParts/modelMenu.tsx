"use client";
import { useEffect } from "react";
import styles from "../styles/modelMenu.module.scss";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { shimmer, toBase64 } from "@/app/lib/galleryLogic";
import { useState } from "react";
import type { imageType } from "@/app/lib/types";
import Masonry from "react-responsive-masonry";

export default function ModelMenu() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [models, setModels] = useState<imageType[]>([]);

	useEffect(() => {
		const modelID = searchParams.get("modelID");
		if (!modelID || typeof modelID !== "string") {
			router.push("?modelID=1");
		}

		const fetchModels = async () => {
			try {
				const response = await fetch("/3DModels.json");
				if (response) {
					const { models } = await response.json();
					if (models) {
						setModels(models);
					}
				}
			} catch (e) {
				console.log(e);
			}
		};
		fetchModels();
	});
	return (
		<div className={styles.menu}>
			<Masonry columnsCount={2}>
				{models.map((model) => (
					<button
						type="button"
						onClick={() => router.push(`?modelID=${model.id}`)}
						className={styles.button}
						key={model.id}
					>
						<Image
							src={model.src}
							alt={model.alt}
							width={model.width}
							height={model.height}
							style={{
								width: "100%",
								height: "auto",
							}}
							quality={40}
							placeholder={`data:image/svg+xml;base64,${toBase64(
								shimmer(700, 475),
							)}`}
						/>
						<h2>{model.alt}</h2>
					</button>
				))}
			</Masonry>
		</div>
	);
}
