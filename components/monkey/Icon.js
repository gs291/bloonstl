import styled from "@emotion/styled";
import {
    Card,
    CardContent,
    CardMedia, Typography
} from "@material-ui/core";
import { getImageUrl } from "../filter-grid/FilterGrid";

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

const BestPath = styled.div`
  text-align: center;
  align-items: center;
`;

export default function Icon({ className, monkey }) {
    return (
        <>
            <CardMediaContainer
                image={ getImageUrl(monkey.filename) }
                title={ monkey.name }
            />
            <BestPath>
                <Typography variant="h5" component="h1">
                    0-2-5
                </Typography>
            </BestPath>
        </>
    );
}