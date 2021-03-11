import styled from "@emotion/styled";
import {
    CardMedia,
    Typography
} from "@material-ui/core";
import { getImageUrl } from "../../lib/utils";

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