import styles from "@/app/ui/styles/gallery.module.scss";
import Image from "next/image";
import type { galleryProps } from "@/app/lib/types";
import { shimmer, toBase64 } from "@/app/lib/galleryLogic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";

export default function Gallery(props: galleryProps) {
	const images = props.images;
	const router = useRouter();
	const [check, setCheck] = useState(0);
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	useEffect(() => {
		if (id) {
			setCheck(-1);
		} else {
			setCheck(0);
		}
	}, [id]);

	return (
		<section className={styles.gallery}>
			<Masonry columnsCount={3} gutter="1em">
				{images.map((image) => (
					<div
						role="button"
						tabIndex={check}
						onClick={() => {
							router.push(`?id=${image.id}`, { scroll: false });
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter")
								router.push(`?id=${image.id}`, { scroll: false });
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
