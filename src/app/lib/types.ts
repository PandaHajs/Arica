import React from "react";

export type ImageType = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryProps = {
  blur: boolean;
  setBlur: (blur: boolean) => void;
  setBigImage: (image: React.JSX.Element) => void;
  images: ImageType[];
};

export type bigImageProps = {
  blur: boolean;
  setBlur: (blur: boolean) => void;
  setBigImage: (image: React.JSX.Element | null) => void;
  images: ImageType[];
  bigImage: React.JSX.Element | null;
};
