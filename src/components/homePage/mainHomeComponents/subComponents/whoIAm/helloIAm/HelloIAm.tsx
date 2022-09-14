import classes from "./helloIAm.module.css";
import cx from "classnames";

export function HelloIAm() {
    return (
        <div className={classes.IAm}>
            <span className={cx(classes.hello, "boldYellow")}>Hej! 👋</span> <br />
            Nazywam się
        </div>
    );
}
