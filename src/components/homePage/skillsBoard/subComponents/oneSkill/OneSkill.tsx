import classes from "./oneSkill.module.css";
import { NextImage } from "../../../../../ui/images/NextImage";

export function OneSkill({ nameIcon }: { nameIcon: string }) {
    return (
        <NextImage
            img={`/assets/icons/${nameIcon}`}
            additionalClass={classes.icon}
        />
    );
}
