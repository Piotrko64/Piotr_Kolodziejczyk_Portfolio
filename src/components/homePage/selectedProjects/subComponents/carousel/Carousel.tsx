import classes from "./carousel.module.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrayProjects } from "../../../../../@types/graphql/ResponseProjectsData";
import { OneProject } from "../oneProject/OneProject";
import { keenSliderConfig } from "../../../../../config/keenSliderConfig";
import { getCorrectColor } from "../../../../../data/dataBorderSorting";

type Props = {
    dataProjects: ArrayProjects;
};

export function Carousel({ dataProjects }: Props) {
    const [sliderRef] = useKeenSlider(keenSliderConfig);

    return (
        <div ref={sliderRef} className={classes.container}>
            {dataProjects.map((project, index) => (
                <OneProject
                    key={project.title}
                    dataProject={project}
                    color={getCorrectColor(index)}
                />
            ))}
        </div>
    );
}
