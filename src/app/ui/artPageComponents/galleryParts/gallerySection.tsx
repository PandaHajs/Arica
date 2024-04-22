import Gallery from "./gallery";
import styles from "@/app/ui/styles/gallery.module.scss";
import type { gallerySectionProps } from "@/app/lib/types";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GallerySection(props: gallerySectionProps) {
	const [isTab, setIsTab] = useState(0);
	const router = useRouter();
	const id = useSearchParams().get("id");

	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: redundant due to how modal is created */}
			<section
				className={id ? styles.blur : styles.section}
				onClick={() => {
					if (id) {
						router.push(`/Art/${props.tag}`, { scroll: false });
						setIsTab(0);
					} else {
						return null;
					}
				}}
			>
				<Gallery tag={props.tag} setIsTab={setIsTab} isTab={isTab} />
			</section>
		</>
	);
}
