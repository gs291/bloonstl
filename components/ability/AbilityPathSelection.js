import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TierText from "../tower/TierText";
import TowerText from "../tower/TowerText";
import FilterTiers from "../filters/FilterTiers";
import TierPathText from "../tower/TierPathText";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const AbilityTier = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Selection = styled("div", globalOptions)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props["data-m"] ? 100 : 80}%;
`;

const Label = styled(TowerText)`
  cursor: default;
  text-align: center;
`;

/**
 * Monkey Ability Path Selection Component.
 *   Allows selection from different tiers
 *
 * @param {Object} props Component props
 * @param {string} props.tier The currently selected tier
 * @param {Object} props.tiers The tiers object containing the ability path
 * @param {function} props.handleTier The function to run when a tier is selected
 * @param {boolean} props.sandbox Shows if sandbox mode is enabled or disabled
 */
export default function AbilityPathSelection({ tier, tiers, handleTier, sandbox }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Selection data-m={mobile}>
                <Label variant={mobile ? "h4" : "h3"}>
                    Ability Path{!sandbox && " Tiers"}
                </Label>
                <Label variant="subtitle2" font={true}>
                    {sandbox
                        ? "Click on an ability to change the path!"
                        : "Click on a tier to change the path!"
                    }
                </Label>
                <AbilityTier data-m={mobile}>
                    {!sandbox && (
                        <FilterTiers tier={tier} handleTier={handleTier} />
                    )}
                    {sandbox && (
                        <TierText tier={tier} text="Tower Tier" showText />
                    )}
                    <TierPathText tier={tier} tiers={tiers}/>
                </AbilityTier>
            </Selection>
        </>
    );
}