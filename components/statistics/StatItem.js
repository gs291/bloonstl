import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "../tower/Counter";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {MAX_STAT_VALUE} from "../../lib/utils/utils";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {ga4SendSelectContent, SELECT_CONTENT_STAT, STAT_PREFIX, textToGA4Text} from "../../lib/utils/ga4";

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

const getStatColor = (difference, darkMode, lowerIsBuff) => {
    if (lowerIsBuff) {
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
  color: ${props => getStatColor(props["data-d"], props["data-dm"], props["data-l"])};
`;

const StatText = styled(TowerText)`
  color: ${props => getStatColor(props["data-d"], props["data-dm"], props["data-l"])};
`;

//Checks to see if it should show decimals (when it would have otherwise not shown)
const getDecimals = (num, decimals) => {
    let right = Math.floor(num);
    right = right === 0 ? 1 : right;
    const rem = num % right;
    return (rem <= 1 && rem >= -1 && rem !== 0 && decimals === 0) ? 1 : decimals
};


const FullItem = ({text, value, prevValue, prefix, suffix, darkMode, counter = true, size="medium", decimals=0, lowerIsBuff=false, ...rest}) => (
    <ItemContainer data-dm={darkMode} size={size} { ...rest }>
        <Item>
            <ItemText variant={size === "medium" ? "subtitle1" : "subtitle2"} component="div" >
                {text}
            </ItemText>
        </Item>
        <Value variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true}>
            {prefix && (<TowerText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} dangerouslySetInnerHTML={{__html: prefix}} />)}
            {(counter === true && typeof value === "number" && value < MAX_STAT_VALUE) ? (
                <StatCounter cost={value} data-d={value - prevValue} data-dm={darkMode} data-l={lowerIsBuff} decimals={getDecimals(value, decimals)} gold={false}/>
            ) : (
                <StatText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} data-l={lowerIsBuff} data-d={typeof value === "number" ? (value - prevValue) : prevValue} data-dm={darkMode}>
                    {(typeof value === "number"
                        ? value >= MAX_STAT_VALUE ? '∞' : value.toFixed(getDecimals(value, decimals))
                        : value
                    )}
                </StatText>
            )}
            {suffix && (<TowerText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} dangerouslySetInnerHTML={{__html: suffix}} />)}
        </Value>
    </ItemContainer>
);


const GA4_STAT_ITEM_ID = "STAT_ITEM";
export default function StatItem({tooltip, text, statType="main", ...rest}) {
    const darkMode = useSelector(getDarkMode);

    const handleClick = () => ga4SendSelectContent(SELECT_CONTENT_STAT, {
        item_id: `${STAT_PREFIX}${GA4_STAT_ITEM_ID}`,
        type: statType,
        name: text
    });

    return (
        <>
            {tooltip ? (
                <Tooltip title={tooltip} ga4ID={`STAT_ITEM_${textToGA4Text(statType)}_${textToGA4Text(text)}`}>
                    <FullItem text={text} onClick={handleClick} darkMode={darkMode} {...rest}/>
                </Tooltip>
            ) : (
                <FullItem text={text} onClick={handleClick} darkMode={darkMode} {...rest} />
            )}
        </>
    );
}