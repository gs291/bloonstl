import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import {font_family, hexToRgb} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.footer.height};
`;

const FooterText = styled(Typography)`
  font-family: sans-serif;
`;

const FooterLink = styled.a`
  font-family: ${font_family};
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &:hover{
    text-shadow: 5px 5px 5px rgba(${props => hexToRgb(props["data-dm"] ? siteColors.text.dark : siteColors.text.light)}, 0.25);
  }
`;

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <FooterContainer className={className}>
            <FooterText component="span" variant="body2">
                Written and maintained by
                &nbsp;
                <FooterLink href="https://gregsanchez.netlify.app/" data-dm={darkMode}>
                    Gregory Sanchez
                </FooterLink>
            </FooterText>
        </FooterContainer>
    );
}