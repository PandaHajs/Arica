import Gallery from "./gallery";
import styles from "@/app/ui/styles/gallery.module.scss";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { imagesContext } from "@/app/Art/[tag]/imagesContext";

export default function GallerySection() {
	const [isTab, setIsTab] = useState(0);
	const router = useRouter();
	const id = useSearchParams().get("id");
	const { tag } = useContext(imagesContext);

	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: redundant due to how modal is created */}
			<section
				className={id ? styles.blur : styles.section}
				onClick={() => {
					if (id) {
						router.push(`/Art/${tag}`, { scroll: false });
						setIsTab(0);
					} else {
						return null;
					}
				}}
			>
				<Gallery setIsTab={setIsTab} isTab={isTab} />
			</section>
		</>
	);
}
