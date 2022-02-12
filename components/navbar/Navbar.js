import styled from "@emotion/styled";
import {AppBar} from "@mui/material";
import {useSelector} from "react-redux";

import SiteLinks from "./SiteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Nav = styled(AppBar, globalOptions)`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1500;
  height: ${siteSizes.nav.height};
  justify-content: ${props => props["data-m"] ? "flex-start" : "center"};
`;

/**
 * Navigation bar
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function Navbar({className}) {
    const mobile = useSelector(getMobile);

    return (
      <>
          <Nav position="static" className={className} data-m={mobile}>
              <SiteLinks />
          </Nav>
      </>
    );
}