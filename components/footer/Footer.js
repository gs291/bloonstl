import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {font_family} from "../../lib/utils";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 50px;
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
                <FooterLink href="http://gregsanchez.herokuapp.com/">
                    Gregory Sanchez
                </FooterLink>
                &nbsp;
                (
                <FooterLink href="https://www.linkedin.com/in/gregory-sanchez-05b211159">
                    <FooterIcon>
                        <LinkedInIcon fontSize="small"/>
                    </FooterIcon>
                </FooterLink>
                )
            </FooterText>
        </FooterContainer>
    );
}