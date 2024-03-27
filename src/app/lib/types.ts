export type ImageType = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryProps = {
  images: ImageType[];
};

export type bigImageProps = {
  images: ImageType[];
  id: string | null;
};
