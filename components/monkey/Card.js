import styled from "@emotion/styled";
import {
    Card,
    CardContent,
    CardMedia,
    Collapse,
    Typography } from "@material-ui/core";
import Icon from "./Icon";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: row;
  background-size: contain;
  background-color: #1D1D1D;
  color: #CCC;
`;

const CardMediaContainer  = styled(CardMedia)`
  height: 165px;
  width: 128px;
  background-size: contain;
`;

const TitleContainer = styled.div`
  margin-bottom: 15px;
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

export default function MonkeyCard({ monkey, expanded, detailed }) {
    return (
        <>
            <CardContainer variant="outlined">
                <CardContentContainer>
                    <div>
                        <Icon monkey={ monkey } expanded={ expanded }/>
                    </div>
                    <div>
                        <HorizontalCollapse in={ detailed }>
                            <Title name={ monkey.name } type={ monkey.type } />
                            <Description description={ monkey.description } />
                            <Gold gold={ monkey.cost_gold } />
                        </HorizontalCollapse>
                    </div>
                </CardContentContainer>
            </CardContainer>
        </>
    );
}