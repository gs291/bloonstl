import styled from "@emotion/styled";

import NavLink from "./NavLink";
import {siteLinks} from "../../lib/utils";

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
  justify-content: left;
`;

export default function DesktopSiteLinks() {
    return (
        <>
            <NavSection>
                <LeftNavSection>
                    { <NavLink {...siteLinks.left.home} /> }
                </LeftNavSection>
            </NavSection>
            <NavSection>
                <MiddleNavSection>
                    { siteLinks.middle.map(mid => { return <NavLink {...mid} /> }) }
                </MiddleNavSection>
            </NavSection>
            <NavSection>
                <RightNavSection>
                    {/*{ <NavLink {...siteLinks.right.login} /> }*/}
                </RightNavSection>
            </NavSection>
        </>
    );
}