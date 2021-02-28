import { StylesProvider } from "@material-ui/core/styles";

import Page from "../components/Page";

export default function App() {
    return (
        <>
            <StylesProvider injectFirst>
                <Page title="test">
                    <div>okay?</div>
                </Page>
            </StylesProvider>
        </>
  );
}
