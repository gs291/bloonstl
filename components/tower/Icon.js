import styled from "@emotion/styled";

import ImageFill from "../image/ImageFill";
import { getImageUrl } from "../../lib/utils/utils";

const IconContainer  = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props["data-d"] ? "" : "width: 100%;"}
`;

const ImgContainer = styled.div`
  position: relative;
  width: ${props => props["data-t"] === "monkey" ? 180 : props["data-t"] === "hero" ? 310 : 120}px;
  max-width: ${props => props["data-t"] === "monkey" ? 180 : props["data-t"] === "hero" ? 310 : 120}px;
  height: ${props => props["data-t"] === "monkey" ? 300 : props["data-t"] === "hero" ? 400 : 150}px;
  max-height: ${props => props["data-t"] === "monkey" ? 300 : props["data-t"] === "hero" ? 400 : 150}px;
`;

export default function Icon({ className, tower, towerType, detailed }) {
    return (
        <>
            <IconContainer data-d={detailed} className={className}>
                <ImgContainer data-t={towerType}>
                    <ImageFill
                        src={getImageUrl(tower.filename)}
                        quality={100}
                        alt={tower.name}
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}