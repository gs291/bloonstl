import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TierButton from "../button/TierButton";
import {getDarkMode} from "../../lib/redux/selectors";


const FilterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;


const TierButtons = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;


/**
 * Tier Filter and wrapper for all tier buttons
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.tier The selected tier
 * @param {function} props.handleTier The function to run when a tier is selected
 */
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