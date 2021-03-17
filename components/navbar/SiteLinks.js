import styled from "@emotion/styled";

import { left, middle, right } from "../../lib/site-links.json";
import NavLink from "./NavLink";

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
                    { <NavLink {...left.home} /> }
                </LeftNavSection>
            </NavSection>
            <NavSection>
                <MiddleNavSection>
                    { middle.map(mid => { return <NavLink {...mid} /> }) }
                </MiddleNavSection>
            </NavSection>
            <NavSection>
                <RightNavSection>
                    {/*{ <NavLink {...right.login} /> }*/}
                </RightNavSection>
            </NavSection>
        </>
    );
}