import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

export const Title = styled(TowerText)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function LegalTitle({children, ...rest}) {

    return (
        <>
            <Title
                { ...rest }
            >
                {children}
            </Title>
        </>
    );
}