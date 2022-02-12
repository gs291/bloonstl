import Link from "next/link";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {Link as MUILink} from "@mui/material";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const HoverLink = styled("div", globalOptions)`
  transition: 0.1s;
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

const MLink = styled(MUILink, globalOptions)`
  transition: 0.3s;
  height: ${props => props["data-m"] ? "" : siteSizes.nav.height};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  ${props => props["data-m"] ? "width: 100%;" : ""}
  border-bottom: 5px solid ${props => 
          props["data-m"] 
              ? props["data-dm"] ? siteColors.page.dark : siteColors.page.light
              : props["data-dm"]
                  ? props["data-a"] ? siteColors.accent.dark : "transparent"
                  : props["data-a"] ? siteColors.accent.light : "transparent"
  };
`;

const A = styled("div", globalOptions)`
  display: inline-block;
  min-width: 100px;
  font-size: ${props => props["data-m"] ? 2 : 1.5 }em;
  line-height: ${siteSizes.nav.height};
`;

/**
 * Navbar link
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.path Path/Href for the link
 * @param {string} props.text Text to display for the link
 * @param {boolean} props.prefetch Shows if the link should be prefetched out not
 * @param {function} props.closeDrawer Function to close the mobile drawer
 */
export default function NavLink({className, path, text, prefetch, closeDrawer}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const router = useRouter();

    return (
        <>
            {!prefetch ? (
                <Link href={path} prefetch={false} passHref>
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
            ) : (
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
            )}
        </>
    );
}