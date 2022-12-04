import useTranslation from "next-translate/useTranslation";
import classes from "./textSide.module.css";

export function TextSide() {
    const { t } = useTranslation("coop");

    return <div className={classes.text}>{t("text")}</div>;
}
