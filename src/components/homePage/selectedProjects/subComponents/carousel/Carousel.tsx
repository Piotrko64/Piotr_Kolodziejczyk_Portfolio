import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./carousel.module.css";
import "swiper/css";

export function Carousel() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            loop
            className={classes.container}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            observer
        >
            <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 3e</SwiperSlide>
            ...
        </Swiper>
    );
}
