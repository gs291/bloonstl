import { Provider } from "react-redux";
import { Global, css } from "@emotion/react";

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
`;

function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Global styles={ globals } />
          <Component {...pageProps} />
      </Provider>
  );
}

export default App
