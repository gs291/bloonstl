import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding: 3em ${props => props["data-m"] ? 0.25 : 2}em;

  transition: 0.3s;
  background-color: ${props => props["data-bc"]};
  color: ${props => props["data-dm"] ? siteColors.text.gridTitle.dark : siteColors.text.gridTitle.light};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default function GridItems({ className, children, backgroundColor}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <GridItem
                className={className}
                data-m={mobile}
                data-bc={backgroundColor}
                data-dm={darkMode}
                item
            >
                { children }
            </GridItem>
        </>
    );
}