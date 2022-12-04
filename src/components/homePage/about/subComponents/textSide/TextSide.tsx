import useTranslation from "next-translate/useTranslation";
import classes from "./textSide.module.css";

export function TextSide() {
    const { t } = useTranslation("about");

    return <div className={classes.text}>{t("text")}</div>;
}
