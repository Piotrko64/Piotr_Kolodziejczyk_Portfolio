import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Octokit } from "octokit";
import { CanvasContainer } from "../components/canvas/CanvasContainer";
import { TheHomePage } from "../components/homePage/TheHomePage";
import { getCorrectLanguagePost } from "../helpers/getCorrectLanguagePost";
import { Language } from "../@types/Languages";
import { getProjectsData } from "../graphql/SSG/getProjectsData";
import { revalidate } from "../config/revalidate";
import { ChangeLangPanel } from "../ui/changeLangPanel/ChangeLangePanel";

const Home: NextPage = ({
    dataGithub,
    dataProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Piotr Kołodziejczyk | Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio Website by Piotr Kołodziejczyk"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CanvasContainer>
                <TheHomePage
                    dataGithub={dataGithub}
                    dataProjects={dataProjects}
                />
            </CanvasContainer>
            <ChangeLangPanel />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const octokit = new Octokit({
        auth: process.env.TOKENGITHUB,
    });

    const dataGithub = await octokit.request("GET /users/Piotrko64", {
        username: "Piotrko64",
    });

    const { followers, public_repos } = dataGithub.data;

    const dataResponseToProjectsSection = await getProjectsData();

    return {
        props: {
            dataGithub: {
                followers,
                publicRepos: public_repos,
            },

            dataProjects: getCorrectLanguagePost(
                dataResponseToProjectsSection,
                locale as Language
            ),
        },
        revalidate,
    };
};
