import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Card, CardContent, Link as MUILink, Typography} from "@mui/material";

import Icon from "../tower/Icon";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getBorder, getDarkMode, getMobile} from "../../lib/redux/selectors";
import {getTowerLink, getMonkeyColor, getHeroColor, rgbaHex} from "../../lib/utils/utils";

const CardContainer = styled(Card, globalOptions)`
  @keyframes popup {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  animation-name: popup;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  
  
  
  margin: 5px;
  background-color: ${props => props["data-bc"]};
  border: 4px solid ${props => props["data-brc"]};
  border-radius: 10px;
  transition: 0.3s;
  
  &:hover{
    cursor: pointer;
    transform: translateY(-10px);
    background-color: ${props => props["data-hbc"]};
    box-shadow: 0 10px 10px ${props => rgbaHex(props["data-bc"], 0.75)};
  }
`;

const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const TowerName = styled(Typography, globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function TowerCard({tower, towerType, tier, ignoreFilter}) {
    const mobile = useSelector(getMobile);
    const border = useSelector(getBorder);
    const darkMode = useSelector(getDarkMode);

    let href, borderColor, backgroundColor, hoverBackgroundColor;

    if (towerType === "monkey") {
        href = `/monkey/${getTowerLink(tower.name)}`;
        borderColor = getMonkeyColor(tower.type, darkMode);
        backgroundColor = getMonkeyColor(tower.type, darkMode,  tier, true);
        hoverBackgroundColor = getMonkeyColor(tower.type, darkMode, tier, true, true);
    } else if (towerType === "hero") {
        href = `/hero/${getTowerLink(tower.name)}`;
        borderColor = getHeroColor(tower.name, darkMode);
        backgroundColor = getHeroColor(tower.name, darkMode, tier, true, false);
        hoverBackgroundColor = getHeroColor(tower.name, darkMode, tier, true, true);
    }

    if (!border && ignoreFilter === 0) {
        borderColor = backgroundColor;
    }

    return (
        <>
            <Link href={href} passHref>
                <MLink>
                    <CardContainer data-brc={borderColor} data-bc={backgroundColor} data-hbc={hoverBackgroundColor}>
                        <CardContent>
                            <Icon tower={tower}/>
                            <TowerName variant={mobile ? "body1" : "h5"} data-dm={darkMode}>
                                {tower.name}
                            </TowerName>
                        </CardContent>
                    </CardContainer>
                </MLink>
            </Link>
        </>
    );
}