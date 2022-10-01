import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import classes from "./selectedProjects.module.css";
import { Carousel } from "./subComponents/carousel/Carousel";

export function SelectedProjectsMainComponent() {
    return (
        <section className={classes.sectionProjects}>
            <BigTitle title="Wybrane projekty" />

            <Carousel />
        </section>
    );
}
