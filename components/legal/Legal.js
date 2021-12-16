import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Link as MUILink} from "@mui/material";

import LegalText from "./LegalText";
import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
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
  text-align: center;
`;

export default function Legal({  }) {
    const darkMode = useSelector(getDarkMode);

    const FullLink = ({href, title}) => (
        <LinkContainer>
            <Link href={`/legal/${href}`} passHref>
                <MLink data-dm={darkMode}>
                    <TowerText variant="h4">
                        {title}
                    </TowerText>
                </MLink>
            </Link>
        </LinkContainer>
    );

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
