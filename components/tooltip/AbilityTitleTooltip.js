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

const ImageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const PathText = styled(TowerText)``;

/**
 * Ability image for the tooltip
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.darkMode Shows if darkMode is enabled or disabled
 * @param {boolean} props.mobile Shows if mobile is enabled or disabled
 */
const AbilityImage = ({ability, fileName, towerType, darkMode, mobile}) => (
    <>
        <VerticalDivider backgroundColor={darkMode ? siteColors.text.dark : siteColors.text.light} />

        <ImageWrapper>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image data-m={mobile}>
                <ImageContainer data-m={mobile}>
                    <ImageFill
                        src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                        alt={ ability.name }
                    />
                </ImageContainer>
            </Image>
            {towerType === "monkey" && (
                <PathText variant={mobile ? "subtitle1" : "h5"} data-dm={darkMode} >
                    {ability.upgrade_path === 0 ? ability.upgrade_tier + 1 : ability.upgrade_path === 3 ? "5" : "0"}
                    &nbsp;-&nbsp;
                    {ability.upgrade_path === 1 ? ability.upgrade_tier + 1 : ability.upgrade_path === 3 ? "5" : "0"}
                    &nbsp;-&nbsp;
                    {ability.upgrade_path === 2 ? ability.upgrade_tier + 1 : ability.upgrade_path === 3 ? "5" : "0"}
                </PathText>
            )}
        </ImageWrapper>
    </>
);

/**
 * Ability title/header tooltip component
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
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
                                    selected
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
                        <AbilityImage ability={ability} fileName={fileName} towerType={towerType} darkMode={darkMode} mobile={mobile} />
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
                    <AbilityImage ability={ability} fileName={fileName} towerType={towerType} darkMode={darkMode} mobile={mobile} />
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