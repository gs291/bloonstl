import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import Types from "../statistics/Types";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TooltipContainer = styled("div", globalOptions)`
  padding: ${props => props["data-m"] ? 0 : 1}em;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: ${props => props["data-m"] ? 0.75 : 1}m;
  margin-bottom: ${props => props["data-m"] ? 0.75 : 1}em;
`;

const Text = styled(TowerText)`
  text-align: center;
`;

const InitialTypeText = styled(TowerText)`
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

/**
 * Damage Types tooltip component
 *
 * @param {Object} props Component props
 * @param {string} props.type The tower damage type
 * @param {string|null} [props.prevType] The previous tower damage type
 */
export default function TypesTooltip({type, prevType}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TooltipContainer data-m={mobile}>
                <Text variant="h5">
                    Attack Types
                </Text>
                <TallDivider width={100} data-m={mobile} />
                <Text variant="body1" font={true}>
                    See what attack damages what bloons
                </Text>
                <TallDivider width={100} data-m={mobile} />
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