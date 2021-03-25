import styled from "@emotion/styled";
import { AppBar } from "@material-ui/core";
import {useSelector } from "react-redux";

import {siteSizes} from "../../lib/utils";
import DesktopSiteLinks from "./SiteLinks";
import MobileSiteLinks from "./MobileSiteLinks";
import {getMobile} from "../../lib/redux/selectors";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
  height: ${ siteSizes.nav.height };
  align-items: center;
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