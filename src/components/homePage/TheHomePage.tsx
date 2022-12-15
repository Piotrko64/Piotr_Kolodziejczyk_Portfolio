import { GithubApiResponse } from "../../@types/api/GithubApiResponse";
import { ArrayProjects } from "../../@types/graphql/ResponseProjectsData";
import { About } from "./about/About";
import { BackgroundCirclesMainComponent } from "./backgroundCircles/BackgroundCirclesMainComponent";
import { Contact } from "./contact/Contact";
import { Cooperation } from "./cooperation/Cooperation";
import { Footer } from "./footer/Footer";
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
                    <About />

                    <GithubInviteMainComponent dataGithub={dataGithub} />
                    <Cooperation />
                    <Contact />
                    <Footer />
                </>
            </BackgroundCirclesMainComponent>
        </>
    );
}
