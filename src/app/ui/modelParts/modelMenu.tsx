"use client";
import styles from "../styles/modelMenu.module.scss";
import Image from "next/image";
import { shimmer, toBase64 } from "@/app/lib/galleryLogic";
import Masonry from "react-responsive-masonry";
import { useModelMenu } from "./modelMenu.hook";

export default function ModelMenu() {
	const { models, router } = useModelMenu();

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
