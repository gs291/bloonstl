import styled from "@emotion/styled";
import {Divider} from "@mui/material";

import {globalOptions} from "../../lib/utils/emotionStyled";


const VDivider = styled(Divider, globalOptions)`
  margin-left: 10px;
  margin-right: 10px;
  
  width: ${props => props["data-w"] ? props["data-w"] : 1}px;
  border-width: ${props => props["data-w"] ? props["data-w"] : 1}px;

  background-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.text.primary};
  border-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.text.primary};
`;


/**
 * Vertical Divider
 *
 * @param {Object} props Component props
 * @param {string} props.width Width of the divider
 * @param {string} props.backgroundColor Color for the divider
 */
export default function VerticalDivider({ width, backgroundColor }) {

    return (
        <>
            <VDivider flexItem orientation="vertical" data-w={width} data-bc={backgroundColor} />
        </>
    );
}