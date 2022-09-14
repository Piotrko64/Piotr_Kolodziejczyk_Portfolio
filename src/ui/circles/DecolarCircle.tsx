import cx from "classnames";
import classes from "./decolarCircle.module.css";

export function DecolarCircle({ additionalClass }: { additionalClass: string }) {
    return <div className={cx(classes.circle, additionalClass)}></div>;
}
