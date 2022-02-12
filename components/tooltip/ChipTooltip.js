import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const TooltipContainer = styled("div")`
  padding: 1em;
`;

/**
 * Chip tooltip component
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {boolean} props.isPro Shows if the chip tooltip is a pro or con
 * @param {string} props.title The title for the chip tooltip
 * @param {string} props.text The text for the chip tooltip
 */
export default function ChipTooltip({className, isPro, title, text}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TooltipContainer className={className}>
                <TowerText
                    variant="h5"
                    textColor={isPro
                        ? darkMode ? siteColors.pros.dark : siteColors.pros.light
                        : darkMode ? siteColors.cons.dark : siteColors.cons.light
                    }
                >
                    { title }
                </TowerText>
                <TowerText
                    variant="body1"
                    font={true}
                >
                    { text }
                </TowerText>
            </TooltipContainer>
        </>
    );
}