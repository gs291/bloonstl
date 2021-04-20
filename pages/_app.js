import { useEffect } from "react";
import {Provider} from "react-redux";
import { Global, css } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, StylesProvider, ThemeProvider} from "@material-ui/core/styles";

import store from "../lib/redux/store";
import Page from "../components/page/Page";
import {font_family} from "../lib/utils/utils";

const theme = createMuiTheme({
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
