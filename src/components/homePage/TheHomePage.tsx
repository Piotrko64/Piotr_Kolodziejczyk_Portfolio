import {
    GithubApiResponse,
    PropsGithubApi,
} from "../../@types/api/GithubApiResponse";
import {
    ArrayProjects,
    ResponseProjectsData,
} from "../../@types/graphql/ResponseProjectsData";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { Contact } from "./contact/Contact";
import { Cooperation } from "./cooperation/Cooperation";
import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SelectedProjectsMainComponent } from "./selectedProjects/SelectedProjectsMainComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

type Props = {
    dataGithub: GithubApiResponse;
    dataProjects: ArrayProjects;
};

export function TheHomePage({ dataGithub, dataProjects }: Props) {
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />

            <BackgroundCirclesMainComponent>
                <>
                    <SelectedProjectsMainComponent
                        dataProjects={dataProjects}
                    />
                    <GithubInviteMainComponent dataGithub={dataGithub} />
                    <Cooperation />
                    <Contact />
                </>
            </BackgroundCirclesMainComponent>
        </>
    );
}
