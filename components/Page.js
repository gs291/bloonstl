import Head from "next/head";
import styled from "@emotion/styled";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Page(props) {
    return (
        <PageContainer>
            <Head>
                <title>{ props.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Navbar />

            <Main>
                { props.children }
            </Main>

            <Footer />

        </PageContainer>
    );
}