import {Drawer} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import DarkMode from "../dark-mode/DarkMode";
import siteLinks from "../../lib/utils/siteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";


const TopDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100%;
  }
`;

const DrawerContainer = styled("div")`
  height: 100%;
  padding-top: ${siteSizes.nav.height};
  padding-bottom: 5%;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: auto;
`;

const DrawerLink = styled(NavLink)`
  flex: 1;
`;

const DrawerDarkMode = styled(DarkMode)`
  flex: 1;
`;

/**
 * Navbar mobile drawer
 */
export default function NavDrawer() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);

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
                <DrawerContainer>
                    { siteLinks.middle.links.map(mid => <DrawerLink key={mid.key} {...mid} closeDrawer={closeDrawer}/>) }
                    { siteLinks.middle.collapse.map(mid => <DrawerLink key={mid.key} {...mid} closeDrawer={closeDrawer}/>) }
                    <DrawerDarkMode />
                </DrawerContainer>
            </TopDrawer>
        </>
    );
}