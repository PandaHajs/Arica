import Image from "next/image";
import styles from "./styles/bigImage.module.scss";
import type { bigImageProps } from "../lib/types";
import { useRouter } from "next/navigation";
import { changeImageHandler, keyDownHandler } from "../lib/galleryLogic";

export default function BigImage(props: bigImageProps) {
	const router = useRouter();
	const image = props.images.find((image) => image.id === props.id);

	return (
		<div
			className={image ? styles.bigImage : styles.hidden}
			onKeyDown={(event) => {
				props.id
					? keyDownHandler(event, {
							id: props.id,
							length: props.images.length,
							nextPhoto: false,
							router: router,
						})
					: null;
			}}
		>
			<div className={styles.button}>
				<Image
					src="/x.svg"
					width={50}
					height={50}
					alt="close button"
					onClick={() => router.push(`/Art/${props.tag}`, { scroll: false })}
				/>
			</div>
			<div
				className={styles.left}
				onClick={() =>
					props.id
						? changeImageHandler({
								id: props.id,
								length: props.images.length,
								nextPhoto: false,
								router: router,
							})
						: null
				}
			>
				<Image
					src="/chevron-left.svg"
					width={50}
					height={50}
					alt="previous photo"
				/>
			</div>
			<div
				className={styles.right}
				onClick={() =>
					props.id
						? changeImageHandler({
								id: props.id,
								length: props.images.length,
								nextPhoto: true,
								router: router,
							})
						: null
				}
			>
				<Image
					src="/chevron-right.svg"
					width={50}
					height={50}
					alt="next photo"
				/>
			</div>
			{image ? (
				<Image
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
					style={{
						width: "100%",
						height: "auto",
					}}
					quality={40}
					priority={true}
				/>
			) : null}
		</div>
	);
}
