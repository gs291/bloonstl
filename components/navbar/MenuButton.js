import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import {useDispatch, useSelector} from "react-redux";

import siteSizes from "../../lib/utils/siteSizes";
import {getDrawer} from "../../lib/redux/selectors";
import {toggleDrawer} from "../../lib/redux/actions";


const Menu = styled(Button)`
  color: ${props => props.theme.palette.text.primary};
  height: ${siteSizes.nav.height};
  width: 100px;
`;

/**
 * Menu button displayed in the navbar in mobile mode
 */
export default function MenuButton() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);

    return (
        <>
            <Menu onClick={() => dispatch(toggleDrawer())}>
                { drawer && (
                    <ClearIcon fontSize="large"/>
                )}
                { !drawer && (
                    <MenuIcon fontSize="large"/>
                )}
            </Menu>
        </>
    );
}