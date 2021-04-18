import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";


const TooltipContainer = styled.div`
  padding: 1em;
`;

export default function ChipTooltip({className, isPro, title, text}) {
    return (
        <>
            <TooltipContainer className={className}>
                <TowerText variant="h5" textColor={isPro ? siteColors.chip.pros : siteColors.chip.cons}>
                    { title }
                </TowerText>
                <TowerText variant="body1" font={1}>
                    { text }
                </TowerText>
            </TooltipContainer>
        </>
    );
}