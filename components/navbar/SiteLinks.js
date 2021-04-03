import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import {siteLinks} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";
import {closeDrawer} from "../../lib/redux/actions";

const NavSection = styled.div`
  flex: 1;
`;

const LeftNavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MiddleNavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const RightNavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 25px;
`;

export default function SiteLinks() {
    const mobile = useSelector(getMobile);
    const dispatch = useDispatch();

    const shutDrawer = () => {
        dispatch(closeDrawer());
    };

    return (
        <>
            <NavSection>
                <LeftNavSection>
                    { !mobile && (
                        <NavLink {...siteLinks.left.home} />
                    )}
                </LeftNavSection>
            </NavSection>
            <NavSection>
                <MiddleNavSection>
                    { !mobile && siteLinks.middle.map(mid => { return <NavLink key={mid.key} {...mid} /> }) }

                    { mobile && (
                        <NavLink {...siteLinks.left.home} closeDrawer={shutDrawer}/>
                    )}
                </MiddleNavSection>
            </NavSection>
            <NavSection>
                <RightNavSection>
                    { mobile && (
                        <MenuButton />
                    )}
                </RightNavSection>
            </NavSection>
        </>
    );
}