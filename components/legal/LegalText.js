import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

export const Text = styled(TowerText)`
  margin-bottom: 20px;
`;

export default function LegalText({children, ...rest}) {

    return (
        <>
            <Text
                { ...rest }
            >
                {children}
            </Text>
        </>
    );
}