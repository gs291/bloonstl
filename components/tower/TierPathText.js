import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {getTierColor} from "../../lib/utils/utils";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Tier = styled(Typography, globalOptions)`
  color: ${props => getTierColor(props.name, props.theme)};
  cursor: default;
  ${props => !props["data-dm"] && `text-shadow: 5px 5px 10px ${props.theme.palette.text.primary}`};
`;

const TierContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


/**
 * Ability Path or Level text
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.tier The currently selected tier
 * @param {Object} props.tiers The tiers object containing the ability path
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function TierPathText ({ className, tier, tiers, towerType}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TierContainer className={className}>
                {towerType === "hero" ? (
                    <Tier variant="h3" component="h2" name={tier} data-dm={darkMode}>
                        Level {tiers.top_path}
                    </Tier>
                ) : (
                    <Tier variant="h3" component="h2" name={tier} data-dm={darkMode}>
                        { tiers.top_path }
                        &nbsp;-&nbsp;
                        { tiers.middle_path }
                        &nbsp;-&nbsp;
                        { tiers.bottom_path }
                    </Tier>
                )}

            </TierContainer>
        </>
    );
}