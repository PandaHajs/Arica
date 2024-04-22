import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { RefObject } from "react";

export type imageType = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tag?: string;
};

export type modalButtonProps = {
  id: string | null;
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  images: imageType[];
  setIsNext: (value: boolean) => void;
  isNext: boolean;
  router: AppRouterInstance;
  modal: RefObject<HTMLDivElement>;
  style:  string;
  tag: string;
  nextPhoto: boolean;
  styles: {
    readonly [key: string]: string;
  }
};

export type modalCloseButtonProps = {
	tag: string;
	router: AppRouterInstance;
	styles: {
		readonly [key: string]: string;
	};
};


export type gallerySectionProps = {
  tag: string;
}

export type galleryProps={
  tag: string;
  setIsTab: (value: number) => void;
  isTab: number;
}

export type changeImageProps = {
  id: string;
  nextPhoto?: boolean;
  length: number;
  router: AppRouterInstance;
  modal: RefObject<HTMLDivElement>;
  styles:  {
    readonly [key: string]: string;
}
};

export type keyDownProps = {
  id: string;
  length: number;
  router: AppRouterInstance;
  tag: string;
}

