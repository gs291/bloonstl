import { useEffect } from "react";
import {Provider, useSelector} from "react-redux";
import { Global, css } from "@emotion/react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, StylesProvider, ThemeProvider} from "@material-ui/core/styles";

import store from "../lib/redux/store";
import {font_family} from "../lib/utils/utils";
import Page from "../components/page/Page";
import {getDrawer} from "../lib/redux/selectors";

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

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #327FB2;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #327FB2;
    border-radius: 20px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #225675;
    border-radius: 20px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #1A415A;
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
