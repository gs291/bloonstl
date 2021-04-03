import Link from "next/link";
import styled from "@emotion/styled";

import { Link as MUILink } from "@material-ui/core";
import { siteColors, siteSizes} from "../../lib/utils";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const HoverLink = styled.div`
  width: ${props => props.mobile ? "100%" : "100px" };
  transition: 0.3s;
  text-align: center;
  border-radius: ${props => props.mobile ? 0 : 10}%;
  height: ${ props => props.mobile ? siteSizes.nav.height : siteSizes.nav.link.height };
  
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${ siteColors.background.hover.dark };
  }
`;

const MLink = styled(MUILink)`
  color: white;
  ${ props => props.mobile ? "width: 100%;" : "" }
`;

const A = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 1.25em;
  line-height: ${ props => props.mobile ? siteSizes.nav.height : siteSizes.nav.link.height };
`;

export default function NavLink({ path, text, closeDrawer }) {
    const mobile = useSelector(getMobile);
    return (
            <Link href={ path } passHref>
                <MLink mobile={mobile ? 1 : 0}>
                    <HoverLink onClick={closeDrawer} mobile={mobile}>
                        <A mobile={mobile}>{ text }</A>
                    </HoverLink>
                </MLink>
            </Link>
    );
}