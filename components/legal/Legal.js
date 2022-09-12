import Link from "next/link";
import {styled} from "@mui/material/styles";
import {Link as MUILink} from "@mui/material";

import LegalText from "./LegalText";
import TowerText from "../tower/TowerText";


const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.palette.primary.main};
  }
`;

const LinkContainer = styled("div")`
  margin-bottom: 20px;
`;

const LegalLinks = styled("div")`
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DirectoryText = styled(LegalText)`
  text-align: center;
`;

/**
 * Legal page site directory
 */
export default function Legal() {

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

    return (
        <>
            <DirectoryText variant="h4" font={true} component="h2">
                Site directory for the legal pages
            </DirectoryText>
            <LegalLinks>
                <FullLink href="cookie-policy" title="Cookie Policy" />
                <FullLink href="privacy-policy" title="Privacy Policy" />
                <FullLink href="terms-of-service" title="Terms of Service" />
            </LegalLinks>
        </>
    );
}
