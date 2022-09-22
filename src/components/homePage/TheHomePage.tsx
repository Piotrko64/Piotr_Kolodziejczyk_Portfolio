import { GithubApiResponse } from "../../@types/api/GithubApiResponse";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage({ dataGithub }: { dataGithub: GithubApiResponse }) {
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />

            <BackgroundCirclesMainComponent>
                <></>
            </BackgroundCirclesMainComponent>

            <GithubInviteMainComponent dataGithub={dataGithub} />
        </>
    );
}
