import { handleImageChange } from "@/app/lib/galleryLogic";
import Image from "next/image";
import type { modalButtonProps } from "@/app/lib/types";

export default function ModalButton(props: modalButtonProps) {
	let src: string;
	let alt: string;
	switch (props.nextPhoto) {
		case true:
			src = "/chevron-right.svg";
			alt = "next photo";
			break;

		case false:
			src = "/chevron-left.svg";
			alt = "previous photo";
			break;
	}
	return (
		<button
			type="button"
			className={props.style}
			onClick={() => {
				if (props.id && props.isLoaded) {
					props.setIsLoaded(false);
					handleImageChange({
						id: props.id,
						nextPhoto: props.nextPhoto,
						length: props.images.length,
						router: props.router,
						modal: props.modal,
						styles: props.styles,
					});
					props.setIsNext(props.nextPhoto);
				} else {
					return null;
				}
			}}
		>
			<Image src={src} width={50} height={50} alt={alt} />
		</button>
	);
}
