import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import classes from "./changeLangPanel.module.css";
import cx from "classnames";
import { useEffect, useState } from "react";

export function ChangeLangPanel() {
    const [scrollTop, setScrollTop] = useState(0);
    const { lang } = useTranslation();

    function changeLanguage() {
        setLanguage(returnSecondLang());
    }

    function returnSecondLang() {
        return lang === "pl" ? "en" : "pl";
    }

    function changeScrollTop() {
        setScrollTop(window.scrollY - window.innerHeight / 2);
    }

    useEffect(() => {
        document.addEventListener("scroll", changeScrollTop);

        return () => {
            document.removeEventListener("scroll", changeScrollTop);
        };
    }, []);

    return (
        <button
            onClick={changeLanguage}
            className={cx(classes.langPanel, scrollTop <= 0 && classes.active)}
        >
            {returnSecondLang()}
        </button>
    );
}
