import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {font_family, rgbaHex} from "../../lib/utils/utils";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: ${siteSizes.footer.height};
`;

const FooterText = styled(Typography)`
  font-family: sans-serif;
  display: flex;
  align-items: center;
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

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <FooterContainer className={className}>
                <FooterText component="span" variant="body1">
                    © 2021 Gregory Sanchez
                </FooterText>
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