import {useEffect} from "react";
import Router from "next/router";
import NProgress from "nprogress";
import {Provider} from "react-redux";
import {createTheme} from "@mui/material";
import {Global, css} from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {PersistGate} from "redux-persist/integration/react";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";

import Page from "../components/page/Page";
import {font_family} from "../lib/utils/utils";
import {ga4Initialize} from "../lib/utils/ga4";
import configureStore from "../lib/redux/store";

const theme = createTheme({
    typography: {
        fontFamily: font_family,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1536,
        }
    }
});

const globals = css`
  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: ${font_family};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

const store = configureStore();

export default function App({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }

        // Progress bar for page switching
        NProgress.configure({ showSpinner: false });
        const progressStart = () => NProgress.start();
        const progressEnd = () => NProgress.done();

        Router.events.on('routeChangeStart', progressStart);
        Router.events.on('routeChangeComplete', progressEnd);
        Router.events.on('routeChangeError', progressEnd);

        ga4Initialize();

        return () => {
            Router.events.off('routeChangeStart', progressStart)
            Router.events.off('routeChangeComplete', progressEnd);
            Router.events.off('routeChangeError', progressEnd);
        }
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={store.__PERSISTOR}>
                <Global styles={globals} />
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Page>
                            <Component {...pageProps} />
                        </Page>
                    </ThemeProvider>
                </StyledEngineProvider>
            </PersistGate>
        </Provider>
    );
}
