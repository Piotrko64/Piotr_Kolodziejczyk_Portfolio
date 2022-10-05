import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";

type Props = {
    imgURL: string;
    additionalClass: string;
    click?: () => void;
    title?: string;
    modeContain?: true;
};

export function NextImage({
    imgURL,
    additionalClass,
    click,
    title,
    modeContain,
}: Props) {
    return (
        <div onClick={click}>
            <div className={cx(additionalClass, classes.relative)}>
                <Image
                    src={imgURL}
                    alt={title}
                    layout="fill"
                    objectFit={modeContain ? "contain" : "cover"}
                    sizes="50vw"
                    loading="eager"
                />
            </div>
        </div>
    );
}
