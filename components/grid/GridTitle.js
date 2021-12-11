import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Title = styled(Grid)`
  padding-top: 20px;
  padding-bottom: 20px;
  
  text-align: center;
  transition: 0.3s;
  background-color: ${props => rgbaHex(props["data-bc"], props["data-dm"] ? 0.75 : 1)};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
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