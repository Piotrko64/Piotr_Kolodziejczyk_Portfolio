import { SwiperSlide } from "swiper/react";
import classes from "./carousel.module.css";

export function OneProject() {
    return (
        <>
            <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
        </>
    );
}
