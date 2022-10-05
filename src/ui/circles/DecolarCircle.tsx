import cx from "classnames";
import classes from "./decolarCircle.module.css";

type Props = { additionalClass: string; click?: () => void };

export function DecolarCircle({ additionalClass, click }: Props) {
    return (
        <div
            className={cx(classes.circle, additionalClass)}
            onClick={click}
        ></div>
    );
}
