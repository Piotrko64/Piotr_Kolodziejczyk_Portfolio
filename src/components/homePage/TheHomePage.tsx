import { PropsGithubApi } from "../../@types/api/GithubApiResponse";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { Cooperation } from "./cooperation/Cooperation";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SelectedProjectsMainComponent } from "./selectedProjects/SelectedProjectsMainComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage({ dataGithub }: PropsGithubApi) {
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />

            <BackgroundCirclesMainComponent>
                <>
                    <SelectedProjectsMainComponent />
                    <GithubInviteMainComponent dataGithub={dataGithub} />
                </>
            </BackgroundCirclesMainComponent>
            <Cooperation />
        </>
    );
}
