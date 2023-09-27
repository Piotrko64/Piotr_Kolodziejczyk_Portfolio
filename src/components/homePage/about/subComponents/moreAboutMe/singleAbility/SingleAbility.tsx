import Image from "next/image";
import styles from "./singleAbility.module.css";
import useTranslation from "next-translate/useTranslation";
import { NextImage } from "ui/images/NextImage";

type Props = Record<
    | "srcImg"
    | "descriptionI18nName"
    | "buttonTextI18nName"
    | "buttonColor"
    | "buttonLink",
    string
>;

export function SingleAbility({
    srcImg,
    descriptionI18nName,
    buttonTextI18nName,
    buttonColor,
    buttonLink,
}: Props) {
    const { t } = useTranslation("about");

    return (
        <div className={styles.container}>
            <NextImage
                imgURL={"/assets/images/moreAboutMe/" + srcImg}
                additionalClass={styles.image}
                modeContain
            />
            <p className={styles.text}>{t(descriptionI18nName)}</p>
            <a
                href={buttonLink}
                style={{ background: `var(--${buttonColor})` }}
                target="_blank"
            >
                {t(buttonTextI18nName)}
            </a>
        </div>
    );
}
