import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {goldCost} from "../../lib/utils";
import {getDifficulty} from "../../lib/redux/selectors";


export default function AbilityTooltip({ className, ability}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <Typography variant="caption">
                { ability.name && (
                    <>
                        { ability.name } ${goldCost(ability.cost_gold, difficulty)}
                    </>
                )}
                { !ability.name && (
                    <>
                        { ability.description }
                    </>
                )}
            </Typography>
        </>
    );
}