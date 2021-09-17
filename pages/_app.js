import { useEffect } from "react";
import {Provider} from "react-redux";
import { Global, css } from "@emotion/react";
import {createTheme} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {StylesProvider, ThemeProvider} from "@material-ui/core/styles";

import Page from "../components/page/Page";
import {font_family} from "../lib/utils/utils";
import configureStore from "../lib/redux/store";

const theme = createTheme({
    typography: {
        fontFamily: font_family,
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
`;

export default function App({ Component, pageProps }) {
    const store = configureStore();

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
            <Global styles={globals} />
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Page>
                                <Component {...pageProps} />
                        </Page>
                    </ThemeProvider>
                </StylesProvider>
        </Provider>
    );
}
