import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Title = styled(Grid, globalOptions)`
  padding-top: 20px;
  padding-bottom: 20px;
  
  text-align: center;
  transition: 0.3s;
  background-color: ${props => rgbaHex(props["data-bc"], props["data-dm"] ? 0.75 : 1)};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
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
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Title className={className} data-bc={backgroundColor} data-dm={darkMode} item>
                <Typography variant="h3">
                    { children }
                </Typography>
            </Title>
        </>
    );
}