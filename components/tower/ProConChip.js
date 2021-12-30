import {Chip} from "@mui/material";
import styled from "@emotion/styled";

import Tooltip from "../tooltip/Tooltip";
import ChipTooltip from "../tooltip/ChipTooltip";
import siteColors from "../../lib/utils/siteColors";

const StyledChip = styled(Chip)`
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

export default function ProConChip({title, text, isPro}) {

    return (
        <>
            <Tooltip
                title={
                    <ChipTooltip
                        isPro={isPro}
                        title={title}
                        text={text}
                    />}
            >
                <StyledChip label={title} data-pro={isPro} />
            </Tooltip>
        </>
    );
}