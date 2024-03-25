import { GalleryProps } from "./types";
import React from "react";
import Image from "next/image";

export function showImage(id: string, props: GalleryProps) {
  const image = props.images.find((image) => image.id === id);
  if (image) {
    props.setBigImage(
      <Image
        key={image.id}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        style={{
          width: "100%",
          height: "auto",
        }}
        quality={40}
      />
    );
    props.setBlur(true);
  }
}

export function changePhoto(
  image: React.JSX.Element | null,
  next: boolean,
  props: GalleryProps
) {
  if (!image || image.key === null) return;
  if (next) {
    if (parseInt(image.key) === props.images.length) {
      showImage("1", props);
    } else {
      showImage((parseInt(image.key) + 1).toString(), props);
    }
  } else {
    if (parseInt(image.key) === 1) {
      showImage(props.images.length.toString(), props);
    } else {
      showImage((parseInt(image.key) - 1).toString(), props);
    }
  }
}

export function removeImage(
  bigImage: React.JSX.Element,
  setBlur: (blur: boolean) => void,
  setBigImage: (image: React.JSX.Element | null) => void
) {
  if (!bigImage) return;
  setBlur(false);
  setBigImage(null);
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
