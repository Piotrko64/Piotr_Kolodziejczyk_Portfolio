import { useDataFromGithub } from "../../../hooks/github/useDataFromGithub";
import classes from "./githubInvite.module.css";

export function GithubInviteMainComponent() {
    const dataGithub = useDataFromGithub();

    return (
        <div className={classes.back}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <div></div>
                    <h2>Odwiedź mojego Githuba</h2>
                    <div></div>
                </div>
                <p>{JSON.stringify(dataGithub)}</p>
            </div>
        </div>
    );
}
