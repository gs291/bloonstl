import { useEffect } from "react";
import {Provider} from "react-redux";
import { Global, css } from "@emotion/react";
import {createTheme} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {PersistGate} from "redux-persist/integration/react";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";

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

const store = configureStore();

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
