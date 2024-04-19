import type { changeImageProps } from "./types";

export function handleImageChange(props: changeImageProps) {
	switch (props.nextPhoto) {
		case true:
			if (Number.parseInt(props.id) === props.length) {
				props.router.push("?id=1", { scroll: false });
			} else {
				props.router.push(`?id=${Number.parseInt(props.id) + 1}`, {
					scroll: false,
				});
			}
			break;
		case false:
			if (Number.parseInt(props.id) === 1) {
				props.router.push(`?id=${props.length}`, { scroll: false });
			} else {
				props.router.push(`?id=${Number.parseInt(props.id) - 1}`, {
					scroll: false,
				});
			}
	}
}

export function handleKeyDown(
	event: React.KeyboardEvent,
	props: changeImageProps,
	tag: string,
): boolean | undefined {
	if (event.key === "ArrowRight") {
		handleImageChange({ ...props, nextPhoto: true });
		return true;
	}
	if (event.key === "ArrowLeft") {
		handleImageChange({ ...props, nextPhoto: false });
		return false;
	}
	if (event.key === "Escape") {
		props.router.push(`/Art/${tag}`, { scroll: false });
		return undefined;
	}
}

export function checkKey(event: React.KeyboardEvent) {
	if (
		event.key === "Enter" ||
		event.key === "Escape" ||
		event.key === "ArrowLeft" ||
		event.key === "ArrowRight" ||
		event.key === "Enter" ||
		event.key === "Tab" ||
		event.key === "F5"
	) {
		return true;
	}
	return false;
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
