import classes from "./helloIAm.module.css";
import cx from "classnames";
import useTranslation from "next-translate/useTranslation";

export function HelloIAm() {
    const { t } = useTranslation("home");

    return (
        <div className={classes.IAm}>
            <span className={cx(classes.hello, "boldYellow")}>{t("hello")} 👋</span>
            <br />
            {t("iAm")}
        </div>
    );
}
