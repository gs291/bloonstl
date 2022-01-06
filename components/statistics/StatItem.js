import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "../tower/Counter";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const Item = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemText = styled(TowerText)`
  width: 90%;
  border-bottom: 2px solid;
`;

const Value = styled(TowerText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ItemContainer = styled("div", globalOptions)`
  width: ${props => props["size"] === "medium" ? 100 : 85}px;
  max-width: ${props => props["size"] === "medium" ? 100 : 85}px;
  
  text-align: center;
  transition: 0.3s;
  border-radius: 10px;
  padding: 3px 0;

  &:hover  {
    cursor: pointer;
    box-shadow: 0 0 5px 4px ${props => 
            props["data-s"] 
                    ? props["data-s"] 
                    :  props["data-dm"] ? siteColors.stats.hover.dark : siteColors.stats.hover.light
    };
  }
`;

const getStatColor = (difference, darkMode, decimals) => {
    if (decimals > 0) {
        if (difference < 0) {
            return darkMode ? siteColors.stats.pros.dark : siteColors.stats.pros.light;
        } else if (difference > 0) {
            return darkMode ? siteColors.stats.cons.dark : siteColors.stats.cons.light;
        } else {
            return darkMode ? siteColors.text.dark : siteColors.text.light;
        }
    }

    if (difference > 0) {
        return darkMode ? siteColors.stats.pros.dark : siteColors.stats.pros.light;
    } else if (difference < 0) {
        return darkMode ? siteColors.stats.cons.dark : siteColors.stats.cons.light;
    } else {
        return darkMode ? siteColors.text.dark : siteColors.text.light;
    }
}

const StatCounter = styled(Counter)`
  color: ${props => getStatColor(props["data-d"], props["data-dm"], props["decimals"])};
`;

const StatText = styled(TowerText)`
  color: ${props => getStatColor(props["data-d"], props["data-dm"], props["decimals"])};
`;


const FullItem = ({text, value, prevValue, counter = true, size = "medium", decimals, prefix, suffix, darkMode, ...rest}) => (
    <ItemContainer data-dm={darkMode} size={size} { ...rest }>
        <Item>
            <ItemText variant={size === "medium" ? "subtitle1" : "subtitle2"} component="div" >
                {text}
            </ItemText>
        </Item>
        <Value variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true}>
            {prefix && (<TowerText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} dangerouslySetInnerHTML={{__html: prefix}} />)}
            {(counter === true && typeof value === "number") ? (
                <StatCounter cost={value} data-d={value - prevValue} data-dm={darkMode} decimals={decimals ? decimals : 0} gold={false}/>
            ) : (
                <StatText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} data-d={prevValue} data-dm={darkMode}>
                    {value}
                </StatText>
            )}
            {suffix && (<TowerText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} dangerouslySetInnerHTML={{__html: suffix}} />)}
        </Value>
    </ItemContainer>
);

export default function StatItem({tooltip, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            {tooltip ? (
                <Tooltip title={tooltip}>
                    <FullItem {...rest} darkMode={darkMode}/>
                </Tooltip>
            ) : (
                <FullItem {...rest} darkMode={darkMode}/>
            )}
        </>
    );
}