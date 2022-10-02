import classes from "./oneProject.module.css";
import "keen-slider/keen-slider.min.css";
import cx from "classnames";
import { OneProjectInterface } from "../../../../../@types/graphql/ResponseProjectsData";
import { NextImage } from "../../../../../ui/images/NextImage";
import { RichText } from "@graphcms/rich-text-react-renderer";

export function OneProject({
    dataProject,
}: {
    dataProject: OneProjectInterface;
}) {
    const { title, mainImage, describe } = dataProject;

    return (
        <div className={cx("keen-slider__slide", classes.slide)}>
            <>
                <NextImage
                    imgURL={mainImage.url}
                    additionalClass={classes.photo}
                />
                <h3>{title}</h3>

                <div>
                    {dataProject.technologies.map((tool) => (
                        <span>{tool}</span>
                    ))}
                </div>
                <div>
                    <RichText content={describe.raw} />
                </div>
            </>
        </div>
    );
}
