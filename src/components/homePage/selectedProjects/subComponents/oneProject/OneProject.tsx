import classes from "./oneProject.module.css";
import "keen-slider/keen-slider.min.css";
import cx from "classnames";
import { OneProjectInterface } from "../../../../../@types/graphql/ResponseProjectsData";
import { NextImage } from "../../../../../ui/images/NextImage";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { colorBackgroundTechnolog } from "./helpers/colorBackgroundTechnolog";

export function OneProject({
    dataProject,
}: {
    dataProject: OneProjectInterface;
}) {
    const { title, mainImage, describe, colorTheme } = dataProject;

    return (
        <div
            className={cx("keen-slider__slide", classes.slide)}
            style={{ borderColor: colorTheme.hex }}
        >
            <>
                <NextImage
                    imgURL={mainImage.url}
                    additionalClass={classes.photo}
                />
                <div className={classes.mainText}>
                    <h3 className={classes.h3}>{title}</h3>

                    <div className={classes.technologies}>
                        {dataProject.technologies.map((tool) => (
                            <span
                                key={tool}
                                className={classes.span}
                                style={{
                                    backgroundColor:
                                        colorBackgroundTechnolog(tool) ||
                                        "var(--grey)",
                                }}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <div>
                        <RichText content={describe.raw} />
                    </div>
                </div>
                <div className={classes.links}>
                    {dataProject.githubLink && (
                        <a
                            href={dataProject.githubLink}
                            className={classes.a}
                            target="_blank"
                        >
                            <NextImage
                                imgURL="/assets/icons/githubIcon.png"
                                additionalClass={classes.icon}
                            />
                        </a>
                    )}
                    {dataProject.liveLink && (
                        <a
                            href={dataProject.githubLink}
                            className={classes.a}
                            target="_blank"
                        >
                            <NextImage
                                imgURL="/assets/icons/link.png"
                                additionalClass={classes.icon}
                            />
                        </a>
                    )}
                </div>
            </>
        </div>
    );
}
