import { BackCircles } from "./subComponents/BackCircles";
import classes from "./backgroundCircles.module.css";
import { ChildrenProps } from "../../../@types/ChildrenProps";

export function BackgroundCirclesMainComponent({ children }: ChildrenProps) {
    return (
        <div className={classes.background}>
            <BackCircles />
            <div className={classes.zIndex}> {children}</div>
        </div>
    );
}
