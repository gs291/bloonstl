import {useEffect} from "react";
import styled from "@emotion/styled";
import {Global, css} from "@emotion/react";
import {useMediaQuery} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavDrawer from "../navbar/NavDrawer";
import ReturnToTop from "../button/ReturnToTop";
import siteColors from "../../lib/utils/siteColors";
import {ga4SendPageView} from "../../lib/utils/ga4";
import {updateMobile} from "../../lib/redux/actions";
import ConsentToast from "../legal/consent/ConsentToast";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const PageContainer = styled("div")`
  display: flex;
  min-height: 100vh;
  flex-direction: column;  
`;

const Nav = styled(Navbar)`
  background-color: ${props => props.theme.palette.background.default};
  box-shadow: none;
`;

const Main = styled("main")`
  flex: 1;
  background-color: ${props => props.theme.palette.background.default};
  padding-bottom: 30px;
`;

const Foot = styled(Footer)`
  background-color: ${props => props.theme.palette.background.main};
  color: ${props => props.theme.palette.text.primary};
`;

/**
 * Website page layout
 *
 * @param {Object} props Page props
 */
export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const screen = useMediaQuery("(max-width: 900px)");
    useEffect(() => {
        dispatch(updateMobile(screen));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screen]);

    const globals = css`
      body {
        background-color: ${darkMode ? siteColors.page.dark : siteColors.page.light}
      }
      
      ::-webkit-scrollbar {
        width: 10px;
        background: ${darkMode ? siteColors.scroll.dark : siteColors.scroll.light};
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

    useEffect(() => {
        ga4SendPageView();
    }, []);

    return (
        <>
            <Global styles={globals} />
            <PageContainer>
                <Nav/>
                { mobile && (
                    <NavDrawer />
                )}

                <Main data-m={mobile}>
                    { props.children }
                </Main>

                <Foot />
                <ReturnToTop />
                <ConsentToast />
            </PageContainer>
        </>
    );
}