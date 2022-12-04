import { GithubApiResponse } from "../../@types/api/GithubApiResponse";
import { ArrayProjects } from "../../@types/graphql/ResponseProjectsData";
import { About } from "./about/About";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { Contact } from "./contact/Contact";
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
                    <About />
                    <Contact />
                </>
            </BackgroundCirclesMainComponent>
        </>
    );
}
