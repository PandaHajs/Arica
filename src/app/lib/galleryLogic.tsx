import type { changeImageProps, keyDownProps } from "./types";

export function changeImageHandler(props: changeImageProps) {
	if (Number.parseInt(props.id) === 1 && !props.nextPhoto) {
		props.router.push(`?id=${props.length}`, { scroll: false });
	} else if (Number.parseInt(props.id) === props.length && props.nextPhoto) {
		props.router.push("?id=1", { scroll: false });
	} else {
		props.router.push(
			`?id=${Number.parseInt(props.id) + (props.nextPhoto ? 1 : -1)}`,
			{
				scroll: false,
			},
		);
	}
}

export function keyDownHandler(
	e: React.KeyboardEvent<HTMLDivElement>,
	props: keyDownProps,
) {
	console.log(e.key);
	if (e.key === "ArrowRight") {
		changeImageHandler({ ...props, nextPhoto: true });
	} else if (e.key === "ArrowLeft") {
		changeImageHandler({ ...props, nextPhoto: false });
	} else if (e.key === "Escape") {
		props.router.push(`/Art/${props.tag}`, { scroll: false });
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
