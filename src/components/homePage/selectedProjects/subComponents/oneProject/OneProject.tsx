import classes from "./oneProject.module.css";
import "keen-slider/keen-slider.min.css";
import cx from "classnames";
import { OneProjectInterface } from "../../../../../@types/graphql/ResponseProjectsData";
import { NextImage } from "../../../../../ui/images/NextImage";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { colorBackgroundTechnolog } from "./helpers/colorBackgroundTechnolog";
import { colorBorderTech } from "./helpers/colorBorderTech";
import useTranslation from "next-translate/useTranslation";

type Props = {
    dataProject: OneProjectInterface;
    color: string;
};

export function OneProject({ dataProject, color }: Props) {
    const { title, mainImage, describe } = dataProject;

    const { t } = useTranslation("projects");

    return (
        <div
            className={cx(classes.container, "keen-slider__slide")}
            style={{ background: color }}
        >
            <div className={cx(classes.slide)}>
                <>
                    <NextImage
                        imgURL={mainImage.url}
                        additionalClass={classes.photo}
                    />
                    <div className={classes.mainText}>
                        <div>
                            <h3 className={classes.h3}>{title}</h3>

                            <div className={classes.technologies}>
                                {dataProject.technologies.map((tool) => (
                                    <span
                                        key={tool}
                                        className={classes.span}
                                        style={{
                                            background:
                                                colorBackgroundTechnolog(
                                                    tool
                                                ) || "var(--grey)",
                                            border: colorBorderTech(tool),
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
                                    rel="noopener"
                                >
                                    <NextImage
                                        imgURL="/assets/icons/githubIcon.png"
                                        additionalClass={classes.icon}
                                    />
                                    {t("github")}
                                </a>
                            )}
                            {dataProject.liveLink && (
                                <a
                                    href={dataProject.liveLink}
                                    className={classes.a}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <NextImage
                                        imgURL="/assets/icons/web.png"
                                        additionalClass={classes.icon}
                                    />
                                    {t("web")}
                                </a>
                            )}
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}
