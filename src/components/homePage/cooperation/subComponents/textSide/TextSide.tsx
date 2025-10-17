import useTranslation from "next-translate/useTranslation";
import classes from "./TextSide.module.css";

const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSeS9jsCun0bwl9b-F5uc8W4kSN5u0iWxTWp6j3x9c5NMcTTcA/viewform?usp=sf_link";

export function TextSide() {
    const { t } = useTranslation("coop");

    return (
        <div className={classes.text}>
            <p>{t("text")}</p>
            {/* <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkButton}
            >
                {t("form")}
            </a> */}
        </div>
    );
}
