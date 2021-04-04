import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@material-ui/core";

import {rankColors} from "../../lib/utils";

const BGroup = styled(ButtonGroup)`
  justify-content: center;
  height: 45px;
`;


const RankButton  = styled(Button)`
  box-shadow: ${props => props.pressed ? "inset 0px 0px 15px #000" : "none" };
  
  background-color: ${props => rankColors(props.name)};
  
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => rankColors(props.name, true)};
  }
`;

export default function FilterRanks({ className, rank, handleRank }) {
    return (
        <>
            <BGroup variant="contained" disableElevation >
                <RankButton onClick={() => handleRank("s")} pressed={(rank === "s") ? 1 : 0} name="s">S</RankButton>
                <RankButton onClick={() => handleRank("a")} pressed={(rank === "a") ? 1 : 0} name="a">A</RankButton>
                <RankButton onClick={() => handleRank("b")} pressed={(rank === "b") ? 1 : 0} name="b">B</RankButton>
            </BGroup>
        </>
    );
}