import styled from "@emotion/styled";
import {Drawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import siteLinks from "../../lib/utils/siteLinks";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";

const TopDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100%;
  }
`;

const DrawerContainer = styled.div`
  height: 100%;
  padding-top: ${ siteSizes.nav.height };
  background-color: ${ siteColors.background.main.dark };
  color: ${siteColors.text.dark};
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
                    { siteLinks.middle.map(mid => <NavLink {...mid} closeDrawer={closeDrawer}/>) }
                </DrawerContainer>
            </TopDrawer>
        </>
    );
}