"use client";
import GallerySection from "@/app/ui/artPageComponents/galleryParts/gallerySection";
import Modal from "@/app/ui/artPageComponents/modal/modal";
import { imagesContext } from "./imagesContext";
import { useArt } from "./art.hook";

function Art() {
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

export default Art;
