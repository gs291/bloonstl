import {useSelector} from "react-redux";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

import Page from "./Page";
import getThemeOptions from "../../lib/utils/theme";
import {getDarkMode} from "../../lib/redux/selectors";


export default function AppContainer({Component, pageProps}) {
    const darkMode = useSelector(getDarkMode);
    
    return (
        <>
            <ThemeProvider theme={getThemeOptions(darkMode)}>
                <CssBaseline />
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ThemeProvider>
        </>
    );
}