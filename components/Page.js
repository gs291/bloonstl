import Head from "next/head";
import styled from "@emotion/styled";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled(Navbar)`
  background-color: #1F1F1F;
`;

const Main = styled.main`
  flex: 1;
  background-color: #121212;
`;

const Foot = styled(Footer)`
  background-color: #1F1F1F;
`;

export default function Page(props) {
    return (
        <PageContainer>
            <Head>
                <title>{ props.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Nav />

            <Main>
                { props.children }
            </Main>

            <Foot />

        </PageContainer>
    );
}