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

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: ${props => props.detailed ? "" : "100%"};
`;


const HorizontalCollapse = styled(Collapse)`
  &.MuiCollapse-container {
    width: 0;
    transition-property: width;
  }

  &.MuiCollapse-entered {
    width: 100%
  }

  &.MuiCollapse-hidden {
    width: 0;
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

export default function Monkey({ monkey, detailed , updateMonkey}) {
    const [expand, setExpand] = useState(false);
    const mobile = useSelector(getMobile);
    return (
        <>
            <CardContainer variant="outlined" onClick={() => handleClick(monkey, updateMonkey, mobile, expand, setExpand)}>
                <CardContentContainer mobile={mobile.toString()}>
                    <IconContainer detailed={detailed}>
                        <Icon monkey={ monkey }/>
                    </IconContainer>
                    {  mobile && (
                            <Collapse in={ detailed }>
                                <MonkeyDetailed monkey={ monkey } />
                            </Collapse>
                        )
                    }
                    { !mobile && (
                        <HorizontalCollapse in={ detailed || expand }>
                            <MonkeyDetailed monkey={ monkey } />
                        </HorizontalCollapse>
                    )}
                </CardContentContainer>
            </CardContainer>
        </>
    );
}