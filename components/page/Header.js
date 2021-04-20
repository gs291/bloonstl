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
            </Head>
        </>
    );
}