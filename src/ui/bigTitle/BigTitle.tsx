import classes from "./bigTitle.module.css";

type Props = { title: string };

export function BigTitle({ title }: Props) {
    return <h2 className={classes.h2}>{title}</h2>;
}
