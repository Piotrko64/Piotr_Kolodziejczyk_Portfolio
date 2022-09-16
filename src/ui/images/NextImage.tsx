import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";
import myImg from "../../../public/myPhotos/mePNG.png";

export function NextImage({
    img,
    additionalClass,
    click,
}: {
    img: string;
    additionalClass: string;
    click?: () => void;
}) {
    return (
        <div onClick={click}>
            <div className={cx(additionalClass, classes.relative)}>
                <Image src={myImg} alt={""} layout="fill" objectFit="cover" sizes="50vw" loading="eager" />
            </div>
        </div>
    );
}
