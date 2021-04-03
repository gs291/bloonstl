import Link from "next/link";
import styled from "@emotion/styled";

import { Link as MUILink } from "@material-ui/core";
import { siteColors, siteSizes} from "../../lib/utils";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

export default function NavLink({ path, text, closeDrawer }) {
    const mobile = useSelector(getMobile);

    const HoverLink = styled.div`
      width: ${mobile ? "100%" : "100px" };
      transition: 0.3s;
      text-align: center;
      border-radius: ${mobile ? 0 : 10}%;
      height: ${mobile ? siteSizes.nav.height : siteSizes.nav.link.height };
  
      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
        background-color: ${ siteColors.background.hover.dark };
      }
    `;

    const MLink = styled(MUILink)`
      color: white;
      ${ mobile ? "width: 100%;" : "" }
    `;

    const A = styled.div`
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 1.25em;
      line-height: ${ mobile ? siteSizes.nav.height : siteSizes.nav.link.height };
    `;

    return (
            <Link href={ path } passHref>
                <MLink >
                    <HoverLink onClick={closeDrawer} >
                        <A >{ text }</A>
                    </HoverLink>
                </MLink>
            </Link>
    );
}