import styled from "@emotion/styled";
import {Card, CardContent, Grid} from "@material-ui/core";

import MonkeyIconCard from "./MonkeyIconCard";

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
  background-color: ${props => {
    if (props.name === "Primary") {
        return "lightblue";
    } else if (props.name === "Military") {
        return "lightgreen";
    } else if (props.name === "Magic") {
        return "mediumpurple";
    }
    return "peru";
}
};
  color: #000;
`;

export default function MonkeysGrid({ primary, military, magic, support }) {
    return (
        <>
            <GridContainer container spacing={2}>
                <MonkeyType name="Primary" item>
                    Primary
                </MonkeyType>
                <GridItem name="Primary" item>
                    { primary.map(monkey => <MonkeyIconCard monkey={monkey} key={monkey.id}/>) }
                </GridItem>
                <MonkeyType name="Military" item>
                    Military
                </MonkeyType>
                <GridItem name="Primary" item>
                    { military.map(monkey => <MonkeyIconCard monkey={monkey} key={monkey.id}/>) }
                </GridItem>
                <MonkeyType name="Magic" item>
                    Magic
                </MonkeyType>
                <GridItem item>
                    { magic.map(monkey => <MonkeyIconCard monkey={monkey} key={monkey.id}/>) }
                </GridItem>
                <MonkeyType name="Support" item>
                    Support
                </MonkeyType>
                <GridItem item>
                    { support.map(monkey => <MonkeyIconCard monkey={monkey} key={monkey.id}/>) }
                </GridItem>
            </GridContainer>
        </>
    );
}