import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {styled, useTheme} from "@mui/material/styles";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import NavCollapse from "./NavCollapse";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import DarkMode from "../dark-mode/DarkMode";
import siteLinks from "../../lib/utils/siteLinks";
import {closeDrawer} from "../../lib/redux/actions";
import {getMobile} from "../../lib/redux/selectors";


const NavSection = styled("div")`
  flex: 0.5;
`;

const SmallNavSection = styled("div")`
  flex: 0.25;
`;

const NavContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

/**
 * Site links displayed in the navbar
 */
export default function SiteLinks() {
    const theme = useTheme();
    const expanderRef = useRef();
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);

    const [anchorEl, setAnchorEl] = useState(null);

    const shutDrawer = () => {
        dispatch(closeDrawer());
    };

    const handleExpand = () => {
        if (!anchorEl) {
            setAnchorEl(expanderRef.current);
        } else {
            setAnchorEl(null);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <SmallNavSection>
                <NavContainer>
                    { !mobile && (
                        <NavLink {...siteLinks.left.home} closeDrawer={handleClose}/>
                    )}
                </NavContainer>
            </SmallNavSection>
            <NavSection>
                <NavContainer>
                    { !mobile && siteLinks.middle.links.map(mid => <NavLink key={mid.key} {...mid} closeDrawer={handleClose}/> ) }
                    { !mobile && (
                        <NavCollapse
                            links={siteLinks.middle.collapse}
                            expanderRef={expanderRef}
                            anchorEl={anchorEl}
                            handleExpand={handleExpand}
                            handleClose={handleClose}
                        />
                    )}

                    { mobile && (
                        <NavLink {...siteLinks.left.home} closeDrawer={shutDrawer}/>
                    )}
                </NavContainer>
            </NavSection>
            <SmallNavSection>
                <NavContainer>
                    {!mobile && (
                        <Tooltip title={(<TowerText variant="h6" font={true} >{`Toggle ${(theme.palette.mode === "dark") ? "Light" : "Dark"} Mode`}</TowerText>)} forceWidth={false} ga4ID="DARK_MODE">
                            <DarkMode />
                        </Tooltip>
                    )}
                    { mobile && (
                        <MenuButton />
                    )}
                </NavContainer>
            </SmallNavSection>
        </>
    );
}