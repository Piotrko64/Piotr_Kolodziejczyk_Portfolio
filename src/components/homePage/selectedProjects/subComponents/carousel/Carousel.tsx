import classes from "./carousel.module.css";
import { useKeenSlider } from "keen-slider/react";
import { ResponseProjectsData } from "../../../../../@types/graphql/ResponseProjectsData";
import { OneProject } from "../oneProject/OneProject";
import { keenSliderConfig } from "../../../../../config/keenSliderConfig";

export function Carousel({
    dataProjects,
}: {
    dataProjects: ResponseProjectsData;
}) {
    const [sliderRef] = useKeenSlider(keenSliderConfig);

    return (
        <div ref={sliderRef} className={classes.container}>
            {dataProjects.projectsID.map((project) => (
                <OneProject key={project.title} dataProject={project} />
            ))}
        </div>
    );
}
