import Image from "next/image";
import styles from "./styles/bigImage.module.scss";
import { bigImageProps } from "../lib/types";
import { useRouter } from "next/navigation";
import { useChangeImage } from "../lib/galleryLogic";

export default function BigImage(props: bigImageProps) {
  const router = useRouter();
  const image = props.images.find((image) => image.id === props.id);
  const changeImage = useChangeImage();

  return (
    <div className={image ? styles.bigImage : styles.hidden}>
      <div className={styles.button}>
        <Image
          src="x.svg"
          width={50}
          height={50}
          alt="close button"
          onClick={() => router.push("/art", { scroll: false })}
        />
      </div>
      <div
        className={styles.left}
        onClick={() =>
          props.id ? changeImage(props.id, false, props.images.length) : null
        }
      >
        <Image
          src="chevron-left.svg"
          width={50}
          height={50}
          alt="previous photo"
        />
      </div>
      <div
        className={styles.right}
        onClick={() =>
          props.id ? changeImage(props.id, true, props.images.length) : null
        }
      >
        <Image
          src="chevron-right.svg"
          width={50}
          height={50}
          alt="next photo"
        />
      </div>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{
            width: "100%",
            height: "auto",
          }}
          quality={40}
        />
      ) : null}
    </div>
  );
}
