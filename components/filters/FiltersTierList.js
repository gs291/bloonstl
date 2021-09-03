import styled from "@emotion/styled";
import {FormControl} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import BorderClearIcon from '@material-ui/icons/BorderClear';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';

import HeroIcon from "../icon/HeroIcon";
import MonkeyIcon from "../icon/MonkeyIcon";
import {rgbaHex} from "../../lib/utils/utils";
import TextTooltip from "../tooltip/TextTooltip";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {TOGGLE_BORDER, TOGGLE_HEROES, TOGGLE_MONKEYS, updateFilter} from "../../lib/redux/actions";
import {getBorder, getDarkMode, getHeroState, getMonkeyState, getMobile} from "../../lib/redux/selectors";


const iconSize = siteSizes.icon.filter.height;

const FilterContainer = styled(FormControl)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props["data-m"] ? "column": "row"};
`;

const FilterArea = styled.div`
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

const Monkey = styled(MonkeyIcon)`
  width: ${iconSize};
  height: ${iconSize};
  fill: currentColor;
  transition: 0.3s;

  border-bottom: 2px solid ${props => props["data-s"] ? siteColors.pros.dark : siteColors.cons.dark};
`;

const Hero = styled(HeroIcon)`
  width: ${iconSize};
  height: ${iconSize};
  padding: 3px 0;
  fill: currentColor;
  transition: 0.3s;
  
  border-bottom: 2px solid ${props => props["data-s"] ? siteColors.pros.dark : siteColors.cons.dark};
`;

const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-left: 5px;
  margin-right: 5px;
  padding: 1.5em 1.5em;
  transition: 0.3s;
  border-radius: 50%;
  
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &:hover {
    cursor: pointer;
    background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.light : siteColors.accent.dark, 0.5)};
  }
`;

export default function FiltersTierList({className}) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const border = useSelector(getBorder);
    const heroes = useSelector(getHeroState);
    const darkMode = useSelector(getDarkMode);
    const monkeys = useSelector(getMonkeyState);

    const handleBorder = () => dispatch(updateFilter(TOGGLE_BORDER));
    const handleHeroes = () => dispatch(updateFilter(TOGGLE_HEROES));
    const handleMonkeys = () => dispatch(updateFilter(TOGGLE_MONKEYS));

    return (
        <>
            <FilterContainer data-m={mobile} className={className}>
                <FilterArea>
                    <TextTooltip tooltip={"Toggle Borders"}>
                        <FilterIcon data-dm={darkMode} onClick={handleBorder}>
                                {border ? (
                                    <BorderOutlined />
                                ) : (
                                    <BorderClear />
                                )}
                        </FilterIcon>
                    </TextTooltip>
                    <TextTooltip tooltip={"Toggle Monkeys"}>
                        <FilterIcon data-dm={darkMode} onClick={handleMonkeys}>
                                <Monkey data-s={monkeys} data-dm={darkMode}/>
                        </FilterIcon>
                    </TextTooltip>
                    <TextTooltip tooltip={"Toggle Heroes"}>
                        <FilterIcon data-dm={darkMode} onClick={handleHeroes}>
                                <Hero data-s={heroes} data-dm={darkMode}/>
                        </FilterIcon>
                    </TextTooltip>
                </FilterArea>
            </FilterContainer>
        </>
    );
}