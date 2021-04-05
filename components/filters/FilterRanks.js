import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@material-ui/core";

import {font_family, rankColors} from "../../lib/utils";

const BGroup = styled(ButtonGroup)`
  justify-content: center;
  height: 45px;
`;


const RankButton  = styled(Button)`
  background-color: ${props => rankColors(props.name)};
  font-family: ${font_family};
  
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => rankColors(props.name, true)};
  }
`;

export default function FilterRanks({ className, rank, handleRank }) {
    return (
        <>
            <BGroup variant="contained" disableElevation>
                <RankButton onClick={() => handleRank("s")} name="s">S&nbsp;&nbsp;Tier</RankButton>
                <RankButton onClick={() => handleRank("a")} name="a">A&nbsp;&nbsp;Tier</RankButton>
                <RankButton onClick={() => handleRank("b")} name="b">B&nbsp;&nbsp;Tier</RankButton>
            </BGroup>
        </>
    );
}