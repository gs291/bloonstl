import Link from "next/link";
import styled from "@emotion/styled";

import siteLinks from "../../lib/sitelinks.json";

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
    background-color: #1C1C1C;
  }
`;

const A = styled.a`
  line-height: 50px;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const link = ({ key, path, text }) => (
    <HoverLink key={ key }>
        <Link href={ path }>
            <A>{ text }</A>
        </Link>
    </HoverLink>
)

export default function SiteLinks({ mobile, login }) {
    let leftNav = [];
    let middleNav = [];
    let rightNav = [];

    siteLinks.forEach(siteLink => {
        if (siteLink.loc === -1) {
            leftNav.push(link(siteLink));
        } else if (siteLink.loc === 0) {
            middleNav.push(link(siteLink));
        } else {
            rightNav.push(link(siteLink));
        }
    })

    return (
        <>
            <NavSection>
                <LeftNavSection>
                    { leftNav }
                </LeftNavSection>
            </NavSection>
            <NavSection>
                <MiddleNavSection>
                    { middleNav }
                </MiddleNavSection>
            </NavSection>
            <NavSection>
                <RightNavSection>
                    { rightNav }
                </RightNavSection>
            </NavSection>
        </>
    );
}