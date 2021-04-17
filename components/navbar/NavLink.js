import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import { Link as MUILink } from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const HoverLink = styled.div`
  width: ${props => props["data-m"] ? "100%" : "100px"};
  transition: 0.3s;
  text-align: center;
  border-radius: ${props => props["data-m"] ? 0 : 10}%;
  height: ${props => props["data-m"] ? siteSizes.nav.height : siteSizes.nav.link.height};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${props => props["data-dm"] ? siteColors.hover.dark : siteColors.hover.light};
  }
`;

const MLink = styled(MUILink)`
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  ${props => props["data-m"] ? "width: 100%;" : ""}
`;

const A = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 1.25em;
  line-height: ${props => props["data-m"] ? siteSizes.nav.height : siteSizes.nav.link.height};
`;

export default function NavLink({ path, text, closeDrawer }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
            <Link href={ path } passHref>
                <MLink data-m={mobile} data-dm={darkMode}>
                    <HoverLink onClick={closeDrawer} data-m={mobile} data-dm={darkMode}>
                        <A data-m={mobile}>{ text }</A>
                    </HoverLink>
                </MLink>
            </Link>
    );
}