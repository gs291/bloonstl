import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const FooterLink = styled.a`
  color: #ccc;
`;

const FooterIcon = styled.div`
  display: inline-flex;
  vertical-align: middle;
`;

export default function Footer({ className }) {
    return (
        <FooterContainer className={className}>
            <Typography variant="body2">
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
            </Typography>
        </FooterContainer>
    );
}