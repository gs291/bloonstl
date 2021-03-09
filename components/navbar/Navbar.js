import styled from "@emotion/styled";
import { AppBar } from "@material-ui/core";
import {useSelector } from "react-redux";

import DesktopSiteLinks from "./SiteLinks";
import MobileSiteLinks from "./MobileSiteLinks";
import { getMobile } from "../../lib/redux/selectors";

export const navHeight = "50px";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
  height: ${navHeight};
  align-items: ${props => props.mobile ? 'flex-start' : 'center'};
  justify-content: ${props => props.mobile ? 'flex-start' : 'center'};
  z-index: 99999;
`;

export default function Navbar({ className }) {
    const mobile = useSelector(getMobile);
    return (
      <>
          <Nav position="static" className={ className } mobile={mobile.toString()}>
              { mobile && <MobileSiteLinks /> }
              { !mobile && <DesktopSiteLinks /> }
          </Nav>
      </>
    );
}