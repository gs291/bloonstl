import styled from "@emotion/styled";

import Types from "../statistics/Types";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const TooltipContainer = styled.div`
  padding: ${props => props["data-m"] ? 0 : 1}em;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Text = styled(TowerText)`
  text-align: center;
`;

const InitialTypeText = styled(TowerText)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default function TypesTooltip({type, prevType}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TooltipContainer data-m={mobile}>
                <Text variant="h5">
                    Attack Types
                </Text>
                <TallDivider width={100} />
                <Text variant="body1" font={true}>
                    See what attack damages what bloons
                </Text>
                <TallDivider width={100} />
                {prevType && prevType !== "" && (
                    <InitialTypeText variant="body1" font={true}>
                        Initial tower attack type: {prevType}
                    </InitialTypeText>
                )}
                <Types type={type} />
            </TooltipContainer>
        </>
    );
}