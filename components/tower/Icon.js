import styled from "@emotion/styled";

import ImageFill from "../image/ImageFill";
import {getImageUrl} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";

const IconContainer  = styled("div", globalOptions)`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props["data-d"] ? "" : "width: 100%;"}
`;

const ImgContainer = styled("div", globalOptions)`
  position: relative;
  width: ${props => props["data-t"] === "monkey" ? 250 : props["data-t"] === "hero" ? 250 : 120}px;
  max-width: ${props => props["data-t"] === "monkey" ? 250 : props["data-t"] === "hero" ? 250 : 120}px;
  height: ${props => props["data-t"] === "monkey" ? 300 : props["data-t"] === "hero" ? 300 : 150}px;
  max-height: ${props => props["data-t"] === "monkey" ? 300 : props["data-t"] === "hero" ? 300 : 150}px;
`;

export default function Icon({ className, tower, towerType, detailed, priority }) {
    return (
        <>
            <IconContainer data-d={detailed} className={className}>
                <ImgContainer data-t={towerType}>
                    <ImageFill
                        src={getImageUrl(tower.filename)}
                        quality={100}
                        alt={tower.name}
                        priority={priority}
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}