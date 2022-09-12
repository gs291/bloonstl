import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const GridItem = styled(Grid, globalOptions)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding: 3em ${props => props["data-m"] ? 0.25 : 2}em;

  background-color: ${props => props["data-bc"]};
  color: ${props => props.theme.palette.text.gridTitle};
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
`;

/**
 * Tier list/monkey/hero grid item
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {any} props.children Children supplied to the grid item
 * @param {string} props.backgroundColor Color to be applied to the grid item
 */
export default function GridItems({ className, children, backgroundColor}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <GridItem
                className={className}
                data-m={mobile}
                data-bc={backgroundColor}
                item
            >
                { children }
            </GridItem>
        </>
    );
}