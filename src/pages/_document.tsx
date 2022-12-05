import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest/manifest.json" />
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta
                    name="apple-mobile-web-app-title"
                    content="PK | Portfolio"
                ></meta>
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                ></meta>
                <meta name="theme-color" content="#1d1c2d" />
                <link
                    rel="apple-touch-icon"
                    href="/assets/icons/manifest/icon48x48.png"
                    sizes="48x48"
                ></link>
                <link
                    rel="apple-touch-icon"
                    href="/assets/icons/manifest/icon144x144.png"
                    sizes="144x144"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="shortcut icon" href="/favicon.ico"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
