export interface GithubApiResponse {
    followers: number;
    publicRepos: number;
}
export type PropsGithubApi = { dataGithub: GithubApiResponse };
