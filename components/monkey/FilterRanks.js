import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@material-ui/core";

import { rankColors } from "./Monkey";

const BGroup = styled(ButtonGroup)`
  justify-content: center;
`;


const RankButton  = styled(Button)`
  box-shadow: ${props => props["data-pressed"] === "true" ? "inset 0px 0px 5px #000" : "none" };
  
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
                <RankButton onClick={(e) => handleRank(e, "s")} data-pressed={(rank === "s").toString()} name="s">S</RankButton>
                <RankButton onClick={(e) => handleRank(e, "a")} data-pressed={(rank === "a").toString()} name="a">A</RankButton>
                <RankButton onClick={(e) => handleRank(e, "b")} data-pressed={(rank === "b").toString()} name="b">B</RankButton>
            </BGroup>
        </>
    );
}