import Image from "next/image";
import styles from "../../styles/modal.module.scss";
import type { gallerySectionProps, imageType } from "../../../lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { handleKeyDown, checkKey } from "../../../lib/galleryLogic";
import { useRef, useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { imagesContext } from "@/app/Art/[tag]/page";
import ModalCloseButton from "./modalCloseButton";
import ModalButton from "./modalButton";

export default function Modal(props: gallerySectionProps) {
	const router = useRouter();
	const [image, setImage] = useState<undefined | null | imageType>(null);
	const modal = useRef<HTMLDivElement>(null);
	const [isNext, setIsNext] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const id = useSearchParams().get("id");
	const images = useContext(imagesContext);
	const modalPreviousButtonProps = {
		id: id,
		isLoaded: isLoaded,
		setIsLoaded: setIsLoaded,
		setIsNext: setIsNext,
		isNext: isNext,
		router: router,
		modal: modal,
		style: styles.left,
		tag: props.tag,
		images: images,
		nextPhoto: false,
		styles: styles,
	};

	const modalNextButtonProps = {
		...modalPreviousButtonProps,
		nextPhoto: true,
		style: styles.right,
	};

	useEffect(() => {
		if (id) {
			setImage(images.find((image) => image.id === id));
		} else if (!id) {
			setImage(null);
		}
	}, [id, images]);

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
						className={styles.modal}
						ref={modal}
						onKeyDown={(event) => {
							if (checkKey(event)) {
								if (id && isLoaded) {
									setIsLoaded(false);
									setIsNext(
										handleKeyDown(
											event,
											{
												id: id,
												length: images.length,
												router: router,
												modal: modal,
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
								<ModalCloseButton
									tag={props.tag}
									router={router}
									styles={styles}
								/>
								<ModalButton {...modalPreviousButtonProps} />
								<ModalButton {...modalNextButtonProps} />
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
											(modal.current as HTMLDivElement | null)?.focus();
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
