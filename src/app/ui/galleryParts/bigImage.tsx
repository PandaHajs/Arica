import Image from "next/image";
import styles from "../styles/bigImage.module.scss";
import type { bigImageProps, imageType } from "../../lib/types";
import { useRouter } from "next/navigation";
import {
	handleImageChange,
	handleKeyDown,
	checkKey,
} from "../../lib/galleryLogic";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BigImage(props: bigImageProps) {
	const router = useRouter();
	const [image, setImage] = useState<undefined | null | imageType>(null);
	const bigImage = useRef<HTMLDivElement>(null);
	const [isNext, setIsNext] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (props.id) {
			setImage(props.images.find((image) => image.id === props.id));
		} else if (!props.id) {
			setImage(null);
		}
	}, [props.id, props.images]);

	return (
		<>
			<AnimatePresence>
				{image && (
					<motion.div
						initial={false}
						animate={{ opacity: 1 }}
						exit={{
							opacity: 0,
						}}
						className={styles.bigImage}
						ref={bigImage}
						onKeyDown={(event) => {
							if (checkKey(event)) {
								if (props.id && isLoaded) {
									setIsLoaded(false);
									setIsNext(
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
										) || false,
									);
								} else {
									return null;
								}
							} else {
								event.preventDefault();
							}
						}}
						tabIndex={0}
						role="button"
					>
						<AnimatePresence mode="wait">
							<motion.div
								initial={{
									translateX: isNext ? "-100%" : "50%",
									opacity: 0,
								}}
								animate={{ translateX: 0, opacity: 1, translateY: 0 }}
								exit={{
									translateX: isNext ? "50%" : "-100%",
									opacity: 0,
									transition: { duration: 0.6 },
								}}
								key={image.id}
							>
								<button
									className={styles.button}
									type="button"
									onKeyDown={(event) => {
										if (event.key === "Enter")
											router.push(`/Art/${props.tag}`, { scroll: false });
									}}
								>
									<Image
										src="/x.svg"
										width={50}
										height={50}
										alt="close button"
										onClick={() =>
											router.push(`/Art/${props.tag}`, { scroll: false })
										}
									/>
								</button>
								<button
									type="button"
									className={styles.left}
									onClick={() => {
										if (props.id && isLoaded) {
											setIsLoaded(false);
											handleImageChange({
												id: props.id,
												nextPhoto: false,
												length: props.images.length,
												router: router,
												bigImage: bigImage,
												styles: styles,
											});
											setIsNext(false);
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
										if (props.id && isLoaded) {
											setIsLoaded(false);
											handleImageChange({
												id: props.id,
												nextPhoto: true,
												length: props.images.length,
												router: router,
												bigImage: bigImage,
												styles: styles,
											});
											setIsNext(true);
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
										onLoad={() => {
											(bigImage.current as HTMLDivElement | null)?.focus();
											setIsLoaded(true);
										}}
									/>
								)}
							</motion.div>
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
