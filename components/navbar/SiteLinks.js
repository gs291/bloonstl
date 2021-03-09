import Link from "next/link";
import styled from "@emotion/styled";

import { background } from "../../lib/site-colors.json";
import { left, middle, right } from "../../lib/site-links.json";

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

const HoverLink = styled.div`
  width: 100px;
  transition: 0.3s;
  text-align: center;
  
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;

const A = styled.a`
  line-height: 50px;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const NavLink = ({ id_key, path, text, closeDrawer }) => (
    <HoverLink key={ id_key } onClick={closeDrawer}>
        <Link href={ path } >
            <A>{ text }</A>
        </Link>
    </HoverLink>
)

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