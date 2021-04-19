import styled from "@emotion/styled";
import {Drawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import siteLinks from "../../lib/utils/siteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {toggleDrawer} from "../../lib/redux/actions";
import {getDarkMode, getDrawer} from "../../lib/redux/selectors";
import DarkMode from "../dark-mode/DarkMode";

const TopDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100%;
  }
`;

const DrawerContainer = styled.div`
  height: 100%;
  padding-top: ${siteSizes.nav.height};
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
  color: ${props => props["data-dm"] ?  siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
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
                    { siteLinks.middle.map(mid => <NavLink {...mid} closeDrawer={closeDrawer}/>) }
                    <DarkMode />
                </DrawerContainer>
            </TopDrawer>
        </>
    );
}