import styled from "@emotion/styled";
import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import BorderClearIcon from '@mui/icons-material/BorderClear';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';

import HeroIcon from "../icon/HeroIcon";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import MonkeyIcon from "../icon/MonkeyIcon";
import {rgbaHex} from "../../lib/utils/utils";
import siteSizes from "../../lib/utils/siteSizes";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getBorder, getHeroState, getMonkeyState, getMobile} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";
import {TOGGLE_BORDER, TOGGLE_HEROES, TOGGLE_MONKEYS, updateFilter} from "../../lib/redux/actions"


const iconSize = siteSizes.icon.filter.height;

const FilterContainer = styled(FormControl)`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FilterTitle = styled(TowerText)`
  margin-bottom: 15px;
`;

const FilterArea = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BorderOutlined = styled(BorderOuterIcon)`
  width: ${iconSize};
  height: ${iconSize};
`;

const BorderClear = styled(BorderClearIcon)`
  width: ${iconSize};
  height: ${iconSize};
`;

const Monkey = styled(MonkeyIcon, globalOptions)`
  width: ${iconSize};
  height: ${iconSize};
  fill: currentColor;

  border-bottom: 3px solid ${props => props["data-s"] ? props.theme.palette.filters.on : props.theme.palette.filters.off};
`;

const Hero = styled(HeroIcon, globalOptions)`
  width: ${iconSize};
  height: ${iconSize};
  padding: 3px 0;
  fill: currentColor;
  
  border-bottom: 3px solid ${props => props["data-s"] ? props.theme.palette.filters.on : props.theme.palette.filters.off};
`;


const FilterIconContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterIcon = styled("div", globalOptions)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-left: 5px;
  margin-right: 5px;
  padding: 1em 1em;
  transition: 0.3s;
  border-radius: 50%;
  
  color: ${props => props.theme.palette.text.primary};
  
  &:hover {
    cursor: pointer;
    background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.5)};
  }
`;


const GA4_TIER_LIST_FILTERS_ID = "TIER_LIST_FILTERS";
const GA4_TIER_LIST_FILTERS_BORDER_ID = "BORDER";
const GA4_TIER_LIST_FILTERS_MONKEYS_ID = "MONKEYS";
const GA4_TIER_LIST_FILTERS_HEROES_ID = "HEROES";

/**
 * Tier list filters
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function FiltersTierList({className}) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const border = useSelector(getBorder);
    const heroes = useSelector(getHeroState);
    const monkeys = useSelector(getMonkeyState);

    const sendAnalytics = (id) => ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_TIER_LIST_FILTERS_ID}_${id}`});

    const handleBorder = () => {dispatch(updateFilter(TOGGLE_BORDER)); sendAnalytics(GA4_TIER_LIST_FILTERS_BORDER_ID)};
    const handleHeroes = () => {dispatch(updateFilter(TOGGLE_HEROES)); sendAnalytics(GA4_TIER_LIST_FILTERS_HEROES_ID)};
    const handleMonkeys = () => {dispatch(updateFilter(TOGGLE_MONKEYS)); sendAnalytics(GA4_TIER_LIST_FILTERS_MONKEYS_ID)};

    return (
        <>
            <FilterContainer data-m={mobile} className={className}>
                <FilterTitle variant="h4">
                    Filters
                </FilterTitle>
                <FilterArea>
                    <FilterIconContainer>
                        <TowerText variant="caption">
                            Borders
                        </TowerText>
                        <Tooltip title={(<TowerText variant="h6" font={true}>Toggle Borders</TowerText>)} forceWidth={false} placement="bottom" ga4ID="FILTER_TIER_LIST_BORDERS" >
                            <FilterIcon onClick={handleBorder}>
                                {border ? (
                                    <BorderOutlined />
                                ) : (
                                    <BorderClear />
                                )}
                            </FilterIcon>
                        </Tooltip>
                    </FilterIconContainer>
                    <FilterIconContainer>
                        <TowerText variant="caption">
                            Monkeys
                        </TowerText>
                        <Tooltip title={(<TowerText variant="h6" font={true}>Toggle Monkeys</TowerText>)} forceWidth={false} placement="bottom" ga4ID="FILTER_TIER_LIST_MONKEYS" >
                            <FilterIcon onClick={handleMonkeys}>
                                <Monkey data-s={monkeys} />
                            </FilterIcon>
                        </Tooltip>
                    </FilterIconContainer>
                    <FilterIconContainer>
                        <TowerText variant="caption">
                            Heroes
                        </TowerText>
                        <Tooltip title={(<TowerText variant="h6" font={true}>Toggle Heroes</TowerText>)} forceWidth={false} placement="bottom" ga4ID="FILTER_TIER_LIST_HEROES" >
                            <FilterIcon onClick={handleHeroes}>
                                <Hero data-s={heroes} />
                            </FilterIcon>
                        </Tooltip>
                    </FilterIconContainer>

                </FilterArea>
            </FilterContainer>
        </>
    );
}