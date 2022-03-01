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
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const PageContainer = styled("div")`
  display: flex;
  min-height: 100vh;
  flex-direction: column;  
`;

const Nav = styled(Navbar, globalOptions)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  box-shadow: none;
`;

const Main = styled("main", globalOptions)`
  flex: 1;
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  padding-bottom: 30px;
`;

const Foot = styled(Footer, globalOptions)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
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
                <Nav data-dm={darkMode}/>
                { mobile && (
                    <NavDrawer />
                )}

                <Main data-m={mobile} data-dm={darkMode}>
                    { props.children }
                </Main>

                <Foot data-dm={darkMode}/>
                <ReturnToTop />
                <ConsentToast />
            </PageContainer>
        </>
    );
}