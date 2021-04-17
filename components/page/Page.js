import {useEffect} from "react";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import { Container, useMediaQuery } from "@material-ui/core";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavDrawer from "../navbar/NavDrawer";
import siteColors from "../../lib/utils/siteColors";
import { updateMobile } from "../../lib/redux/actions";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled(Navbar)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  box-shadow: none;
`;

const Main = styled.main`
  flex: 1;
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  padding-top: 15px;
  ${props => !props["data-m"] ? "padding-right: 10px;" : ""}
  padding-bottom: 30px;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Foot = styled(Footer)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  justify-content: center;
  align-items: center;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    return (
        <PageContainer>
            <Nav data-dm={darkMode}/>
            { mobile && (
                <NavDrawer />
            )}

            <Main data-m={mobile} data-dm={darkMode}>
                <MainContainer maxWidth="md">
                    { props.children }
                </MainContainer>
            </Main>

            <Foot data-dm={darkMode}/>
        </PageContainer>
    );
}