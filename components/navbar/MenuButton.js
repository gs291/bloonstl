import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import {useDispatch, useSelector} from "react-redux";

import {getDrawer} from "../../lib/redux/selectors";
import { toggleDrawer } from "../../lib/redux/actions";

const Menu = styled(Button)`
  color: white;
`;

export default function MenuButton() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);

    return (
        <>
            <Menu onClick={() => dispatch(toggleDrawer())}>
                { drawer && (
                    <ClearIcon />
                )}
                { !drawer && (
                    <MenuIcon />
                )}
            </Menu>
        </>
    );
}