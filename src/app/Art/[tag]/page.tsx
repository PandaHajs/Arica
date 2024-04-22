"use client";
import GallerySection from "@/app/ui/artPageComponents/galleryParts/gallerySection";
import Modal from "@/app/ui/artPageComponents/modal/modal";
import type { imageType } from "@/app/lib/types";
import { createContext } from "react";
import { useArt } from "./art.hook";

export const imagesContext = createContext<imageType[]>([]);

export default function Art() {
	const { tag, images } = useArt();

	return (
		<main>
			<imagesContext.Provider value={images}>
				<GallerySection tag={tag.tag} />
				<Modal tag={tag.tag} />
			</imagesContext.Provider>
		</main>
	);
}
