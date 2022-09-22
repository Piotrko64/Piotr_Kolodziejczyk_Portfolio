import { GithubApiResponse } from "../../@types/api/GithubApiResponse";
import { useDataFromGithub } from "../../hooks/github/useDataFromGithub";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage({ dataGithub }: { dataGithub: GithubApiResponse }) {
    const a = useDataFromGithub();
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />

            <BackgroundCirclesMainComponent>
                <>{JSON.stringify(a)}</>
            </BackgroundCirclesMainComponent>

            <GithubInviteMainComponent dataGithub={dataGithub} />
        </>
    );
}
