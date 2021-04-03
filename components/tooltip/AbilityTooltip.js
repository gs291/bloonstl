import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {goldCost} from "../../lib/utils";
import {getDifficulty} from "../../lib/redux/selectors";

const AbilityText = styled(Typography)`
  ${props => props.text ? `font-family: sans-serif;` : "" }
`;

export default function AbilityTooltip({ className, ability}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <AbilityText variant="caption" text={1}>
                { ability.name && (
                    <>
                        <AbilityText variant="caption">
                            { ability.name } ${goldCost(ability.cost_gold, difficulty)}
                        </AbilityText>
                    </>
                )}
                { !ability.name && (
                    <>
                        { ability.description }
                    </>
                )}
            </AbilityText>
        </>
    );
}