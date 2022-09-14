import { DecolarCircle } from "../../../../../../../ui/circles/DecolarCircle";
import { NextImage } from "../../../../../../../ui/images/NextImage";
import classes from "./myPhoto.module.css";

export function MyPhoto() {
    return (
        <div className={classes.container}>
            <DecolarCircle additionalClass={classes.yellowCircle} />
            <DecolarCircle additionalClass={classes.redCircle} />
            <DecolarCircle additionalClass={classes.violetCircle} />
            <NextImage img="/myPhotos/mePNG.png" additionalClass={classes.size} />
        </div>
    );
}
