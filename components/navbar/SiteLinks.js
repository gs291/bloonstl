import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import NavCollapse from "./NavCollapse";
import DarkMode from "../dark-mode/DarkMode";
import siteLinks from "../../lib/utils/siteLinks";
import {closeDrawer} from "../../lib/redux/actions";
import {getMobile} from "../../lib/redux/selectors";
import {useRef, useState} from "react";

const NavSection = styled.div`
  flex: 0.5;
`;

const SmallNavSection = styled.div`
  flex: 0.25;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;



export default function SiteLinks() {
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
                        <DarkMode />
                    )}
                    { mobile && (
                        <MenuButton />
                    )}
                </NavContainer>
            </SmallNavSection>
        </>
    );
}