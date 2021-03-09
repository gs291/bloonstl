import Head from "next/head";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from 'react-redux';
import { Container } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { updateMobile } from "../lib/redux/actions";
import NavDrawer from "./navbar/NavDrawer";
import {getMobile} from "../lib/redux/selectors";
import {useEffect} from "react";

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
  color: white;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Foot = styled(Footer)`
  background-color: #1F1F1F;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen])

    return (
        <PageContainer>
            <Head>
                <title>BloonsTL{ props.title && ": " + props.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Nav />
            <NavDrawer />
            <Main>
                <MainContainer maxWidth="lg">
                    { props.children }
                </MainContainer>
            </Main>

            <Foot />

        </PageContainer>
    );
}