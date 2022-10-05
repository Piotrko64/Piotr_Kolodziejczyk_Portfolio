import classes from "./bigTitle.module.css";

export function BigTitle({ title }: { title: string }) {
    return <h2 className={classes.h2}>{title}</h2>;
}
