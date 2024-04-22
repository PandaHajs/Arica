import { createContext } from "react";
import type { imageType } from "@/app/lib/types";

export const imagesContext = createContext<imageType[]>([]);
