import styled from "@emotion/styled";
import {Drawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import DarkMode from "../dark-mode/DarkMode";
import siteLinks from "../../lib/utils/siteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {toggleDrawer} from "../../lib/redux/actions";
import {getDarkMode, getDrawer} from "../../lib/redux/selectors";

const TopDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100%;
  }
`;

const DrawerContainer = styled.div`
  height: 100%;
  padding-top: ${siteSizes.nav.height};
  padding-bottom: 25%;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  color: ${props => props["data-dm"] ?  siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DrawerLink = styled(NavLink)`
  flex: 1;
`;

const DrawerDarkMode = styled(DarkMode)`
  flex: 1;
`;

export default function NavDrawer() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);
    const darkMode = useSelector(getDarkMode);

    const closeDrawer = () => {
        dispatch(toggleDrawer());
    };

    return (
        <>
            <TopDrawer
                open={ drawer }
                onClose={ () => dispatch(toggleDrawer()) }
                anchor="top"
                transitionDuration={350}
            >
                <DrawerContainer data-dm={darkMode}>
                    { siteLinks.middle.links.map(mid => <DrawerLink {...mid} closeDrawer={closeDrawer}/>) }
                    { siteLinks.middle.collapse.map(mid => <DrawerLink {...mid} closeDrawer={closeDrawer}/>) }
                    <DrawerDarkMode />
                </DrawerContainer>
            </TopDrawer>
        </>
    );
}