import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {
    Card,
    CardContent,
    Collapse } from "@material-ui/core";

import Icon from "./Icon";
import MonkeyDetailed from "./MonkeyDetailed";
import {getMobile} from "../../lib/redux/selectors";
import {background, card} from "../../lib/site-colors.json";
import {useState} from "react";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: ${props => props.mobile ? "column" : "row"};
  
  background-color: ${ card.dark };
  color: #CCC;

  &:hover{
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;



function handleClick(monkey, updateMonkey, mobile, expand, setExpand) {
    if (updateMonkey) {
        return updateMonkey(<MonkeyDetailed monkey={ monkey } />);
    }
    if (!mobile) {
        return setExpand(!expand);
    }
}

export default function Monkey({ className, monkey, detailed , updateMonkey}) {
    const [expand, setExpand] = useState(false);
    const mobile = useSelector(getMobile);
    return (
        <>
            <CardContainer variant="outlined" onClick={() => handleClick(monkey, updateMonkey, mobile, expand, setExpand)} className={className}>
                <CardContentContainer mobile={mobile.toString()}>
                    <Icon monkey={ monkey } detailed={detailed}/>
                    <Collapse in={ detailed || (!mobile && expand)}>
                        <MonkeyDetailed monkey={ monkey } />
                    </Collapse>
                </CardContentContainer>
            </CardContainer>
        </>
    );
}