import styled from "@emotion/styled";

import Types from "../statistics/Types";
import TowerText from "../tower/TowerText";


const InitialTypeText = styled(TowerText)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default function TypesTooltip({type, prevType}) {

    return (
        <>
            <InitialTypeText variant="subtitle1" font={true}>
                Initial tower attack type: {prevType}
            </InitialTypeText>
            <Types type={type} />
        </>
    );
}