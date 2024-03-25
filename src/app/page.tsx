"use client";
import styles from "./page.module.scss";
import Gallery from "./ui/gallery";
import { useState, useEffect } from "react";
import BigImage from "./ui/bigImage";
import { removeImage } from "./lib/galleryLogic";
import { ImageType } from "./lib/types";

export default function Home() {
  const [blur, setBlur] = useState(false);
  const [bigImage, setBigImage] = useState<React.JSX.Element | null>(null);
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api", {
          method: "GET",
        });
        if (response) {
          const { image } = await response.json();
          if (image) {
            setImages(image);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchImages();
  }, []);

  return (
    <main>
      <section
        className={blur ? styles.blur : styles.main}
        onClick={() =>
          removeImage(bigImage as React.ReactElement, setBlur, setBigImage)
        }
      >
        <h1>Welcome to Arica&apos;s portfolio</h1>
        <Gallery
          blur={blur}
          setBlur={setBlur}
          setBigImage={setBigImage}
          images={images}
        />
      </section>
      <BigImage
        blur={blur}
        setBlur={setBlur}
        setBigImage={setBigImage}
        images={images}
        bigImage={bigImage}
      />
    </main>
  );
}
