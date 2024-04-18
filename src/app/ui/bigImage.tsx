import Image from "next/image";
import styles from "./styles/bigImage.module.scss";
import type { bigImageProps, imageType } from "../lib/types";
import { useRouter } from "next/navigation";
import { handleImageChange, handleKeyDown } from "../lib/galleryLogic";
import { useRef, useState, useEffect } from "react";

export default function BigImage(props: bigImageProps) {
	const router = useRouter();
	const [image, setImage] = useState<undefined | null | imageType>(null);
	const bigImage = useRef<HTMLDivElement>(null);
	const [isAnimation, setIsAnimation] = useState(false);
	const canGo = useRef(true);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (props.id && !isAnimation) {
			setImage(props.images.find((image) => image.id === props.id));
			if (isLoaded)
				(bigImage.current as HTMLDivElement | null)?.classList.remove(
					styles.animationRight,
					styles.animationLeft,
				);
			//console.log("removed", bigImage.current?.classList);
		} else if (!props.id) {
			setImage(null);
			setIsAnimation(false);
		}
	}, [props.id, props.images, isAnimation, isLoaded]);

	return (
		<div
			onLoad={() => {
				(bigImage.current as HTMLDivElement | null)?.focus();
				setIsLoaded(true);
			}}
			onAnimationStart={() => {
				//console.log("animation started");
			}}
			onAnimationEnd={() => {
				setIsAnimation(false);
				//console.log("animation ended");
			}}
			ref={bigImage}
			className={image ? styles.bigImage : styles.hidden}
			onKeyDown={(event) => {
				//event.preventDefault();
				if (props.id && !isAnimation && canGo.current && isLoaded) {
					setIsAnimation(true);
					setIsLoaded(false);
					canGo.current = false;
					handleKeyDown(
						event,
						{
							id: props.id,
							length: props.images.length,
							router: router,
							bigImage: bigImage,
							styles: styles,
						},
						props.tag,
					);
					setTimeout(() => {
						canGo.current = true;
					}, 1000);
					// seems to have fixed it but it's a bit of a hack
					// if you're reading this pls tell me of a better solution
					// the code seems even worse but it appears to work fully now :)
				} else {
					return null;
				}
			}}
			tabIndex={0}
			role="button"
		>
			<button className={styles.button} type="button">
				<Image
					src="/x.svg"
					width={50}
					height={50}
					alt="close button"
					onClick={() => router.push(`/Art/${props.tag}`, { scroll: false })}
				/>
			</button>
			<button
				type="button"
				className={styles.left}
				onClick={() => {
					if (props.id) {
						handleImageChange({
							id: props.id,
							nextPhoto: false,
							length: props.images.length,
							router: router,
							bigImage: bigImage,
							styles: styles,
						});
						setIsAnimation(true);
					} else {
						return null;
					}
				}}
			>
				<Image
					src="/chevron-left.svg"
					width={50}
					height={50}
					alt="previous photo"
				/>
			</button>
			<button
				type="button"
				className={styles.right}
				onClick={() => {
					if (props.id) {
						handleImageChange({
							id: props.id,
							nextPhoto: true,
							length: props.images.length,
							router: router,
							bigImage: bigImage,
							styles: styles,
						});
						setIsAnimation(true);
					} else {
						return null;
					}
				}}
			>
				<Image
					src="/chevron-right.svg"
					width={50}
					height={50}
					alt="next photo"
				/>
			</button>
			{image && (
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
			)}
		</div>
	);
}
