import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { ImageSide } from "./subComponents/imageSide/ImageSide";
import { TextSide } from "./subComponents/textSide/TextSide";
import classes from "./cooperation.module.css";

export function Cooperation() {
    const { t } = useTranslation("titles");
    return (
        <>
            <BigTitle title={t("coop")} />
            <div className={classes.mainContent}>
                <ImageSide />
                <TextSide />
            </div>
        </>
    );
}
