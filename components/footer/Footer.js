import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import siteSizes from "../../lib/utils/siteSizes";
import {font_family} from "../../lib/utils/utils";

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
  color: #ccc;
`;

const FooterIcon = styled.div`
  display: inline-flex;
  vertical-align: middle;
`;

export default function Footer({ className }) {
    return (
        <FooterContainer className={className}>
            <FooterText component="span" variant="body2">
                Written and maintained by
                &nbsp;
                <FooterLink href="https://gregsanchez.netlify.app/">
                    Gregory Sanchez
                </FooterLink>
            </FooterText>
        </FooterContainer>
    );
}