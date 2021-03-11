import styled from "@emotion/styled";
import {
    Card,
    CardContent,
    Collapse } from "@material-ui/core";

import Icon from "./Icon";
import { background, card } from "../../lib/site-colors.json";
import MonkeyDetailed from "./MonkeyDetailed";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: ${ card.dark };
  color: #CCC;
  min-height: 300px;

  &:hover{
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;

const IconContainer  = styled.div`
  margin-right: 10px;
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


export default function Monkey({ monkey, detailed , updateMonkey}) {
    return (
        <>
            <CardContainer variant="outlined" onClick={() => updateMonkey(<MonkeyDetailed monkey={ monkey } />)}>
                <CardContentContainer>
                    <IconContainer>
                        <Icon monkey={ monkey }/>
                    </IconContainer>
                    <div>
                        <HorizontalCollapse in={ detailed }>
                            <MonkeyDetailed monkey={ monkey } />
                        </HorizontalCollapse>
                    </div>
                </CardContentContainer>
            </CardContainer>
        </>
    );
}