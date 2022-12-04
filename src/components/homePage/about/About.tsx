import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { ImageSide } from "./subComponents/imageSide/ImageSide";
import { TextSide } from "./subComponents/textSide/TextSide";
import classes from "./about.module.css";

export function About() {
    const { t } = useTranslation("titles");
    return (
        <>
            <BigTitle title={t("about")} />
            <div className={classes.mainContent}>
                <ImageSide />
                <TextSide />
            </div>
        </>
    );
}
