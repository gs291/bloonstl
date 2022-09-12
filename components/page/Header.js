import Head from "next/head";
import {useTheme} from '@mui/material/styles';


/**
 * Website header
 *
 * @param {Object} props Component props
 * @param {string} props.title Title to display for the website (in the tab name)
 */
export default function Header({title}) {
    const theme = useTheme();

    const barColor = theme.palette.background.default;

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