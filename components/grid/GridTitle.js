import {styled} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";

import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Title = styled(Grid, globalOptions)`
  padding-top: 20px;
  padding-bottom: 20px;
  
  text-align: center;
  background-color: ${props => rgbaHex(props["data-bc"], props.theme.palette.mode === "dark" ? 0.75 : 1)};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: ${props => props.theme.palette.text.primary};
`;

/**
 * Title component for a grid
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {any} props.children Children supplied to the title
 * @param {string} props.backgroundColor Color to be applied to the title
 */
export default function GridTitle({ className, children, backgroundColor}) {

    return (
        <>
            <Title className={className} data-bc={backgroundColor} item>
                <Typography variant="h2">
                    { children }
                </Typography>
            </Title>
        </>
    );
}