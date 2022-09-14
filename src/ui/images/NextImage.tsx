import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";

export function NextImage({ img, additionalClass }: { img: string; additionalClass: string }) {
    return (
        <div className={cx(additionalClass, classes.relative)}>
            <Image src={img} alt={""} layout="fill" objectFit="cover" sizes="50vw" loading="eager" />
        </div>
    );
}
