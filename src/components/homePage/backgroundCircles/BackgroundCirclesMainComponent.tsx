import { BackCircles } from "./subComponents/BackCircles";
import classes from "./backgroundCircles.module.css";

export function BackgroundCirclesMainComponent({
    children,
}: {
    children: JSX.Element;
}) {
    return (
        <div className={classes.background}>
            <BackCircles />
            {children}
        </div>
    );
}