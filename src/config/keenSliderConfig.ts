import { KeenSliderHooks, KeenSliderOptions } from "keen-slider/react";

export const keenSliderConfig: KeenSliderOptions<{}, {}, KeenSliderHooks> = {
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
            slides: { perView: 1.6, spacing: 25, origin: "center" },
        },
        "(max-width: 570px)": {
            slides: { perView: 1.4, spacing: 15, origin: "center" },
        },
        "(max-width: 440px)": {
            slides: { perView: 1.2, spacing: 10, origin: "center" },
        },
    },
};
