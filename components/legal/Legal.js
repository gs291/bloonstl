import Link from "next/link";
import styled from "@emotion/styled";
import {Link as MUILink} from "@mui/material";

import LegalText from "./LegalText";
import TowerText from "../tower/TowerText";

const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkContainer = styled.div`
  margin-bottom: 20px;
`;

const LegalLinks = styled.div`
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullLink = ({href, title}) => (
    <LinkContainer>
        <Link href={`/legal/${href}`} passHref>
            <MLink>
                <TowerText variant="h4">
                    {title}
                </TowerText>
            </MLink>
        </Link>
    </LinkContainer>
);

export default function Legal({  }) {

    return (
        <>
            <LegalText variant="h4" font={true}>
                Site Directory for the Legal pages:
            </LegalText>
            <LegalLinks>
                <FullLink href="cookie-policy" title="Cookie Policy" />
                <FullLink href="privacy-policy" title="Privacy Policy" />
                <FullLink href="terms-of-service" title="Terms of Service" />
                <FullLink href="data-processing-agreement" title="Data Processing Agreement" />
            </LegalLinks>
        </>
    );
}
