import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin-bottom: 10px;
  
  padding: 3em ${props => props["data-m"] ? 0.25 : 2}em;

  background-color: ${props => props["data-bc"]};
  color: ${siteColors.text.gridTitle.dark};
  border-radius: 20px;
`;

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