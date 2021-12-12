import Head from "next/head";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

export default function Header({ title }) {
    const darkMode = useSelector(getDarkMode);

    const barColor = darkMode ? siteColors.page.dark : siteColors.page.light;

    return (
        <>
            <Head>
                <title>{ title && `${title} - ` }Bloons</title>
                <link rel="icon" href="/favicon.ico" />

                {/*// <!-- Chrome, Firefox OS and Opera -->*/}
                <meta name="theme-color" content={barColor} />
                {/*// <!-- Windows Phone -->*/}
                <meta name="msapplication-navbutton-color" content={barColor} />
                {/*// <!-- iOS Safari -->*/}
                <meta name="apple-mobile-web-app-status-bar-style" content={barColor} />

                {/*// <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ERWW6617M8" />
                <script>
                    {
                        `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ERWW6617M8');`
                    }
                </script>

                {/*// <!-- Google Adsense --> */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4102574682241123"
                    crossOrigin="anonymous"
                />

            </Head>
        </>
    );
}