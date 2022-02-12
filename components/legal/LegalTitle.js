import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";


export const Title = styled(TowerText)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

/**
 * Legal title
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the title
 */
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