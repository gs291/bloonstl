import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getHeroColor, getMonkeyColor, rgbaHex} from "../../lib/utils/utils";

const TitleContainer = styled("div", globalOptions)`
  width: 100%;
  padding: 0.6em;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  background-color: ${props =>
          rgbaHex(props["data-t"] 
                          ? props["data-tow"] === "hero" 
                                  ? getHeroColor(props["data-t"]) 
                                  :  getMonkeyColor(props["data-t"])
                          : props["data-dm"] ? siteColors.page.dark : siteColors.page.light
                  , props["data-dm"] ? 0.65 : 1)};
`;

const TitleWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const Title = styled(TowerText)`
  
`;

export default function StatsTitle({title, type, towerType, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer data-t={type} data-dm={darkMode} data-tow={towerType} {...rest}>
                <TitleWrapper>
                    <Title variant="h5">
                        {title}
                    </Title>
                </TitleWrapper>
            </TitleContainer>
        </>
    );
}