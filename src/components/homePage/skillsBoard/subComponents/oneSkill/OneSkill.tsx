import classes from "./oneSkill.module.css";
import { NextImage } from "../../../../../ui/images/NextImage";

export function OneSkill({
    nameIcon,
    title,
}: {
    nameIcon: string;
    title: string;
}) {
    return (
        <NextImage
            imgURL={`/assets/icons/technologies/${nameIcon}`}
            additionalClass={classes.icon}
            title={title}
        />
    );
}
