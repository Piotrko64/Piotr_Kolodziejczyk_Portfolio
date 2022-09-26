import classes from "./selectedProjects.module.css";
import Carousel from "./subComponents/carousel/Carousel";

export function SelectedProjectsMainComponent() {
    return (
        <section className={classes.sectionProjects}>
            <h1 className={classes.h1}>Wybrane projekty</h1>
            <Carousel />
        </section>
    );
}
