import styled from "@emotion/styled";
import { AppBar } from "@material-ui/core";

import SiteLinks from "./SiteLinks";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
`;

export default function Navbar() {
    return (
      <>
          <Nav position="static">
              <SiteLinks />
          </Nav>
      </>
    );
}