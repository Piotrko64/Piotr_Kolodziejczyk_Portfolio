import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { CookiePanel } from "../components/cookiePanel/CookiePanel";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-ZRR2L2R34H"
            />
                
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NYX6HBD6YY', {
            page_path: window.location.pathname,
          });
        `,
                }}
            />
            <Component {...pageProps} /> <Analytics />
            <CookiePanel />
        </>
    );
}

export default MyApp;
