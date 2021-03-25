import styled from "@emotion/styled";
import {
    CardMedia
} from "@material-ui/core";
import { getImageUrl } from "../../lib/utils";

const CardMediaContainer  = styled(CardMedia)`
  background-size: contain;
`;

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: ${props => props.detailed ? "" : "100%"};
`;

const ImgContainer = styled.div`
  height: 165px;
  width: 128px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Icon({ className, tower, detailed }) {
    return (
        <>
            <IconContainer detailed={detailed} className={className}>
                <ImgContainer>
                    <CardMediaContainer
                        image={ getImageUrl(tower.filename) }
                        title={ tower.name }
                        component="img"
                        priority="true"
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}