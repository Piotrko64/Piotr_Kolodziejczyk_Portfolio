import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { NextImage } from "../../../ui/images/NextImage";
import classes from "./blog.module.css";
import cx from "classnames";

export function Blog() {
    const { t } = useTranslation("blog");

    return (
        <>
            <BigTitle title={t("title")} />
            <div className={cx(classes.rowFlex, "")}>
                <div className="flexCenter">
                    <h3> {t("h3")} </h3>

                    <p className={classes.paragraph}>{t("description")}</p>
                    <a
                        href="https://www.linkedin.com/in/piotr-kołodziejczyk/"
                        target="_blank"
                        className={classes.linkButton}
                    >
                        {t("link")}
                    </a>
                </div>
                <NextImage
                    imgURL="/assets/blog/blog_linkedin.png"
                    additionalClass={cx(classes.imageBlog)}
                    modeContain
                    title="Linkedin Blog"
                />
            </div>
        </>
    );
}
