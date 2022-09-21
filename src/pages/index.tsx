import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { CanvasContainer } from "../components/canvas/CanvasContainer";
import { TheHomePage } from "../components/homePage/TheHomePage";

const Home: NextPage = ({ dataResult }: any) => {
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
                <TheHomePage />
                {JSON.stringify(dataResult)}
            </CanvasContainer>

            <footer></footer>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const dataResult = await fetch(`${process.env.URLPAGE}/api/githubData`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const t = await dataResult.json();
    return {
        props: { dataResult: t },
    };
}
