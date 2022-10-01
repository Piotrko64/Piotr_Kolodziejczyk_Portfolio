import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Octokit } from "octokit";
import { getProjectsData } from "../../graphql/SSG/getProjectsData";
import { CanvasContainer } from "../components/canvas/CanvasContainer";
import { TheHomePage } from "../components/homePage/TheHomePage";

const Home: NextPage = ({
    dataGithub,
    dataProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head>
                <title>Piotr Kołodziejczyk | Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CanvasContainer>
                <TheHomePage dataGithub={dataGithub} />
            </CanvasContainer>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const octokit = new Octokit({
        auth: process.env.TOKENGITHUB,
    });

    const dataGithub = await octokit.request("GET /users/Piotrko64", {
        username: "Piotrko64",
    });

    const { followers, public_repos } = dataGithub.data;

    const dataProjects = await getProjectsData();

    return {
        props: {
            dataGithub: {
                followers,
                publicRepos: public_repos,
            },
            dataProjects,
        },
    };
};
