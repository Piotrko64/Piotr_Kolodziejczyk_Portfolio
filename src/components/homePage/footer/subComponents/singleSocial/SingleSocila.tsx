import { NextImage } from "../../../../../ui/images/NextImage";
import styles from "./singleSocial.module.css";

type Props = Record<"imgURL" | "altText" | "link", string>;

export function SingleSocial({
    imgURL,
    altText,

    link,
}: Props) {
    return (
        <a
            className={styles.anchorSocial}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <NextImage
                imgURL={"/assets/socialMedia/" + imgURL}
                title={altText}
                modeContain
                additionalClass={styles.image}
            />
        </a>
    );
}
