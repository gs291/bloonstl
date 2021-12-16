import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {Link as MUILink} from "@mui/material";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {font_family, rgbaHex} from "../../lib/utils/utils";
import NavLink from "../navbar/NavLink";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${siteSizes.footer.height};
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FooterText = styled(Typography)`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  text-align: center;
`;

const FooterLink = styled.a`
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

const MLink = styled(MUILink)`
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  font-size: 1.25em;

  &:hover {
    cursor: pointer;
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
`;

const Dot = styled.div`
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

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <FooterContainer className={className}>
                <LinkContainer>
                    {links.map(link => (
                        <LinkContainer key={link.text}>
                            <Link href={link.path} prefetch={false} passHref>
                                <MLink underline="none" data-dm={darkMode}>
                                    {link.text}
                                </MLink>
                            </Link>
                            {link.dot && (
                                <Dot data-dm={darkMode}/>
                            )}
                        </LinkContainer>
                    ))}
                </LinkContainer>
                <FooterText component="span" variant="body1">
                    Written and maintained by
                    <FooterLink href="https://gregsanchez.netlify.app/" data-dm={darkMode}>
                        Gregory Sanchez
                    </FooterLink>
                </FooterText>
            </FooterContainer>
        </>
    );
}