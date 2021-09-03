import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";


const TooltipContainer = styled.div`
  padding: 1em;
`;

export default function ChipTooltip({className, isPro, title, text}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TooltipContainer className={className}>
                <TowerText variant="h5" textColor={isPro ? siteColors.pros.dark : siteColors.cons.dark}>
                    { title }
                </TowerText>
                <TowerText variant="body1" textColor={siteColors.text.dark}  font={1}>
                    { text }
                </TowerText>
            </TooltipContainer>
        </>
    );
}