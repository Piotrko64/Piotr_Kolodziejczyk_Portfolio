import classes from "./oneSkill.module.css";
import { NextImage } from "../../../../../ui/images/NextImage";

type Props = {
    nameIcon: string;
    title: string;
};

export function OneSkill({ nameIcon, title }: Props) {
    return (
        <NextImage
            imgURL={`/assets/icons/technologies/${nameIcon}`}
            additionalClass={classes.icon}
            title={title}
        />
    );
}
