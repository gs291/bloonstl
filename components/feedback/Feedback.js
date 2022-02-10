import {Link} from "@mui/material";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import OutboundIcon from "@mui/icons-material/Outbound";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const FixedFeedback = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 40%;
  
  transform-origin: right bottom;
  transform: rotate(270deg);
`;

const FeedBackContainer = styled("div", globalOptions)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  padding: ${props => props["data-m"] ? "4px 7.5px" : "6px 10px"};
  background-color: ${props => props["data-dm"] ? siteColors.button.dark : siteColors.button.light};
  
  &:hover {
    padding-bottom: 8px;
  }
`;

const OutBound = styled(OutboundIcon, globalOptions)`
  margin-left: 5px;
  font-size: ${props => props["data-m"] ? 1 : 1.25}rem;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function Feedback() {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <FixedFeedback
                href="https://forms.gle/YXY4qyXdgfxcFcpH7"
                underline="none"
            >
                <FeedBackContainer data-dm={darkMode} data-m={mobile}>
                    <TowerText variant={mobile ? "body1" : "h6"}>
                        FEEDBACK
                    </TowerText>
                    <OutBound data-dm={darkMode} data-m={mobile} fontSize={mobile ? "small" : "medium"}/>
                </FeedBackContainer>
            </FixedFeedback>
        </>
    );
}