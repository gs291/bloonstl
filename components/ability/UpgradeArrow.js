import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {DoubleArrow} from "@mui/icons-material";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const UpgradeArrowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow, globalOptions)`
  color: ${props => 
          props["data-s"] 
                  ? getTierColor(props.tier) 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  ${props => props["data-m"] ? "width: 15px;" : ""}
`;

export default function UpgradeArrow({ className, tier, selected }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow data-s={selected} tier={tier} data-dm={darkMode} data-m={mobile}/>
            </UpgradeArrowContainer>
        </>
    );
}