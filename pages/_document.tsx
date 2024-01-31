import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html dir="rtl">
            <Head>
                <link rel="stylesheet" href="/fonts/dana/dana.css" />
                <link rel="stylesheet" href="/fonts/peyda/peyda.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
