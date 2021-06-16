import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {ButtonGroup, Button, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {font_family, getTierCardColor, getTierColor} from "../../lib/utils/utils";

const BGroup = styled(ButtonGroup)`
  justify-content: center;
  height: 45px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Label = styled(Typography)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const TierButton  = styled(Button)`
  background-color: ${props => getTierColor(props.value)};
  font-family: ${font_family};
  
  ${props => props["data-s"] ? "box-shadow: inset 0 0 20px 2px #000000;" : ""}
  
  &:hover {
    background-color: ${props => getTierCardColor(props.value, props["data-dm"], true)};
  }
`;

export default function FilterTiers({ className, tier, handleTier }) {
    const darkMode = useSelector(getDarkMode);

    if (!handleTier){ handleTier = (_, __) => <></>; }
    return (
        <>
            <FilterContainer>
                <Label variant="body1" data-dm={darkMode}>
                    Ability Path Tiers:
                </Label>
                <BGroup variant="contained" disableElevation>
                    <TierButton
                        onClick={(e) => handleTier(e, "s")}
                        name="tier"
                        value="s"
                        data-dm={darkMode}
                        data-s={tier === "s"}
                    >
                        S&nbsp;&nbsp;Tier
                    </TierButton>
                    <TierButton
                        onClick={(e) => handleTier(e, "a")}
                        name="tier"
                        value="a"
                        data-dm={darkMode}
                        data-s={tier === "a"}
                    >
                        A&nbsp;&nbsp;Tier
                    </TierButton>
                    <TierButton
                        onClick={(e) => handleTier(e, "b")}
                        name="tier"
                        value="b"
                        data-dm={darkMode}
                        data-s={tier === "b"}
                    >
                        B&nbsp;&nbsp;Tier
                    </TierButton>
                </BGroup>
            </FilterContainer>
        </>
    );
}