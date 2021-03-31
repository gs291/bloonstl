import styled from "@emotion/styled";

import NavLink from "./NavLink";
import {useSelector} from "react-redux";
import {siteLinks} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";
import MenuButton from "./MenuButton";

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
  justify-content: center;
`;

const RightNavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 25px;
`;

export default function SiteLinks() {
    const mobile = useSelector(getMobile);

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
                        <NavLink {...siteLinks.left.home} />
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