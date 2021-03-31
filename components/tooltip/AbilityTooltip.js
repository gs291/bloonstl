import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {getDifficulty} from "../../lib/redux/selectors";
import {goldCost} from "../../lib/utils";


export default function AbilityTooltip({ className, ability}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <Typography variant="caption">
                { ability.name } ${goldCost(ability.cost_gold, difficulty)}
            </Typography>
        </>
    );
}