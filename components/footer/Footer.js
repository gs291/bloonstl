import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Link as MUILink} from "@mui/material";

import TowerText from "../tower/TowerText";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {font_family, rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${siteSizes.footer.height};
`;

const LinkContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FooterText = styled(TowerText)`
  display: flex;
  align-items: center;
  text-align: center;
`;

const FooterLink = styled('a', globalOptions)`
  font-family: ${font_family};
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  height: calc(${siteSizes.footer.height} / 2);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  
  &:hover{
    text-shadow: 5px 5px 5px ${props => rgbaHex(props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light, 0.75)};
  }
`;

const MLink = styled(MUILink, globalOptions)`
  transition: 0.3s;
  margin-left: ${props => props["data-m"] ? 5 : 10}px;
  margin-right: ${props => props["data-m"] ? 5 : 10}px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  font-size: 1.25em;

  &:hover {
    cursor: pointer;
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
`;

const Dot = styled("div", globalOptions)`
  width: 5px; 
  height: 5px; 
  border-radius: 5px; 
  margin-left: 8px; 
  margin-right: 8px; 
  background-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};;
`;

const links = [
    { "text": "Terms", "path": "/legal/terms-of-service", "dot": true },
    { "text": "Privacy", "path": "/legal/privacy-policy", "dot": true },
    { "text": "Cookie", "path": "/legal/cookie-policy" }
]

/**
 * Footer for the website
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function Footer({ className }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <FooterContainer className={className}>
                <LinkContainer>
                    {links.map(link => (
                        <LinkContainer key={link.text}>
                            <Link href={link.path} prefetch={false} passHref>
                                <MLink underline="none" data-dm={darkMode} data-m={mobile}>
                                    {link.text}
                                </MLink>
                            </Link>
                            {link.dot && (
                                <Dot data-dm={darkMode}/>
                            )}
                        </LinkContainer>
                    ))}
                </LinkContainer>
                <FooterText component="span" variant="body1" font={true}>
                    Written and maintained by
                    <FooterLink href="https://gregsanchez.netlify.app/" data-dm={darkMode}>
                        Gregory Sanchez
                    </FooterLink>
                </FooterText>
            </FooterContainer>
        </>
    );
}