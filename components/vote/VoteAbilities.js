import {useState} from "react";
import styled from "@emotion/styled";
import {Button, Collapse, Typography} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import VoteAbilitiesTier from "./VoteAbilitiesTier";

const Expander = styled(Button)`
  &:hover {
    cursor: pointer;
  }
`;

export default function VoteAbilities() {
    const [ collapse, setCollapse ] = useState(false);

    const handleCollapse = (_) => setCollapse(!collapse);

    return (
        <>
            <div>
                <Typography variant="body1" component="div">
                    Abilities Pros/Cons?
                    &nbsp;
                    <Expander onClick={handleCollapse}>
                        <AddCircleOutlineIcon />
                    </Expander>
                    &nbsp;
                    optional *
                </Typography>
                <Collapse in={collapse}>
                    <VoteAbilitiesTier />
                </Collapse>
            </div>
        </>
    );
}
