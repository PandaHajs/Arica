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
