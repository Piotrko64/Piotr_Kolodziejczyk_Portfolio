import { PropsGithubApi } from "../../../@types/api/GithubApiResponse";
import { NextImage } from "../../../ui/images/NextImage";
import classes from "./githubInvite.module.css";
import cx from "classnames";
import { ScrollParallax } from "react-just-parallax";
import { AnimatedCounter } from "../../../ui/animatedCounter/AnimatedCounter";
import useTranslation from "next-translate/useTranslation";

export function GithubInviteMainComponent({ dataGithub }: PropsGithubApi) {
    const { followers, publicRepos } = dataGithub;
    const { t } = useTranslation("github");

    return (
        <div className={classes.back}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <div>
                        <NextImage
                            imgURL={"/assets/icons/githubIcon.png"}
                            additionalClass={classes.image}
                        />
                    </div>
                    <h2 className={classes.h2}>
                        <a href="https://github.com/Piotrko64">{t("visit")}</a>
                    </h2>
                    <div></div>
                </div>
                <div className={classes.lineInfo}>
                    {t("amountProjects")}:
                    <div className={cx("boldRed", classes.span)}>
                        <AnimatedCounter endNumber={publicRepos} />
                    </div>
                </div>
                <div className={classes.lineInfo}>
                    {t("followers")}:
                    <div className={cx("boldYellow", classes.span)}>
                        <AnimatedCounter endNumber={followers} />
                    </div>
                </div>
            </div>
        </div>
    );
}
