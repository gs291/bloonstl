import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import siteLinks from "../../lib/utils/siteLinks";
import {getMobile} from "../../lib/redux/selectors";
import {closeDrawer} from "../../lib/redux/actions";
import DarkMode from "../dark-mode/DarkMode";

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
    const mobile = useSelector(getMobile);
    const dispatch = useDispatch();

    const shutDrawer = () => {
        dispatch(closeDrawer());
    };

    return (
        <>
            <SmallNavSection>
                <NavContainer>
                    { !mobile && (
                        <NavLink {...siteLinks.left.home} />
                    )}
                </NavContainer>
            </SmallNavSection>
            <NavSection>
                <NavContainer>
                    { !mobile && siteLinks.middle.map(mid => { return <NavLink key={mid.key} {...mid} /> }) }

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