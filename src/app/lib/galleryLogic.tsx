import { useRouter } from "next/navigation";

export function useChangeImage() {
  const router = useRouter();

  return (id: string, nextPhoto: boolean, length: number) => {
    if (parseInt(id) === 1 && !nextPhoto) {
      router.push("?id=" + length, { scroll: false });
    } else if (parseInt(id) === length && nextPhoto) {
      router.push("?id=1", { scroll: false });
    } else {
      router.push("?id=" + (parseInt(id) + (nextPhoto ? 1 : -1)), {
        scroll: false,
      });
    }
  };
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
