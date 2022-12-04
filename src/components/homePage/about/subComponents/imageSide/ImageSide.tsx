import classes from "./ImageSlide.module.css";
import { NextImage } from "../../../../../ui/images/NextImage";
import { PlusSVG } from "./svg/plusSVG/PlusSVG";
import { HeartSVG } from "./svg/heartSVG/HeartSVG";

export function ImageSide() {
    return (
        <div className={classes.container}>
            <div className={classes.firstLine}>
                <NextImage
                    imgURL="/assets/icons/technologies/next.png"
                    additionalClass={classes.icon}
                />
                <PlusSVG />
                <NextImage
                    imgURL="/assets/icons/technologies/ts.png"
                    additionalClass={classes.icon}
                />
            </div>
            <div className={classes.equal}>=</div>
            <div className={classes.secondLine}>
                <HeartSVG />
            </div>
        </div>
    );
}
