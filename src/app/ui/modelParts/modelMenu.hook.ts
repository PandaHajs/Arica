import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";   
import type { imageType } from "@/app/lib/types";

export const useModelMenu = () => {
const searchParams = useSearchParams();
	const router = useRouter();
	const [models, setModels] = useState<imageType[]>([]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: This effect should only run once
    useEffect(() => {
        const modelID = searchParams.get("modelID");
        if (!modelID || typeof modelID !== "string") {
            router.push("?modelID=1");
        }

        const fetchModels = async () => {
            try {
                const response = await fetch("/3DModels.json");
                if (response) {
                    const { models } = await response.json();
                    if (models) {
                        setModels(models);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchModels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { models, router };
};