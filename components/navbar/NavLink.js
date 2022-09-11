import Link from "next/link";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {Link as MUILink} from "@mui/material";

import siteSizes from "../../lib/utils/siteSizes";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const HoverLink = styled("div", globalOptions)`
  text-align: center;
  padding: 0 2em;
  height: ${props => props["data-m"] ? "100%" : siteSizes.nav.height};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.text.navLink};
  }
`;

const MLink = styled(MUILink, globalOptions)`
  height: ${props => props["data-m"] ? "" : siteSizes.nav.height};
  color: ${props => props.theme.palette.text.primary};
  ${props => props["data-m"] ? "width: 100%;" : ""}
  border-bottom: 5px solid ${props => 
          props["data-m"] 
              ? props.theme.palette.background.default 
              : props["data-a"] ? props.theme.palette.primary.main : "transparent"
  };
`;

const A = styled("div", globalOptions)`
  display: inline-block;
  min-width: 100px;
  font-size: ${props => props["data-m"] ? 2 : 1.5 }em;
  line-height: ${siteSizes.nav.height};
  transition: 0.2s;
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
export default function NavLink({className, path, text, prefetch, closeDrawer, ...rest}) {
    const mobile = useSelector(getMobile);

    const router = useRouter();

    return (
        <>
            {!prefetch ? (
                <Link href={path} prefetch={false} passHref>
                    <MLink
                        className={className}
                        underline="none"
                        data-m={mobile}
                        data-a={router.pathname === path}
                        {...rest}
                    >
                        <HoverLink onClick={closeDrawer} data-m={mobile}>
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
                        data-a={router.pathname === path}
                        {...rest}
                    >
                        <HoverLink onClick={closeDrawer} data-m={mobile}>
                            <A data-m={mobile}>{text}</A>
                        </HoverLink>
                    </MLink>
                </Link>
            )}
        </>
    );
}