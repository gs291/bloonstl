import React from "react";
import {ServerStyleSheets} from "@mui/styles";
import Document, {Html, Head, Main, NextScript} from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head >
                    <link rel="icon" href="/favicon.ico" />

                    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" type="text/css" />

                    {/*// <!-- Google Search Console Verification --> */}
                    <meta name="google-site-verification" content="xdbV4aYKSCsp9idnlAXq_nxbcHSQggDBC2zy-3gqPJg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};