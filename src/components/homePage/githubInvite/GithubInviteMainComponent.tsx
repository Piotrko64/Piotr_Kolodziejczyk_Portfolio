import { PropsGithubApi } from "../../../@types/api/GithubApiResponse";
import { NextImage } from "../../../ui/images/NextImage";
import classes from "./githubInvite.module.css";
import cx from "classnames";
import { ScrollParallax } from "react-just-parallax";
import { AnimatedCounter } from "../../../ui/animatedCounter/AnimatedCounter";

export function GithubInviteMainComponent({ dataGithub }: PropsGithubApi) {
    const { followers, publicRepos } = dataGithub;
    return (
        <div className={classes.back}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <div>
                        <ScrollParallax strength={0.05}>
                            <NextImage
                                imgURL={"/assets/icons/githubIcon.png"}
                                additionalClass={classes.image}
                            />
                        </ScrollParallax>
                    </div>
                    <h2 className={classes.h2}>Odwiedź mojego Githuba</h2>
                    <div></div>
                </div>
                <p>
                    Liczba prywatnych projektów:
                    <span className={cx("boldRed", classes.span)}>
                        <AnimatedCounter endNumber={publicRepos} />
                    </span>
                </p>
                <p>
                    Liczba obserwatorów:
                    <span className={cx("boldYellow", classes.span)}>
                        <AnimatedCounter endNumber={followers} />
                    </span>
                </p>
            </div>
        </div>
    );
}
