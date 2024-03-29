import styles from "@/app/ui/styles/gallery.module.scss";
import Image from "next/image";
import type { galleryProps } from "@/app/lib/types";
import { shimmer, toBase64 } from "@/app/lib/galleryLogic";
import { useRouter } from "next/navigation";

export default function Gallery(props: galleryProps) {
  const images = props.images;
  const router = useRouter();

  return (
    <section className={styles.gallery}>
      <div className={styles.line}>
        {images
          .filter(
            (image) => parseInt(image.id) % 3 === 1 && image.tag === props.tag
          )
          .map((image) => (
            <Image
              key={image.id}
              priority={parseInt(image.id) <= 3 ? true : false}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={40}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                router.push("?id=" + image.id, { scroll: false });
              }}
            />
          ))}
      </div>
      <div className={styles.line}>
        {images
          .filter(
            (image) => parseInt(image.id) % 3 === 2 && image.tag === props.tag
          )
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              priority={parseInt(image.id) <= 3 ? true : false}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={40}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                router.push("?id=" + image.id, { scroll: false });
              }}
            />
          ))}
      </div>
      <div className={styles.line}>
        {images
          .filter(
            (image) => parseInt(image.id) % 3 === 0 && image.tag === props.tag
          )
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              priority={parseInt(image.id) <= 3 ? true : false}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={40}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              onClick={() => {
                router.push("?id=" + image.id, { scroll: false });
              }}
            />
          ))}
      </div>
    </section>
  );
}
