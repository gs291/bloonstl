import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from 'react-redux';

import { left, middle, right } from "../../lib/sitelinks.json";
import MenuButton from "./MenuButton";
import {Drawer, } from "@material-ui/core";
import { getDrawer } from "../../lib/redux/selectors";
import { toggleDrawer } from "../../lib/redux/actions";

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

export function NavDrawer() {
    const dispatch = useDispatch();
    const drawer = useSelector(getDrawer);
    return (
        <>
            <Drawer
                open={ drawer }
                onClose={ () => dispatch(toggleDrawer()) }
            >
                { middle.map(mid => { return link(mid)}) }
            </Drawer>
        </>
    );
}

export function MobileSiteLinks() {
  return (
      <>
          <LeftNavSection>
              <MenuButton />
              { link(left.home) }
          </LeftNavSection>
      </>
  );
}

export function DesktopSiteLinks() {
    return (
        <>
            <NavSection>
                <LeftNavSection>
                    { link(left.home) }
                </LeftNavSection>
            </NavSection>
            <NavSection>
                <MiddleNavSection>
                    { middle.map(mid => { return link(mid)}) }
                </MiddleNavSection>
            </NavSection>
            <NavSection>
                <RightNavSection>
                    { link(right.login) }
                </RightNavSection>
            </NavSection>
        </>
    );
}