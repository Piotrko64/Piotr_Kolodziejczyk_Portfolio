import classes from "./shortDescribe.module.css";

export function ShortDescribe() {
    return (
        <p className={classes.describe}>
            Moją pasją jest <span className="boldViolet"> tworzenie stron </span> oraz
            <span className="boldRed"> aplikacji internetowych </span>
        </p>
    );
}
