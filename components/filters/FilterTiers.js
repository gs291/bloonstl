import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {ButtonGroup, Button, Typography} from "@material-ui/core";

import TierButton from "./TierButton";
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


const TierButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function FilterTiers({ className, tier, handleTier }) {
    const darkMode = useSelector(getDarkMode);

    if (!handleTier){ handleTier = (_, __) => <></>; }
    return (
        <>
            <FilterContainer className={className}>
                <TierButtons>
                    <TierButton
                        tier={"s"}
                        selected={tier === "s"}
                        handleTier={handleTier}
                    />
                    <TierButton
                        tier={"a"}
                        selected={tier === "a"}
                        handleTier={handleTier}
                    />
                    <TierButton
                        tier={"b"}
                        selected={tier === "b"}
                        handleTier={handleTier}
                    />
                </TierButtons>
            </FilterContainer>
        </>
    );
}