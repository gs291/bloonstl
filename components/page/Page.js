import {useEffect} from "react";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import { Container, useMediaQuery } from "@material-ui/core";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavDrawer from "../navbar/NavDrawer";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import { updateMobile } from "../../lib/redux/actions";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled(Navbar)`
  background-image: linear-gradient(${ siteColors.nav.dark }, ${ siteColors.background.main.dark });
  box-shadow: none;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Foot = styled(Footer)`
  background-image: linear-gradient(${ siteColors.background.main.dark }, ${ siteColors.nav.dark });
  justify-content: center;
  align-items: center;
  color: ${siteColors.text.dark};
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    const Main = styled.main`
      flex: 1;
      background-color: ${ siteColors.background.main.dark };
      padding-top: 15px;
      ${!mobile ? "padding-right: 10px;" : ""}
      padding-bottom: 30px;
    `;

    return (
        <PageContainer>
            <Nav />
            { mobile && (
                <NavDrawer />
            )}

            <Main >
                <MainContainer maxWidth="md">
                    { props.children }
                </MainContainer>
            </Main>

            <Foot />
        </PageContainer>
    );
}