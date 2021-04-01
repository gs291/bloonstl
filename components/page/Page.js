import Head from "next/head";
import {useEffect} from "react";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import { Container, useMediaQuery } from "@material-ui/core";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import {siteColors} from "../../lib/utils";
import NavDrawer from "../navbar/NavDrawer";
import {getMobile} from "../../lib/redux/selectors";
import { updateMobile } from "../../lib/redux/actions";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled(Navbar)`
  background-color: ${ siteColors.nav.dark }
`;

const Main = styled.main`
  flex: 1;
  background-color: ${ siteColors.background.main.dark };
  padding-top: 15px;
  ${props => !props.mobile ? "padding-right: 10px;" : ""}
  padding-bottom: 30px;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Foot = styled(Footer)`
  background-color: ${ siteColors.nav.dark };
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen])

    return (
        <PageContainer>
            <Head>
                <title>{ props.title && props.title + " - " }BloonsTL</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <NavDrawer />
            <Main mobile={mobile}>
                <MainContainer maxWidth="lg">
                    { props.children }
                </MainContainer>
            </Main>

            <Foot />
        </PageContainer>
    );
}