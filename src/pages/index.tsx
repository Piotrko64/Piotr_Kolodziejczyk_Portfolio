import type { NextPage } from "next";
import Head from "next/head";
import { CanvasContainer } from "../components/canvas/CanvasContainer";
import { TheHomePage } from "../components/homePage/TheHomePage";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Piotr Kołodziejczyk | Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CanvasContainer>
                <TheHomePage />
            </CanvasContainer>

            <footer></footer>
        </div>
    );
};

export default Home;
