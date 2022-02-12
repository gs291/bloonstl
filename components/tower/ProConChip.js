import {Chip} from "@mui/material";
import styled from "@emotion/styled";

import Tooltip from "../tooltip/Tooltip";
import ChipTooltip from "../tooltip/ChipTooltip";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {CHIP_PREFIX, SELECT_CONTENT_CHIP, ga4SendSelectContent, textToGA4Text} from "../../lib/utils/ga4";


const StyledChip = styled(Chip, globalOptions)`
  @keyframes popup {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  opacity: 1;
  animation-name: popup;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  
  width: 100px;
  background-color: ${props => props["data-pro"]
    ? props["data-dm"] ? siteColors.pros.dark : siteColors.pros.light
    : props["data-dm"] ? siteColors.cons.dark : siteColors.cons.light};

  &:hover {
    cursor: pointer;
  }
`;

const GA4_PRO_CON_CHIP_ID = "PRO_CON";

/**
 * Pro or Con chip component
 *
 * @param {Object} props Component props
 * @param {boolean} props.isPro Shows if the chip is a pro or con
 * @param {string} props.title The title for the chip
 * @param {string} props.text The text for the chip
 * @param {string} props.chipType Shows what chip it is
 */
export default function ProConChip({title, text, isPro, chipType}) {

    const handleClick = () => ga4SendSelectContent(SELECT_CONTENT_CHIP, {
        item_id: `${CHIP_PREFIX}${GA4_PRO_CON_CHIP_ID}`,
        type: chipType,
        name: title,
        isPro: isPro
    });

    return (
        <>
            <Tooltip
                title={
                    <ChipTooltip
                        isPro={isPro}
                        title={title}
                        text={text}
                    />}
                ga4ID={`PRO_CON_${textToGA4Text(chipType)}_${textToGA4Text(title)}`}
            >
                <div onClick={handleClick}>
                    <StyledChip label={title} data-pro={isPro} />
                </div>
            </Tooltip>
        </>
    );
}