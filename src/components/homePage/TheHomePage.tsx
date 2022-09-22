import { useDataFromGithub } from "../../hooks/github/useDataFromGithub";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage() {
    const a = useDataFromGithub();
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />

            <BackgroundCirclesMainComponent>
                <>{JSON.stringify(a)}</>
            </BackgroundCirclesMainComponent>

            <GithubInviteMainComponent />
        </>
    );
}
