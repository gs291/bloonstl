import {useEffect} from "react";
import {Global, css} from "@emotion/react";
import {styled} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavDrawer from "../navbar/NavDrawer";
import ReturnToTop from "../button/ReturnToTop";
import {getMobile} from "../../lib/redux/selectors";
import {ga4SendPageView} from "../../lib/utils/ga4";
import {updateMobile} from "../../lib/redux/actions";
import ConsentToast from "../legal/consent/ConsentToast";


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
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    const screen = useMediaQuery("(max-width: 900px)");
    useEffect(() => {
        dispatch(updateMobile(screen));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screen]);

    const globals = css`
      body {
        background-color: ${theme.palette.background.default}
      }
      
      ::-webkit-scrollbar {
        width: 10px;
        background: ${theme.palette.scrollbar.primary};
      }
    
      ::-webkit-scrollbar-track {
        background-color: ${theme.palette.scrollbar.primary};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.palette.scrollbar.thumb};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.palette.scrollbar.hover};
      }
      
      /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${theme.palette.primary.main};

    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    -webkit-box-shadow: 0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main};
    box-shadow: 0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main};
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
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