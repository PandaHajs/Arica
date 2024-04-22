import Image from "next/image";
import type { modalCloseButtonProps } from "@/app/lib/types";

export default function ModalCloseButton(props: modalCloseButtonProps) {
	return (
		<button
			className={props.styles.button}
			type="button"
			onKeyDown={(event) => {
				if (event.key === "Enter")
					props.router.push(`/Art/${props.tag}`, { scroll: false });
			}}
		>
			<Image
				src="/x.svg"
				width={50}
				height={50}
				alt="close button"
				onClick={() =>
					props.router.push(`/Art/${props.tag}`, { scroll: false })
				}
			/>
		</button>
	);
}
