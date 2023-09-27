import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { ImageSide } from "./subComponents/imageSide/ImageSide";
import { TextSide } from "./subComponents/textSide/TextSide";
import classes from "./about.module.css";
import { MoreAboutMe } from "./subComponents/moreAboutMe/MoreAboutMe";

export function About() {
    const { t } = useTranslation("titles");
    return (
        <div className="space">
            <BigTitle title={t("about")} />
            <section className={classes.mainContent}>
                <ImageSide />
                <TextSide />
            </section>
            {/* <MoreAboutMe /> */}
        </div>
    );
}
