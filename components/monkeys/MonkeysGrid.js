import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import TowerCard from "../tower/TowerCard";
import {getMonkeyTypeColor} from "../../lib/utils";

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MonkeyType = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => getMonkeyTypeColor(props.type)
};
  color: #000;
`;



export default function MonkeysGrid({ primary, military, magic, support }) {
    return (
        <>
            <GridContainer container spacing={2}>
                <MonkeyType type="Primary" item>
                    Primary
                </MonkeyType>
                <GridItem item>
                    { primary.map(monkey => <TowerCard tower={monkey} towerType="monkey" key={monkey.id}/>) }
                </GridItem>
                <MonkeyType type="Military" item>
                    Military
                </MonkeyType>
                <GridItem item>
                    { military.map(monkey => <TowerCard tower={monkey} towerType="monkey" key={monkey.id}/>) }
                </GridItem>
                <MonkeyType type="Magic" item>
                    Magic
                </MonkeyType>
                <GridItem item>
                    { magic.map(monkey => <TowerCard tower={monkey} towerType="monkey" key={monkey.id}/>) }
                </GridItem>
                <MonkeyType name="Support" item>
                    Support
                </MonkeyType>
                <GridItem item>
                    { support.map(monkey => <TowerCard tower={monkey} towerType="monkey" key={monkey.id}/>) }
                </GridItem>
            </GridContainer>
        </>
    );
}