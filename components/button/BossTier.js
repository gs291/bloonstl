import {styled} from "@mui/material/styles";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";

const TierSelect = styled(Select, globalOptions)`
  & > fieldset {
    border-color: ${props => props["data-c"] ? props["data-c"] : props.theme.palette.button.primary}
  }
`;

const TierContainer = styled(FormControl)`
  width: 50%;
`;

const GA4_TIER_SELECT_ID = "BOSS_TIER_SELECT";

/**
 * Boss button/select to switch from the boss tier
 *
 * @param {Object} props Component props
 * @param {boolean} props.tier Show what tier it is (1-5)
 * @param {function} props.handleTier Function to change the tier state
 * @param {string} props.color Color of the boss
 */
export default function BossTier({tier, handleTier, color}) {

    const handleOpen = () => ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
        item_id: `${BUTTON_PREFIX}${GA4_TIER_SELECT_ID}`,
        tier: "open"
    });

    const handleChange = (e) => {
        handleTier(e);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_TIER_SELECT_ID}`,
            tier: e.target.value
        });
    };

    return (
        <>
            <TierContainer fullWidth>
                <InputLabel id="boss-tier-select-label">Boss Tier</InputLabel>
                <TierSelect
                    labelId="boss-tier-select-label"
                    value={tier}
                    label="Tier"
                    onOpen={handleOpen}
                    onChange={handleChange}
                    data-c={color}
                >
                    <MenuItem value={0}>Tier 1</MenuItem>
                    <MenuItem value={1}>Tier 2</MenuItem>
                    <MenuItem value={2}>Tier 3</MenuItem>
                    <MenuItem value={3}>Tier 4</MenuItem>
                    <MenuItem value={4}>Tier 5</MenuItem>
                </TierSelect>
            </TierContainer>
        </>
    );
}