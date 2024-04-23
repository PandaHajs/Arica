import styles from "@/app/ui/styles/gallery.module.scss";
import Image from "next/image";
import type { galleryProps } from "@/app/lib/types";
import { shimmer, toBase64 } from "@/app/lib/galleryLogic";
import { useRouter } from "next/navigation";
import Masonry from "react-responsive-masonry";
import { useContext } from "react";
import { imagesContext } from "@/app/Art/[tag]/imagesContext";
export default function Gallery(props: galleryProps) {
	const router = useRouter();
	const { images } = useContext(imagesContext);

	return (
		<section className={styles.gallery}>
			<Masonry columnsCount={3} gutter="1em">
				{images.map((image) => (
					<div
						role="button"
						tabIndex={props.isTab}
						onClick={() => {
							router.push(`?id=${image.id}`, { scroll: false });
							props.setIsTab(-1);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter")
								router.push(`?id=${image.id}`, { scroll: false });
							props.setIsTab(-1);
						}}
						key={image.id}
						className={styles.galleryImage}
					>
						<Image
							priority={Number.parseInt(image.id) <= 3}
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							style={{
								width: "100%",
								height: "auto",
							}}
							quality={40}
							placeholder={`data:image/svg+xml;base64,${toBase64(
								shimmer(700, 475),
							)}`}
						/>
					</div>
				))}
			</Masonry>
		</section>
	);
}
