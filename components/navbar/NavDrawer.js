import styled from "@emotion/styled";
import {Drawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import { nav as navSizes } from "../../lib/site-sizes.json";
import {middle} from "../../lib/site-links.json";
import { nav } from "../../lib/site-colors.json";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";
import NavLink from "./NavLink";

const DrawerContainer = styled.div`
  width: 250px;
  height: 100%;
  padding-top: ${ navSizes.height };
  background-color: ${ nav.dark };
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
                    { middle.map(mid => <NavLink {...mid} closeDrawer={closeDrawer}/>) }
                </DrawerContainer>
            </Drawer>
        </>
    );
}