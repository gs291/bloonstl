import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {getTierColor} from "../../lib/utils/utils";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Tier = styled(Typography, globalOptions)`
  color: ${props => getTierColor(props.name, props.theme)};
  ${props => !props["data-dm"] && `text-shadow: 5px 5px 10px ${props.theme.palette.text.primary}`};
`;

const TierContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TierLabel = styled(Tier)`
  margin-left: 10px;
`;

/**
 * Tier text component
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.tier The currently selected tier
 * @param {boolean} props.showText Shows if the tier should display a text alongside the tier
 * @param {string} [props.text="Tier"] The text to show if applicable
 */
export default function TierText ({className, tier, showText, text="Tier"}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TierContainer className={className}>
                <Tier variant="h2" name={tier} data-dm={darkMode} component="h4">
                    {tier}
                </Tier>
                {showText && (
                    <TierLabel variant="h4" component="p" name={tier} data-dm={darkMode}>
                        {text}
                    </TierLabel>
                )}
            </TierContainer>
        </>
    );
}