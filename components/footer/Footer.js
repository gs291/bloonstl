import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const FooterLink = styled.a`
  color: #ccc;
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
                <FooterLink href="https://twitter.com/GS_291">
                    @GS_291
                </FooterLink>
                )
            </Typography>
        </FooterContainer>
    );
}