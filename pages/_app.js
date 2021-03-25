import { useEffect } from "react";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, StylesProvider, ThemeProvider} from "@material-ui/core/styles";

import store from "../lib/redux/store";
import Page from "../components/page/Page";
import {font_family} from "../lib/utils";

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
    overflow: overlay;
    font-family: ${font_family};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default function App({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
            <Global styles={ globals } />
                <StylesProvider injectFirst>
                        <Page>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Component {...pageProps} />
                            </ThemeProvider>
                        </Page>
                </StylesProvider>
        </Provider>
    );
}
