import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./carousel.module.css";

import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an
import { ResponseProjectsData } from "../../../../../@types/graphql/ResponseProjectsData";
import { OneProject } from "../oneProject/OneProject";

export function Carousel({
    dataProjects,
}: {
    dataProjects: ResponseProjectsData;
}) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2.5,
            spacing: 15,
            origin: "center",
        },
        loop: true,
        range: {
            min: -5,
            max: 5,
        },
    });

    return (
        <div ref={sliderRef} className={classes.container}>
            {dataProjects.projectsID.map((project) => (
                <OneProject key={project.title} dataProject={project} />
            ))}
            {dataProjects.projectsID.map((project) => (
                <OneProject key={project.title} dataProject={project} />
            ))}
            {dataProjects.projectsID.map((project) => (
                <OneProject key={project.title} dataProject={project} />
            ))}
        </div>
    );
}
