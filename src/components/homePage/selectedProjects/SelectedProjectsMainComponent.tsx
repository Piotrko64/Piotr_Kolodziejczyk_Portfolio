import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import classes from "./selectedProjects.module.css";
import { Carousel } from "./subComponents/carousel/Carousel";

export function SelectedProjectsMainComponent() {
    const { t } = useTranslation("titles");
    return (
        <section className={classes.sectionProjects}>
            <BigTitle title={t("projects")} />

            <Carousel />
        </section>
    );
}
