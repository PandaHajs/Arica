import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { checkKey, handleKeyDown } from "@/app/lib/galleryLogic";
import type { modalImageProps } from "@/app/lib/types";

export default function ModalImage(props: modalImageProps) {
  return (
    <>
      <AnimatePresence>
        {props.image && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            className={props.style}
            ref={props.modal}
            onKeyDown={(event) => {
              if (checkKey(event)) {
                if (props.id && props.isLoaded) {
                  props.setIsLoaded(false);
                  props.setIsNext(
                    handleKeyDown(
                      event,
                      {
                        id: props.id,
                        length: props.images.length,
                        router: props.router,
                        modal: props.modal,
                        styles: props.styles,
                      },
                      props.tag
                    ) || false
                  );
                } else {
                  return null;
                }
              } else {
                event.preventDefault();
              }
            }}
            tabIndex={0}
            role="button"
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  translateX: props.isNext ? "-100%" : "50%",
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
                key={props.image.id}
              >
                {props.children}

                <Image
                  src={props.image.src}
                  alt={props.image.alt}
                  width={props.image.width}
                  height={props.image.height}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  quality={40}
                  priority={true}
                  onLoad={() => {
                    (props.modal.current as HTMLDivElement | null)?.focus();
                    props.setIsLoaded(true);
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
