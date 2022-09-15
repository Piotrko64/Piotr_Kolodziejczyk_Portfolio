import cx from "classnames";
import classes from "./decolarCircle.module.css";

export function DecolarCircle({ additionalClass, click }: { additionalClass: string; click?: () => void }) {
    return <div className={cx(classes.circle, additionalClass)} onClick={click}></div>;
}
