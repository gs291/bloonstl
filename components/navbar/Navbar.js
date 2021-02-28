import styled from "@emotion/styled";
import { AppBar } from "@material-ui/core";
import { useSelector } from "react-redux";

import SiteLinks from "./SiteLinks";
import MenuButton from "./MenuButton";
import { getMobile } from "../../lib/redux/selectors";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default function Navbar({ className }) {
    const mobile = useSelector(getMobile);
    return (
      <>
          <Nav position="static" className={ className }>
              { mobile && <MenuButton /> }
              { !mobile && <SiteLinks /> }
          </Nav>
      </>
    );
}