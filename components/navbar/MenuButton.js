import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { toggleDrawer } from "../../lib/redux/actions";

export default function MenuButton() {
    const dispatch = useDispatch();

    return (
        <>
            <Button onClick={() => dispatch(toggleDrawer())}>
                <MenuIcon />
            </Button>
        </>
    );
}