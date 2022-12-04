import useTranslation from "next-translate/useTranslation";
import { ArrayProjects } from "../../../@types/graphql/ResponseProjectsData";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import classes from "./selectedProjects.module.css";
import { Carousel } from "./subComponents/carousel/Carousel";

type Props = {
    dataProjects: ArrayProjects;
};

export function SelectedProjectsMainComponent({ dataProjects }: Props) {
    const { t } = useTranslation("titles");

    return (
        <section className={classes.sectionProjects}>
            <BigTitle title={t("projects")} />
            <Carousel dataProjects={dataProjects} />
        </section>
    );
}
