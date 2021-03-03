import styled from "@emotion/styled";
import {
    Card,
    CardContent,
    Collapse,
    CardMedia} from "@material-ui/core";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const ContentContainer = styled(CardContent)`
  background-color: #1D1D1D;
  color: #CCC;
`;

const CardMediaContainer  = styled(CardMedia)`
  height: 165px;
  width: 128px;
  background-size: contain;
`;

export default function Icon({ className, monkey, expanded }) {
    monkey.path = "/dartmonkey.jpeg";
    return (
        <>
            <CardMediaContainer
                image={ monkey.path }
                title={ monkey.name }
            />
            <Collapse in={ expanded } timeout="auto">
                0-2-5
            </Collapse>
        </>
    );
}