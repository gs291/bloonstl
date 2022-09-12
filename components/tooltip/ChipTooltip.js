import styled from "@emotion/styled";
import {useTheme} from '@mui/material/styles';

import TowerText from "../tower/TowerText";


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
    const theme = useTheme();

    return (
        <>
            <TooltipContainer className={className}>
                <TowerText
                    variant="h5"
                    textColor={isPro ? theme.palette.informational.pros : theme.palette.informational.cons}
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