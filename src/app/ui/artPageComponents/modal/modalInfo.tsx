import { useState } from "react";
import type { modalInfoProps } from "@/app/lib/types";

export default function ModalInfo(props: modalInfoProps) {
  const { styles, description } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.infoContainer}
      data-open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label="Show image description"
        className={styles.infoIcon}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        i
      </button>

      <div className={styles.infoPanel} role="note">
        {description || ""}
      </div>
    </div>
  );
}
