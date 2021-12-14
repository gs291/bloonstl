import Link from "next/link";
import styled from "@emotion/styled";
import {Link as MUILink} from "@mui/material";

import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
import TowerText from "../components/tower/TowerText";

const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FullLink = ({href, title}) => (
    <Link href={`/legal/${href}`} passHref>
        <MLink>
            <TowerText variant="h4">
                {title}
            </TowerText>
        </MLink>
    </Link>
);

export default function TOS({  }) {

    return (
        <>
            <Header title="Legal" />
            <MainContainer>
                <PageTitle title="Legal" />

                <ul>
                    <li>
                        <FullLink href="terms-of-service" title="Terms of Service" />
                    </li>
                    <li>
                        <FullLink href="privacy-policy" title="Privacy Policy" />
                    </li>
                    <li>
                        <FullLink href="cookie-policy" title="Cookie Policy" />
                    </li>
                </ul>
            </MainContainer>
        </>
    );
}
