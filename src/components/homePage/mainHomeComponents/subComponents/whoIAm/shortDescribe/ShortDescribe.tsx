import useTranslation from "next-translate/useTranslation";
import classes from "./shortDescribe.module.css";

export function ShortDescribe() {
    const { t } = useTranslation("home");
    return (
        <p className={classes.describe}>
            {t("myPassion")}
            <span className=""> {t("createPage")} </span> {t("and")}
            <span className=""> {t("apps")} </span>
        </p>
    );
}
