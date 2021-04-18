import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Title = styled(Grid)`
  padding-top: 20px;
  padding-bottom: 20px;
  
  text-align: center;
  transition: 0.3s;
  background-color: ${props => props["data-bc"]};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  opacity: ${props => props["data-dm"] ? 0.75 : 1};
  color: ${props => props["data-dm"] ? siteColors.text.gridTitle.dark : siteColors.text.gridTitle.light};
`;

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