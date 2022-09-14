import classes from "./helloIAm.module.css";

export function HelloIAm() {
    return (
        <div className={classes.IAm}>
            <span className={classes.hello}>Hej! 👋</span> <br />
            Nazywam się
        </div>
    );
}
