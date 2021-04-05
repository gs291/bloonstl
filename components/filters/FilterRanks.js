import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@material-ui/core";

import {font_family, rankColors} from "../../lib/utils/utils";

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

export default function FilterRanks({ className, handleRank }) {
    return (
        <>
            <BGroup variant="contained" disableElevation>
                <RankButton onClick={(e) => handleRank(e, "s")} name="s">S&nbsp;&nbsp;Tier</RankButton>
                <RankButton onClick={(e) => handleRank(e, "a")} name="a">A&nbsp;&nbsp;Tier</RankButton>
                <RankButton onClick={(e) => handleRank(e, "b")} name="b">B&nbsp;&nbsp;Tier</RankButton>
            </BGroup>
        </>
    );
}