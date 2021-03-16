import styled from "@emotion/styled";
import {Divider, Grid, Typography} from "@material-ui/core";

import Abilities from "../ability/Abilities";

const TitleContainer = styled.div`
  margin-bottom: 15px;
`;

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 20px;
  width: 100%;
  justify-content: center;
  flex: 0;
`;

const GridItem = styled(Grid)`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const MonkeyDetailedContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ColorDivider = styled(Divider)`
  background-color: white;
`;

const Title = ({ name, type }) => (
    <TitleContainer>
        <Typography variant={"h3"} component={"h1"}>
            { name }
        </Typography>
        <Typography variant={"h4"} component={"h2"}>
            { type }
        </Typography>
    </TitleContainer>
);

const Description = ({ description }) => (
    <Typography variant={"body1"} gutterBottom>
        { description }
    </Typography>
);

const Gold = ({ gold }) => (
    <Typography variant={"caption"} display="block" gutterBottom>
        $ { gold }
    </Typography>
);


const VerticalRank = () => (
    <GridContainer container spacing={2}>
        <GridItem item>
            <Typography variant="h3" component="h4">
                0
            </Typography>
        </GridItem>
        <Grid item>
            <ColorDivider />
        </Grid>
        <GridItem item>
            <Typography variant="h3" component="h4">
                2
            </Typography>
        </GridItem>
        <Grid item>
            <ColorDivider />
        </Grid>
        <GridItem item>
            <Typography variant="h3" component="h4">
                5
            </Typography>
        </GridItem>
    </GridContainer>
);

export default function MonkeyDetailed({ className, monkey }) {
    return (
        <MonkeyDetailedContainer className={className}>
            <Abilities abilities={ monkey.abilities } monkeyFile={ monkey.filename } />
        </MonkeyDetailedContainer>
    );
};
