import Image from "next/image";
import styled from "@emotion/styled";

import { getImageUrl } from "../../lib/utils";

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

const TowerImage  = styled(Image)`
  object-fit: scale-down;
`;

export default function Icon({ className, tower, detailed }) {
    return (
        <>
            <IconContainer detailed={detailed} className={className}>
                <ImgContainer>
                    <TowerImage
                        src={ getImageUrl(tower.filename) }
                        layout="fill"
                        quality={100}
                        alt={ tower.name }
                        priority="true"
                    />
                </ImgContainer>
            </IconContainer>
        </>
    );
}