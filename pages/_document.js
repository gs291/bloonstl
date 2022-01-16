import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head >
                    <link rel="icon" href="/favicon.ico" />

                    {/* Responsive Meta Tag */}
                    <meta name="viewport" content="initial-scale=1, width=device-width" />

                    {/*// <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ERWW6617M8" />
                    <script
                        dangerouslySetInnerHTML={{ __html:
                                `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ERWW6617M8');`
                        }}
                    />

                    {/*// <!-- Google AdSense --> */}
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4102574682241123"
                        crossOrigin="anonymous"
                    />

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