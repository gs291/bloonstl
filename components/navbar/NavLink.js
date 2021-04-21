import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import { Link as MUILink } from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {hexToRgb} from "../../lib/utils/utils";

const HoverLink = styled.div`
  width: ${props => props["data-m"] ? "100%" : "100%"};
  transition: 0.3s;
  text-align: center;
  padding: 0 2em;
  border-radius: ${props => props["data-m"] ? 0 : 20}px;
  height: ${props => props["data-m"] ? siteSizes.nav.height : siteSizes.nav.link.height};

  &:hover {
    cursor: pointer;
    background-color: rgba(${props => hexToRgb(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light)}, 0.5);
  }
`;

const MLink = styled(MUILink)`
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  ${props => props["data-m"] ? "width: 100%;" : ""}
`;

const A = styled.div`
  display: inline-block;
  min-width: 85px;
  height: 100%;
  font-size: ${props => props["data-m"] ? 2 : 1.5 }em;
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