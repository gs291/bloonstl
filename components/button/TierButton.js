import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {globalOptions} from "../../lib/utils/emotionStyled";
import {getTierColor, rgbaHex} from "../../lib/utils/utils";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const Button = styled("div", globalOptions)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 5px 5px;
  border-radius: 50%;
  background-color: ${props => props["data-s"] ? getTierColor(props["data-t"], props.theme) : "none"};
  border: 5px solid transparent;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 5px 5px 7.5px 0 ${props => props["data-t"] ? rgbaHex(getTierColor(props["data-t"], props.theme), 0.5) : props.theme.palette.primary.mainOpposite};
    border: 5px solid ${props => getTierColor(props["data-t"], props.theme)};
  }
`;

const TierText = styled(Typography, globalOptions)`
  color: ${props => props["data-s"] ? props.theme.palette.primary.main : getTierColor(props["data-t"], props.theme)};
  
  user-select: none;
  width: 55px;
  height: 55px;
  text-align: center;
`;

const GA4_TIER_BUTTON_ID = "FILTER_TIER";

/**
 * Round tier button
 *
 * @param {Object} props Component props
 * @param {string} props.className class to apply to the component
 * @param {string} props.tier The selected tier
 * @param {boolean} props.selected Shows if the button is currently selected
 * @param {function} props.handleTier The function to run when a tier is selected
 */
export default function TierButton({ className, tier, selected, handleTier }) {
    const handleClick = (e) => {
        handleTier(e, tier);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_TIER_BUTTON_ID}_${tier.toUpperCase()}`});
    };

    return (
        <>
            <Button
                onClick={handleClick}
                data-t={tier}
                data-s={selected}
                name="tier"
                value={tier}
                className={className}
            >
                <TierText
                    variant="h3"
                    data-t={tier}
                    data-s={selected}
                >
                    {tier}
                </TierText>
            </Button>
        </>
    );
}