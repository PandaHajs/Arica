import styles from "../../styles/modal.module.scss";
import type { imageType } from "../../../lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect, useContext } from "react";
import { imagesContext } from "@/app/Art/[tag]/imagesContext";
import ModalCloseButton from "./modalCloseButton";
import ModalButton from "./modalButton";
import ModalImage from "./modalImage";
import ModalInfo from "./modalInfo";

export default function Modal() {
  const router = useRouter();
  const [image, setImage] = useState<undefined | null | imageType>(null);
  const modal = useRef<HTMLDivElement>(null!);
  const [isNext, setIsNext] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const id = useSearchParams().get("id");
  const { images, tag } = useContext(imagesContext);

  const modalPreviousButtonProps = {
    id: id,
    isLoaded: isLoaded,
    setIsLoaded: setIsLoaded,
    setIsNext: setIsNext,
    isNext: isNext,
    router: router,
    modal: modal,
    style: styles.left,
    tag: tag,
    images: images,
    nextPhoto: false,
    styles: styles,
  };

  const modalNextButtonProps = {
    ...modalPreviousButtonProps,
    nextPhoto: true,
    style: styles.right,
  };

  const modalImageProps = {
    image: image,
    style: styles.modal,
    modal: modal,
    setIsLoaded: setIsLoaded,
    isLoaded: isLoaded,
    id: id,
    images: images,
    setIsNext: setIsNext,
    isNext: isNext,
    router: router,
    tag: tag,
    styles: styles,
  };

  const modalInfoProps = {
    description: image ? image.alt : "",
    styles: styles,
  };

  useEffect(() => {
    if (id) {
      setImage(images.find((image) => image.id === id));
    } else {
      setImage(null);
    }
  }, [id, images]);

  return (
    <ModalImage {...modalImageProps}>
      <ModalCloseButton tag={tag} router={router} styles={styles} />
      <ModalInfo {...modalInfoProps} />
      <ModalButton {...modalPreviousButtonProps} />
      <ModalButton {...modalNextButtonProps} />
    </ModalImage>
  );
}
