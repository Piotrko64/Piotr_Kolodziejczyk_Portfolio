import { useEffect, useState } from "react";
import classes from "./cookiePanel.module.css";
import useTranslation from "next-translate/useTranslation";

export function CookiePanel() {
    const [wasCookieMessage, setWasCookieMessage] = useState(false);
    const { t } = useTranslation("cookie");

    useEffect(() => {
        setWasCookieMessage(!!localStorage.getItem("wasCookie"));
    }, []);

    function handleClickCookiePanel() {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("wasCookie", "true");
        }
        setWasCookieMessage(true);
    }

    return wasCookieMessage ? null : (
        <div className={classes.panel}>
            <p>{t("messageCookie")}</p>
            <button className={classes.button} onClick={handleClickCookiePanel}>
                OK
            </button>
        </div>
    );
}
