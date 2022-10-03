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
            perView: 2.1,
            spacing: 90,
            origin: "center",
        },
        loop: true,
        breakpoints: {
            "(max-width: 1320px)": {
                slides: { perView: 2, spacing: 40, origin: "center" },
            },
            "(max-width: 920px)": {
                slides: { perView: 1.6, spacing: 30, origin: "center" },
            },
            "(max-width: 570px)": {
                slides: { perView: 1.4, spacing: 20, origin: "center" },
            },
            "(max-width: 440px)": {
                slides: { perView: 1.2, spacing: 10, origin: "center" },
            },
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
