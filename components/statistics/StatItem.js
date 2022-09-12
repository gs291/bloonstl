import styled from "@emotion/styled";

import Counter from "../tower/Counter";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import {MAX_STAT_VALUE} from "../../lib/utils/utils";
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
    box-shadow: 0 0 5px 4px ${props => props["data-s"] ? props["data-s"] : props.theme.palette.stats.hover};
  }
`;

/**
 * Get statistic color
 *
 * @param {Object} theme MUI 5 theme for the project
 * @param {number} difference Statistics difference between the modified and default statistic
 * @param {boolean} lowerIsBuff Shows if a negative difference is a buff
 *
 * @return {string} The HEX color code for the statistic
 */
const getStatColor = (theme, difference, lowerIsBuff) => {
    if (lowerIsBuff) {
        if (difference < 0) {
            return theme.palette.stats.pros;
        } else if (difference > 0) {
            return theme.palette.stats.cons;
        } else {
            return theme.palette.text.primary;
        }
    }

    if (difference > 0) {
        return theme.palette.stats.pros
    } else if (difference < 0) {
        return theme.palette.stats.cons;
    } else {
        return theme.palette.text.primary;
    }
}

const StatCounter = styled(Counter)`
  color: ${props => getStatColor(props.theme, props["data-d"], props["data-l"])};
`;

const StatText = styled(TowerText)`
  color: ${props => getStatColor(props.theme, props["data-d"], props["data-l"])};
`;

/**
 * Checks to see if it should show decimals (when it would have otherwise not shown)
 *
 * @param {number} num The number to check if decimals are needed
 * @param {number} decimals The amount of decimals to show
 *
 * @return {number} The amount of decimals to show if the number should display it
 */
const getDecimals = (num, decimals) => {
    let right = Math.floor(num);
    right = right === 0 ? 1 : right;
    const rem = num % right;
    return (rem <= 1 && rem >= -1 && rem !== 0 && decimals === 0) ? 1 : decimals
};


/**
 * The true statistics item component
 *
 * @param {Object} props Component props
 * @param {string} props.text Text/Title for the stat item
 * @param {number|string} props.value The number or string for the statistics
 * @param {number} props.prevValue The previous value number to compare to {props.value}
 * @param {string|null} props.prefix The prefix to attach to the statistics value
 * @param {string|null} props.suffix The suffix to attach to the statistics value
 * @param {boolean} [props.counter=true] Shows if the statistics value should be shown in a counter
 * @param {string} [props.size="medium"] Shows how big the stat item should be
 * @param {number} [props.decimals=0] Shows how many decimals should be shown if needed
 * @param {boolean} [props.lowerIsBuff=false] Shows if a negative value difference is a buff
 */
const FullItem = ({text, value, prevValue, prefix, suffix, counter = true, size="medium", decimals=0, lowerIsBuff=false, ...rest}) => (
    <ItemContainer size={size} { ...rest }>
        <Item>
            <ItemText variant={size === "medium" ? "subtitle1" : "subtitle2"} component="div" >
                {text}
            </ItemText>
        </Item>
        <Value variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true}>
            {prefix && (<TowerText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} dangerouslySetInnerHTML={{__html: prefix}} />)}
            {(counter === true && typeof value === "number" && value < MAX_STAT_VALUE) ? (
                <StatCounter cost={value} data-d={value - prevValue} data-l={lowerIsBuff} decimals={getDecimals(value, decimals)} gold={false}/>
            ) : (
                <StatText variant={size === "medium" ? "h6" : "subtitle1"} component="div" font={true} data-l={lowerIsBuff} data-d={typeof value === "number" ? (value - prevValue) : prevValue}>
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

/**
 * Statistics item
 *
 * @param {Object} props Component props
 * @param {HTMLElement|string} props.tooltip HTML element or string to display in the tooltip
 * @param {string} props.text Text/Title for the stat item
 * @param {string} [props.statType="main"] Shows where the stat item is located (E.g. main is for the tower statistics)
 */
export default function StatItem({tooltip, text, statType="main", ...rest}) {

    const handleClick = () => ga4SendSelectContent(SELECT_CONTENT_STAT, {
        item_id: `${STAT_PREFIX}${GA4_STAT_ITEM_ID}`,
        type: statType,
        name: text
    });

    return (
        <>
            {tooltip ? (
                <Tooltip title={tooltip} ga4ID={`STAT_ITEM_${textToGA4Text(statType)}_${textToGA4Text(text)}`}>
                    <FullItem text={text} onClick={handleClick} {...rest}/>
                </Tooltip>
            ) : (
                <FullItem text={text} onClick={handleClick} {...rest} />
            )}
        </>
    );
}