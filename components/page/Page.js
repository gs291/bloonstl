import {useEffect} from "react";
import styled from "@emotion/styled";
import {Global, css} from "@emotion/react";
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
  padding-bottom: 30px;
`;

const Foot = styled(Footer)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const screen = useMediaQuery("(max-width: 960px)");
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    const globals = css`
      ::-webkit-scrollbar {
        width: 10px;
        background-color: ${darkMode ? siteColors.scroll.dark : siteColors.scroll.light};
      }
    
      ::-webkit-scrollbar-track {
        background-color: ${darkMode ? siteColors.scroll.dark : siteColors.scroll.light};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb {
        background-color: ${darkMode ? siteColors.scroll.thumb.dark : siteColors.scroll.thumb.light};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${darkMode ? siteColors.scroll.hover.dark : siteColors.scroll.hover.light};
      }
    `;

    return (
        <>
            <Global styles={globals} />
            <PageContainer>
                <Nav data-dm={darkMode}/>
                { mobile && (
                    <NavDrawer />
                )}

                <Main data-m={mobile} data-dm={darkMode}>
                    { props.children }
                </Main>

                <Foot data-dm={darkMode}/>
            </PageContainer>
        </>
    );
}