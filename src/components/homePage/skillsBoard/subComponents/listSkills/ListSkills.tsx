import { dataSkills } from "../../../../../data/dataSkills";
import { OneSkill } from "../oneSkill/OneSkill";
import classes from "./listSkills.module.css";

export function ListSkills() {
    return (
        <div className={classes.skills}>
            {dataSkills.map(({ name, iconName }) => (
                <OneSkill key={iconName} nameIcon={iconName} />
            ))}
        </div>
    );
}
