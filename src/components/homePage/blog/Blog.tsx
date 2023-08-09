import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { NextImage } from "../../../ui/images/NextImage";
import classes from "./blog.module.css";
import cx from "classnames";

export function Blog() {
    return (
        <>
            <BigTitle title="Głodny Wiedzy?" />
            <div className={cx(classes.rowFlex, "")}>
                <div className="flexCenter">
                    <h3> Zapraszam na mój profil na linkedinie! </h3>

                    <p className={classes.paragraph}>
                        {" "}
                        Swój profil na Linkedinie wzbogacam o cenne wpisy o
                        tematyce związanej z JavaScriptem, Frontendem,
                        Programowaniem i SEO. Prowadze w ten sposób bloga
                        technicznego dzięki któremu mogę dzielić się już zdobytą
                        wiedzą. Znajdziesz tam ciekawe posty mojego autorstwa
                        poruszające zaawansowane jak i poboczne kwestie
                        wcześniej wymienionych technologii.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/piotr-kołodziejczyk/"
                        target="_blank"
                        className={classes.linkButton}
                    >
                        {" "}
                        Przejdź na Linkedin{" "}
                    </a>
                </div>
                <NextImage
                    imgURL="/assets/blog/blog_linkedin.png"
                    additionalClass={cx(classes.imageBlog)}
                    modeContain
                />
            </div>
        </>
    );
}
