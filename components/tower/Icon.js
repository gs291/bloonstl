import styled from "@emotion/styled";

import ImageFill from "../image/ImageFill";
import { getImageUrl } from "../../lib/utils";

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.detailed ? "" : "width: 100%;"}
`;

const ImgContainer = styled.div`
  position: relative;
  width: 120px;
  max-width: 120px;
  height: 150px;
  max-height: 150px;
`;

export default function Icon({ className, tower, detailed }) {
    return (
        <>
            <IconContainer detailed={detailed} className={className}>
                <ImgContainer>
                    <ImageFill
                        src={ getImageUrl(tower.filename) }
                        quality={100}
                        alt={ tower.name }
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}