import { configCanvas } from "../../../../../../../config/configCanvas";
import { useSettings } from "../../../../../../../store/settings";
import { DecolarCircle } from "../../../../../../../ui/circles/DecolarCircle";
import { NextImage } from "../../../../../../../ui/images/NextImage";
import { dataToRenderCircle } from "./dataToRenderCircle";
import classes from "./myPhoto.module.css";

export function MyPhoto() {
    const { changeBubbleColor } = useSettings((state) => state);
    const { BUBBLE_COLOR } = configCanvas;

    return (
        <div className={classes.container}>
            {dataToRenderCircle.map(({ classCircle, rgb }) => (
                <DecolarCircle
                    key={classCircle}
                    additionalClass={classes[classCircle]}
                    click={() => changeBubbleColor(rgb)}
                />
            ))}
            <NextImage
                imgURL={"/assets/images/me.jpg"}
                additionalClass={classes.size}
                click={() => changeBubbleColor(BUBBLE_COLOR)}
            />
        </div>
    );
}
