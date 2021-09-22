import styled from "@emotion/styled";
import {Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import {useDispatch, useSelector} from "react-redux";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {toggleDrawer} from "../../lib/redux/actions";
import {getDarkMode, getDrawer} from "../../lib/redux/selectors";

const Menu = styled(Button)`
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  height: ${siteSizes.nav.height};
  width: 100px;
`;

export default function MenuButton() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Menu onClick={() => dispatch(toggleDrawer())} data-dm={darkMode}>
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