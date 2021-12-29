import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "../tower/Counter";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const Item = styled(TowerText)`
  border-bottom: 2px solid;
`;

const Value = styled(TowerText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ItemContainer = styled.div`
  width: 100px;
  max-width: 100px;
  margin: 10px;
  
  text-align: center;
  transition: 0.3s;
  border-radius: 10px;

  &:hover  {
    cursor: pointer;
    box-shadow: 0 0 5px 5px ${props => props["data-dm"] ? siteColors.stats.hover.dark : siteColors.stats.hover.light};
  }
`;

export default function StatItem({text, value, counter = true, decimals, tooltip, prefix, suffix, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    const FullItem = () => (
        <ItemContainer data-dm={darkMode} { ...rest }>
            <Item variant="subtitle1" component="div" >
                {text}
            </Item>
            <Value variant="h6" component="div" font={true}>
                {prefix && (
                    <TowerText variant="h6" component="div" font={true}>
                        {prefix}
                    </TowerText>
                )}
                {(counter === true && typeof value === "number") ? (
                    <Counter cost={value} decimals={decimals ? decimals : 0} gold={false}/>
                ) : (value)}
                {suffix && (
                    <TowerText variant="h6" component="div" font={true}>
                        {suffix}
                    </TowerText>
                )}
            </Value>
        </ItemContainer>
    );

    return (
        <>
            {tooltip ? (
                <Tooltip title={tooltip}>
                    <FullItem />
                </Tooltip>
            ) : (
                <FullItem />
            )}
        </>
    );
}