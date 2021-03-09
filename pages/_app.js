import { Provider } from "react-redux";
import { Global, css } from "@emotion/react";
import { StylesProvider } from "@material-ui/core/styles";

import store from "../lib/redux/store";

const globals = css` 
  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    return (
        <Provider store={store}>
            <Global styles={ globals } />
            <StylesProvider injectFirst>
                <Component {...pageProps} />
            </StylesProvider>
        </Provider>
    );
}
