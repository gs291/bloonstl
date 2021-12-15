import Link from "next/link";
import styled from "@emotion/styled";

import TowerText from "../../tower/TowerText";


const Body = styled.div`
  padding: 0.86rem 1.4rem;
  
  display: flex;
  flex-direction: row;
`;


const ATag = styled.a`
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`;

export default function ConsentBody({}) {

    return (
        <>
            <Body>
                <TowerText variant="body1" font={true}>
                    We use cookies to enhance your user experience.
                    By continuing using this website,
                    you agree to the use of cookies · <Link href="/legal/cookie-policy" prefetch={false}><ATag>Learn more</ATag></Link>
                </TowerText>
            </Body>
        </>
    );
}