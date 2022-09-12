import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import ImageFill from "../image/ImageFill";
import FixedDivider from "../divider/FixedDivider";
import VerticalDivider from "../divider/VerticalDivider";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";
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
 * @param {boolean} props.mobile Shows if mobile is enabled or disabled
 */
const AbilityImage = ({ability, fileName, towerType, mobile}) => (
    <>
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
                <PathText variant={mobile ? "subtitle1" : "h5"}>
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
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TitleContainer>
                <InfoContainer data-m={mobile}>
                    <FullContainer>
                        {towerType === "hero" && (
                            <TowerText
                                variant={mobile ? "h5" : "h4"}
                                textColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary}
                            >
                                Level {ability.upgrade_tier + 1}
                            </TowerText>
                        )}
                        { ability.name !== "" && (
                            <TowerText
                                variant={mobile ? "h5" : "h4"}
                                textColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary}
                            >
                                {ability.name}
                            </TowerText>
                        )}
                        {towerType === "monkey" && (
                            <TowerText variant="body1" textColor={theme.palette.text.gold}>
                                In-game cost:&nbsp;
                                ${getThousandsNumber(goldCost(ability.cost_gold, difficulty))}
                            </TowerText>
                        )}
                        <TowerText variant="body1" textColor={theme.palette.text.xp}>
                            {towerType === "hero"
                                ? (<>In-game XP Unlock:&nbsp;&nbsp;{ability.cost_xp === 0 ? "FREE" : getThousandsNumber(ability.cost_xp)}</>)
                                : (<>XP Unlock Cost:&nbsp;&nbsp;{ability.cost_xp === 0 ? "FREE" : getThousandsNumber(ability.cost_xp)}</>)
                            }
                        </TowerText>
                    </FullContainer>
                    {(mobile && ability.name !== "" ) && (
                        <>
                            <VerticalDivider backgroundColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary} />
                            <AbilityImage ability={ability} fileName={fileName} towerType={towerType} mobile={mobile} />
                        </>
                    )}
                    { !mobile && (
                        <TowerText
                            variant="body2"
                            component="div"
                            textColor={theme.palette.text.description}
                            font={true}>
                            {ability.description}
                        </TowerText>
                    )}
                </InfoContainer>

                {(!mobile && ability.name !== "" ) && (
                    <>
                        <VerticalDivider backgroundColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary} />
                        <AbilityImage ability={ability} fileName={fileName} towerType={towerType} mobile={mobile} />
                    </>
                )}
            </TitleContainer>

            {mobile && (
                <FixedDivider width={100} backgroundColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary}/>
            )}

            { mobile && (
                <FullContainer>
                    <TowerText
                        variant="body2"
                        component="div"
                        textColor={theme.palette.text.description}
                        font={true}>
                        {ability.description}
                    </TowerText>
                </FullContainer>
            )}
        </>
    );
}