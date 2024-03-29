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

export type checkImageProps = {
  tag: string;
  images: imageType[];
  id: string;
  nextPhoto: boolean;
  router: any;
};

export type changeImageProps = {
  id: string;
  nextPhoto: boolean;
  length: number;
  router: any;
};
