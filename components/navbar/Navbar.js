import styled from "@emotion/styled";
import {useSelector } from "react-redux";
import { AppBar } from "@material-ui/core";

import SiteLinks from "./SiteLinks";
import {siteSizes} from "../../lib/utils";
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
          <Nav position="static" className={ className } mobile={mobile ? 1 : 0}>
              <SiteLinks />
          </Nav>
      </>
    );
}