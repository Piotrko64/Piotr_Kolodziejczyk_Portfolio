import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage() {
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />
            {process.env.URLPAGE}
            <BackgroundCirclesMainComponent>
                <></>
            </BackgroundCirclesMainComponent>

            <GithubInviteMainComponent />
        </>
    );
}
