import styled from "@emotion/styled";
import {Drawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {navHeight} from "./Navbar";
import {NavLink} from "./SiteLinks";
import {middle} from "../../lib/site-links.json";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";

const DrawerContainer = styled.div`
  padding-top: ${navHeight};
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
                    { middle.map(mid => <NavLink {...mid} closeDrawer={closeDrawer}/>) }
                </DrawerContainer>
            </Drawer>
        </>
    );
}