import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import {FormControl, Tooltip} from "@material-ui/core";
import BorderClearIcon from '@material-ui/icons/BorderClear';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';

import HeroIcon from "../icon/HeroIcon";
import TowerText from "../tower/TowerText";
import MonkeyIcon from "../icon/MonkeyIcon";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {TOGGLE_BORDER, TOGGLE_HEROES, TOGGLE_MONKEYS, updateFilter} from "../../lib/redux/actions";
import {getBorder, getDarkMode, getHeroState, getMonkeyState, getMobile} from "../../lib/redux/selectors";

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
  width: 50px;
  height: 50px;
`;

const BorderClear = styled(BorderClearIcon)`
  width: 50px;
  height: 50px;
`;

const Monkey = styled(MonkeyIcon)`
  width: 50px;
  height: 50px;
  fill: currentColor;
  transition: 0.3s;

  border-bottom: 2px solid ${props => props["data-s"] ? siteColors.chip.pros : siteColors.chip.cons};
`;

const Hero = styled(HeroIcon)`
  width: 50px;
  height: 50px;
  padding: 3px 0;
  fill: currentColor;
  transition: 0.3s;
  
  border-bottom: 2px solid ${props => props["data-s"] ? siteColors.chip.pros : siteColors.chip.cons};
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

const FilterTooltip = ({children, tooltip}) => (
    <>
        <Tooltip
            arrow
            placement="top"
            title={(
                <TowerText
                    variant="h6"
                    font={true}
                    textColor={siteColors.text.dark}
                >
                    {tooltip}
                </TowerText>
            )}
        >
            <div>
                {children}
            </div>
        </Tooltip>
    </>
);

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
                    <FilterTooltip tooltip={"Toggle Borders"}>
                        <FilterIcon data-dm={darkMode} onClick={handleBorder}>
                                {border ? (
                                    <BorderOutlined />
                                ) : (
                                    <BorderClear />
                                )}
                        </FilterIcon>
                    </FilterTooltip>
                    <FilterTooltip tooltip={"Toggle Monkeys"}>
                        <FilterIcon data-dm={darkMode} onClick={handleMonkeys}>
                                <Monkey data-s={monkeys}/>
                        </FilterIcon>
                    </FilterTooltip>
                    <FilterTooltip tooltip={"Toggle Heroes"}>
                        <FilterIcon data-dm={darkMode} onClick={handleHeroes}>
                                <Hero data-s={heroes}/>
                        </FilterIcon>
                    </FilterTooltip>
                </FilterArea>
            </FilterContainer>
        </>
    );
}