import styled from "@emotion/styled";
import {useSelector } from "react-redux";
import { AppBar } from "@material-ui/core";

import SiteLinks from "./SiteLinks";
import {siteSizes} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";

export default function Navbar({ className }) {
    const mobile = useSelector(getMobile);

    const Nav = styled(AppBar)`
      display: flex;
      flex-direction: row;
      height: ${ siteSizes.nav.height };
      align-items: center;
      justify-content: ${mobile ? 'flex-start' : 'center'};
      z-index: 99999;
    `;

    return (
      <>
          <Nav position="static" className={ className } >
              <SiteLinks />
          </Nav>
      </>
    );
}