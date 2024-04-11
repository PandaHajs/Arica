"use client";
import styles from "./page.module.scss";
import Gallery from "@/app/ui/gallery";
import { useState, useEffect } from "react";
import BigImage from "@/app/ui/bigImage";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import type { imageType } from "@/app/lib/types";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home() {
	const [images, setImages] = useState<imageType[]>([]);
	const router: AppRouterInstance = useRouter();
	const id = useSearchParams().get("id");
	const tag = useParams<{ tag: string }>();

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(`/${tag.tag}.json`);
				if (response) {
					const { photos } = await response.json();
					if (photos) {
						setImages(photos);
					}
				}
			} catch (e) {
				console.log(e);
			}
		};

		fetchImages();
	}, [tag.tag]);

	return (
		<main>
			<section
				className={id ? styles.blur : styles.main}
				onClick={() =>
					id ? router.push(`/Art/${tag.tag}`, { scroll: false }) : null
				}
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						id ? router.push(`/Art/${tag.tag}`, { scroll: false }) : null;
					}
				}}
			>
				<h1>Welcome to Arica&apos;s portfolio</h1>
				<Gallery images={images} tag={tag.tag} />
			</section>

			<BigImage images={images} id={id} tag={tag.tag} />
		</main>
	);
}
