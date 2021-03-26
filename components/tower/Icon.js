import Image from "next/image";
import styled from "@emotion/styled";

import { getImageUrl } from "../../lib/utils";
import ImageFill from "../image/ImageFill";

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: ${props => props.detailed ? "" : "100%"};
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
                        priority="true"
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}