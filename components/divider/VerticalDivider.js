import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const VDivider = styled(Divider)`
  margin-left: 10px;
  margin-right: 10px;
  
  background-color: ${props => 
          props["data-bc"] 
                  ? props["data-bc"] 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function VerticalDivider({ backgroundColor }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <VDivider flexItem orientation="vertical" data-bc={backgroundColor} data-dm={darkMode}/>
        </>
    );
}