import Image from "next/image";
import styled from "@emotion/styled";

const StyledImage  = styled(Image)`
  object-fit: scale-down;
`;

export default function ImageFill({ className, src, quality, alt }) {
    return (
        <>
            <StyledImage
                className={ className }
                src={ src }
                layout="fill"
                quality={ quality || 75}
                alt={ alt }
            />
        </>
    );
}