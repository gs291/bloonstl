import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { toggleDrawer } from "../../lib/redux/actions";

const Menu = styled(Button)`
  color: white;
`;

export default function MenuButton() {
    const dispatch = useDispatch();

    return (
        <>
            <Menu onClick={() => dispatch(toggleDrawer())}>
                <MenuIcon />
            </Menu>
        </>
    );
}