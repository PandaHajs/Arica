import type { changeImageProps } from "./types";

export function handleImageChange(props: changeImageProps) {
	switch (props.nextPhoto) {
		case true:
			props.bigImage.current?.classList.add(props.styles.animationRight);
			if (Number.parseInt(props.id) === props.length) {
				props.router.push("?id=1", { scroll: false });
			} else {
				props.router.push(`?id=${Number.parseInt(props.id) + 1}`, {
					scroll: false,
				});
			}
			break;
		case false:
			if (
				!props.bigImage.current?.classList.contains(props.styles.animationLeft)
			) {
				props.bigImage.current?.classList.add(props.styles.animationLeft);
			}
			if (Number.parseInt(props.id) === 1) {
				props.router.push(`?id=${props.length}`, { scroll: false });
				//	console.log("inside");
			} else {
				props.router.push(`?id=${Number.parseInt(props.id) - 1}`, {
					scroll: false,
				});
				//	console.log("inside");
			}
	}
}

export function handleKeyDown(
	event: React.KeyboardEvent,
	props: changeImageProps,
	tag: string,
) {
	if (event.key === "ArrowRight") {
		handleImageChange({ ...props, nextPhoto: true });
	} else if (event.key === "ArrowLeft") {
		handleImageChange({ ...props, nextPhoto: false });
	} else if (event.key === "Escape") {
		props.router.push(`/Art/${tag}`, { scroll: false });
	}
}

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);
