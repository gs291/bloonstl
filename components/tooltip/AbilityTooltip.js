import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";



export default function AbilityTooltip({ className, ability}) {
    return (
        <>
            <Typography variant="caption">
                { ability.name }
            </Typography>
        </>
    );
}