import classes from "./contact.module.css";
import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { NextImage } from "../../../ui/images/NextImage";
import { useState } from "react";
import cx from "classnames";
import { MouseParallax } from "react-just-parallax";

export function Contact() {
    const titlesLang = useTranslation("titles");
    const contactLang = useTranslation("contact");

    const [isCopy, setIsCopy] = useState(false);

    function handleCopyEmail() {
        navigator.clipboard.writeText("Piotrko64@gmail.com");
        setIsCopy(true);
    }

    return (
        <>
            <BigTitle title={titlesLang.t("contact")} />
            <p className={classes.p}>{contactLang.t("contactText")}</p>

            <button
                className={classes.buttonCopy}
                onClick={handleCopyEmail}
                onBlur={() => setIsCopy(false)}
                tabIndex={0}
            >
                Piotrko64@gmail.com{" "}
                <NextImage
                    imgURL="/assets/icons/copy.png"
                    additionalClass={classes.icon}
                />
                <div
                    className={cx(classes.wasCopied, isCopy && classes.wasCopy)}
                >
                    {contactLang.t("textIsCopy")}
                </div>
            </button>
        </>
    );
}
