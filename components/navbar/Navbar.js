import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {AppBar} from "@material-ui/core";

import SiteLinks from "./SiteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import {getMobile} from "../../lib/redux/selectors";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 99999;
  height: ${siteSizes.nav.height};
  justify-content: ${props => props["data-m"] ? "flex-start" : "center"};
`;

export default function Navbar({ className }) {
    const mobile = useSelector(getMobile);

    return (
      <>
          <Nav position="static" className={ className } data-m={mobile}>
              <SiteLinks />
          </Nav>
      </>
    );
}