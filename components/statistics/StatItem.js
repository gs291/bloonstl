import styled from "@emotion/styled";

import Counter from "../tower/Counter";
import TowerText from "../tower/TowerText";

const Item = styled(TowerText)`
  padding: 0.5em;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Value = styled(TowerText)`
  display: inline-block;
  margin-left: 5px;
`;

export default function StatItem({text, value, counter = true, decimals, ...rest}) {

    return (
        <>
            <Item variant="body1" component="div" { ...rest }>
                {text}:
                <Value variant="body1" font={true} component="div">
                    {(counter === true && typeof value === "number") ? (
                        <Counter cost={value} decimals={decimals ? decimals : 0} gold={false}/>
                    ) : (value)}
                </Value>
            </Item>
        </>
    );
}