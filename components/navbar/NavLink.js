import Link from "next/link";
import styled from "@emotion/styled";

import { Link as MUILink } from "@material-ui/core";
import { siteColors, siteSizes} from "../../lib/utils";

const HoverLink = styled.div`
  width: 100px;
  transition: 0.3s;
  text-align: center;
  
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${ siteColors.background.hover.dark };
  }
`;

const MLink = styled(MUILink)`
  color: white;
`;

const A = styled.div`
  line-height: ${ siteSizes.nav.height };
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default function NavLink({ path, text, closeDrawer }) {
    return (
            <Link href={ path } passHref>
                <MLink>
                    <HoverLink onClick={closeDrawer}>
                        <A>{ text }</A>
                    </HoverLink>
                </MLink>
            </Link>
    );
}