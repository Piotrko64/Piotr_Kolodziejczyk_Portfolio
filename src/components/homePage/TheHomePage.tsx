import { GithubInviteMainComponent } from "./githubInvite/GithubInviteMainComponent";
import { MainHomeComponent } from "./mainHomeComponents/MainHomeComponent";
import { SkillsBoardMainComponent } from "./skillsBoard/SkillsBoardMainComponent";

export function TheHomePage() {
    return (
        <>
            <MainHomeComponent />
            <SkillsBoardMainComponent />
            <GithubInviteMainComponent />
        </>
    );
}
