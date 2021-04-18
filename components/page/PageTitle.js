import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const Title = styled(Typography)`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  border-bottom: 6px solid ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
`;

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