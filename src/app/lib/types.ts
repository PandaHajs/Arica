import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type imageType = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tag: string;
};

export type galleryProps = {
  images: imageType[];
  tag: string;
};

export type bigImageProps = {
  images: imageType[];
  id: string | null;
  tag: string;
};

export type changeImageProps = {
  id: string;
  nextPhoto: boolean;
  length: number;
  router: AppRouterInstance;
};

export type keyDownProps = {
  id: string;
  length: number;
  router: AppRouterInstance;
  tag: string;
}