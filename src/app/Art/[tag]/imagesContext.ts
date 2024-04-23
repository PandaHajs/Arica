import { createContext } from "react";
import type { imageType } from "@/app/lib/types";

type ArtContext ={
    images: imageType[];
    tag: string;
}

export const imagesContext = createContext<ArtContext>({ images: [], tag: "" });
