import { configCanvas } from "../../../../../../../hooks/canvas/configCanvas";
import { useSettings } from "../../../../../../../store/settings";
import { DecolarCircle } from "../../../../../../../ui/circles/DecolarCircle";
import { NextImage } from "../../../../../../../ui/images/NextImage";
import { dataToRenderCircle } from "./dataToRenderCircle";
import classes from "./myPhoto.module.css";

export function MyPhoto() {
    const { changeBubbleColor, nightMode } = useSettings((state: any) => state);
    const { BUBBLE_FOR_DARKMODE, BUBBLE_FOR_LIGHTMODE } = configCanvas;

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
                img={"/assets/images/mePNG.png"}
                additionalClass={classes.size}
                click={() => changeBubbleColor(nightMode ? BUBBLE_FOR_DARKMODE : BUBBLE_FOR_LIGHTMODE)}
            />
        </div>
    );
}
