"use client";
import GallerySection from "@/app/ui/artPageComponents/galleryParts/gallerySection";
import Modal from "@/app/ui/artPageComponents/modal/modal";
import { imagesContext } from "./imagesContext";
import { useArt } from "./art.hook";

export default function Art() {
	const { tag, images } = useArt();

	return (
		<main>
			<imagesContext.Provider value={{ images, tag: tag.tag }}>
				<GallerySection />
				<Modal />
			</imagesContext.Provider>
		</main>
	);
}
