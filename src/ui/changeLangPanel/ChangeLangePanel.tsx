import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import classes from "./changeLangPanel.module.css";
import cx from "classnames";
import { useEffect, useState } from "react";

export function ChangeLangPanel() {
    const [marginTop, setMarginTop] = useState(0);
    const { lang } = useTranslation();

    function changeLanguage() {
        setLanguage(lang === "pl" ? "en" : "pl");
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setMarginTop(window.scrollY - window.innerHeight / 2);
        });

        return () => {};
    }, []);

    return (
        <button
            onClick={changeLanguage}
            className={cx(classes.langPanel, marginTop <= 0 && classes.active)}
        >
            lang {marginTop}
        </button>
    );
}
