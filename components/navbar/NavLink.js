import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import { Link as MUILink } from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {useRouter} from "next/router";

const HoverLink = styled.div`
  transition: 0.3s;
  text-align: center;
  padding: 0 2em;
  height: ${props => props["data-m"] ? "100%" : siteSizes.nav.height};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
`;

const MLink = styled(MUILink)`
  transition: 0.3s;
  height: ${props => props["data-m"] ? "" : siteSizes.nav.height};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  ${props => props["data-m"] ? "width: 100%;" : ""}
  border-bottom: 5px solid ${props => 
          props["data-m"] 
              ? props["data-dm"] ? siteColors.page.dark : siteColors.page.light
              : props["data-dm"]
                  ? props["data-a"] ? siteColors.accent.dark : siteColors.page.dark
                  : props["data-a"] ? siteColors.accent.light : siteColors.page.light
  };
`;

const A = styled.div`
  display: inline-block;
  min-width: 85px;
  font-size: ${props => props["data-m"] ? 2 : 1.5 }em;
  line-height: ${siteSizes.nav.height};
`;

export default function NavLink({className, path, text, closeDrawer}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const router = useRouter();

    return (
            <Link href={path} passHref>
                <MLink
                    className={className}
                    underline="none"
                    data-m={mobile}
                    data-dm={darkMode}
                    data-a={router.pathname === path}
                >
                    <HoverLink onClick={closeDrawer} data-m={mobile} data-dm={darkMode}>
                        <A data-m={mobile}>{text}</A>
                    </HoverLink>
                </MLink>
            </Link>
    );
}