import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";

export function NextImage({
    img,
    additionalClass,
    click,
    title,
}: {
    img: string;
    additionalClass: string;
    click?: () => void;
    title?: string;
}) {
    return (
        <div onClick={click}>
            <div className={cx(additionalClass, classes.relative)}>
                <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    sizes="50vw"
                    loading="eager"
                />
            </div>
        </div>
    );
}
