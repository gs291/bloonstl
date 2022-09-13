import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";


const Tier = styled(Typography)`
  color: ${props => props["data-tow"] === "hero" ? getHeroColor(props["data-tc"], props.theme) : getMonkeyColor(props["data-tc"], props.theme)};
  cursor: default;
  ${props => !(props.theme.palette.mode === "dark") && `text-shadow: 5px 5px 10px ${props.theme.palette.text.primary}`};
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
 * @param {string} props.towerName The name of the tower (E.g. 'Dart Monkey')
 */
export default function TierPathText ({ className, tier, tiers, towerType, towerName}) {

    return (
        <>
            <TierContainer className={className}>
                {towerType === "hero" ? (
                    <Tier variant="h3" component="h2" data-tow={towerType} data-tc={towerName}>
                        Level {tiers.top_path}
                    </Tier>
                ) : (
                    <Tier variant="h3" component="h2" data-tow={towerType} data-tc={towerName}>
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