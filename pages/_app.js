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
import configureStore from "../lib/redux/store";
import siteColors from "../lib/utils/siteColors";

const theme = createTheme({
    typography: {
        fontFamily: font_family,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1536,
        }
    }
});

const globals = css`
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
  
  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: ${font_family};
    scroll-behavior: smooth;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${siteColors.accent.light};

    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    -webkit-box-shadow: 0 0 10px ${siteColors.accent.light}, 0 0 5px ${siteColors.accent.light};
    box-shadow: 0 0 10px ${siteColors.accent.light}, 0 0 5px ${siteColors.accent.light};
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
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
