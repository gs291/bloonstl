import styled from "@emotion/styled";
import {Drawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";
import {siteColors, siteLinks, siteSizes} from "../../lib/utils";

const DrawerContainer = styled.div`
  width: 250px;
  height: 100%;
  padding-top: ${ siteSizes.nav.height };
  background-color: ${ siteColors.nav.dark };
  color: white;
  
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
            <Drawer
                open={ drawer }
                onClose={ () => dispatch(toggleDrawer()) }
            >
                <DrawerContainer>
                    { siteLinks.middle.map(mid => <NavLink {...mid} closeDrawer={closeDrawer}/>) }
                </DrawerContainer>
            </Drawer>
        </>
    );
}