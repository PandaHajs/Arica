"use client";
import Image from "next/image";
import { changePhoto, removeImage } from "../lib/galleryLogic";
import styles from "./styles/bigImage.module.scss";
import { bigImageProps } from "../lib/types";

export default function BigImage(props: bigImageProps) {
  return (
    <div className={props.blur ? styles.bigImage : styles.hidden}>
      <div className={styles.button}>
        <Image
          src="x.svg"
          width={50}
          height={50}
          alt="close button"
          onClick={() =>
            removeImage(
              props.bigImage as React.ReactElement,
              props.setBlur,
              props.setBigImage
            )
          }
        />
      </div>
      <div
        className={styles.left}
        onClick={() => changePhoto(props.bigImage, false, props)}
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
        onClick={() => changePhoto(props.bigImage, true, props)}
      >
        <Image
          src="chevron-right.svg"
          width={50}
          height={50}
          alt="next photo"
        />
      </div>
      {props.bigImage}
    </div>
  );
}
