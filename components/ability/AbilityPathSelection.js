import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import FilterTiers from "../filters/FilterTiers";
import TierPathText from "../tower/TierPathText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const AbilityTier = styled.div`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props["data-m"] ? 100 : 80}%;
`;

const Label = styled(Typography)`
  cursor: default;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function AbilityPathSelection({ tier, tiers, handleTier }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Selection data-m={mobile}>
                <Label variant="h4" data-dm={darkMode}>
                    Ability Path Tiers:
                </Label>
                <AbilityTier data-m={mobile}>
                    <FilterTiers tier={tier} handleTier={handleTier} />
                    <TierPathText tier={tier} tiers={tiers}/>
                </AbilityTier>
            </Selection>
        </>
    );
}