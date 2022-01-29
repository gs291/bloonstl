import Head from "next/head";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import React from "react";

export default function Header({ title }) {
    const darkMode = useSelector(getDarkMode);

    const barColor = darkMode ? siteColors.page.dark : siteColors.page.light;

    return (
        <>
            <Head>
                <title>{ title && `${title} - ` }Bloons</title>

                {/* Responsive Meta Tag */}
                <meta name="viewport" content="initial-scale=1, width=device-width" />

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