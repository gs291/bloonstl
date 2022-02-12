import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const Title = styled(Typography, globalOptions)`
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  border-bottom: 6px solid ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  text-overflow: ellipsis;
  overflow: hidden;
`;

/**
 * Website title for a page
 *
 * @param {Object} props Component props
 * @param {string} props.title Title to be displayed in the page
 */
export default function PageTitle({title}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Title variant={mobile ? "h2" : "h1"} component="h1" data-dm={darkMode}>
                {title}
            </Title>
        </>
    );
}