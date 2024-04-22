import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { imageType } from '@/app/lib/types';

export const useArt = () => {
const [images, setImages] = useState<imageType[]>([]);
const tag = useParams<{ tag: string }>();

useEffect(() => {
    const fetchImages = async () => {
        try {
            const response = await fetch(`/${tag.tag}.json`);
            if (response) {
                const { photos } = await response.json();
                if (photos) {
                    setImages(photos);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
    fetchImages();

    if (document.activeElement) {
        (document.activeElement as HTMLElement).blur();
    }
}, [tag.tag]);

return { images, tag };
};