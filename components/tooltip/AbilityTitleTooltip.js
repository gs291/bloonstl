import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import ImageFill from "../image/ImageFill";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import VerticalDivider from "../divider/VerticalDivider";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getDifficulty, getMobile} from "../../lib/redux/selectors";
import {getImageUrl, getThousandsNumber, getTierColor, goldCost} from "../../lib/utils/utils";

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InfoContainer = styled("div", globalOptions)`
  width: 100%;
  display: flex;
  flex-direction: ${props => props["data-m"] ? "row" : "column"};
  justify-content: ${props => props["data-m"] ? "center" : "center"};
  align-items: ${props => props["data-m"] ? "center" : "center"};
  text-align: center;
`;

const FullContainer = styled("div")`
  width: 100%;
  text-align: center;
`;

const Image = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 50 : 75}px;
`;

const ImageContainer = styled("div", globalOptions)`
  position: relative;
  margin-left: auto;
  height: ${props => props["data-m"] ? 50 : 75}px;
  width: ${props => props["data-m"] ? 50 : 75}px;
  max-width: ${props => props["data-m"] ? 50 : 75}px;
  max-height: ${props => props["data-m"] ? 50 : 75}px;
`;

// Currently has a bug that I (gs291) did not know how to fix
//   with rendering an Image in a Tooltip. Switching different (Monkey/Hero)Page states and
//   switching between different tooltips at the same times causes warning messages to appear that shouldn't be there. For example:
//   `Image with src "dart-monkey/dart-monkey23.png" may not render properly with a parent using position:"". Consider changing the parent style to position:"relative" with a width and height.`
//   This shouldn't be here because ImageContainer has both position and width/height, right!?
//   It has to most likely do with tooltip transition exiting/entering and its component mount timings but idk

export default function AbilityTitleTooltip({ ability, tier, selected, fileName, towerType, ...rest }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TitleContainer>
                <InfoContainer data-m={mobile}>
                    <FullContainer>
                        {towerType === "hero" && (
                            <TowerText
                                variant={mobile ? "h5" : "h4"}
                                textColor={
                                    selected
                                        ? getTierColor(tier)
                                        : darkMode ? siteColors.text.dark : siteColors.text.light
                                }
                            >
                                Level {ability.upgrade_tier + 1}
                            </TowerText>
                        )}
                        { ability.name !== "" && (
                            <TowerText
                                variant={mobile ? "h5" : "h4"}
                                textColor={
                                    (selected && towerType !== "hero")
                                        ? getTierColor(tier)
                                        : darkMode ? siteColors.text.dark : siteColors.text.light
                                }
                            >
                                {ability.name}
                            </TowerText>
                        )}
                        {towerType === "monkey" && (
                            <TowerText variant="body1" textColor={darkMode ? siteColors.tower.gold.dark : siteColors.tower.gold.light}>
                                In-game cost:&nbsp;
                                ${getThousandsNumber(goldCost(ability.cost_gold, difficulty))}
                            </TowerText>
                        )}
                        <TowerText variant="body1" textColor={darkMode ? siteColors.tower.xp.dark : siteColors.tower.xp.light}>
                            {towerType === "hero"
                                ? (<>In-game XP Unlock:&nbsp;&nbsp;{ability.cost_xp === 0 ? "FREE" : getThousandsNumber(ability.cost_xp)}</>)
                                : (<>XP Unlock Cost:&nbsp;&nbsp;{ability.cost_xp === 0 ? "FREE" : getThousandsNumber(ability.cost_xp)}</>)
                            }
                        </TowerText>
                    </FullContainer>
                    {(mobile && ability.name !== "" ) && (
                        <>
                            <VerticalDivider backgroundColor={darkMode ? siteColors.text.dark : siteColors.text.light} />
                            <Image data-m={mobile}>
                                <ImageContainer data-m={mobile}>
                                    <ImageFill
                                        src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                        alt={ ability.name }
                                    />
                                </ImageContainer>
                            </Image>
                        </>
                    )}
                    { !mobile && (
                        <TowerText
                            variant="body2"
                            component="div"
                            textColor={darkMode ? siteColors.tower.description.dark : siteColors.tower.description.light}
                            font={true}>
                            {ability.description}
                        </TowerText>
                    )}
                </InfoContainer>

                {(!mobile && ability.name !== "" ) && (
                    <>
                        <VerticalDivider backgroundColor={darkMode ? siteColors.text.dark : siteColors.text.light} />
                        <Image data-m={mobile}>
                            <ImageContainer data-m={mobile}>
                                <ImageFill
                                    src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                    alt={ ability.name }
                                />
                            </ImageContainer>
                        </Image>
                    </>
                )}
            </TitleContainer>

            {mobile && (
                <FixedDivider width={100} />
            )}

            { mobile && (
                <FullContainer>
                    <TowerText
                        variant="body2"
                        component="div"
                        textColor={darkMode ? siteColors.tower.description.dark : siteColors.tower.description.light}
                        font={true}>
                        {ability.description}
                    </TowerText>
                </FullContainer>
            )}
        </>
    );
}