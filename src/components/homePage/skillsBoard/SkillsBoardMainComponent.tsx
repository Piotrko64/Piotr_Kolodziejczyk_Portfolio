import classes from "./skillsBoard.module.css";
import Marquee from "react-fast-marquee";
import { marqueeConfig } from "../../../config/marqueeConfig";
import { ListSkills } from "./subComponents/listSkills/ListSkills";

export function SkillsBoardMainComponent() {
    return (
        <Marquee {...marqueeConfig} className={classes.marquee}>
            <ListSkills />
        </Marquee>
    );
}
