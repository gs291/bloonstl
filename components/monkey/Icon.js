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

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: ${props => props.detailed ? "" : "100%"};
`;

export default function Icon({ className, monkey, detailed }) {
    return (
        <>
            <IconContainer detailed={detailed} className={className}>
                <CardMediaContainer
                    image={ getImageUrl(monkey.filename) }
                    title={ monkey.name }
                />
            </IconContainer>
        </>
    );
}