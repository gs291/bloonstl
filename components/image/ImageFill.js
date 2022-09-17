import Image from "next/image";
import {styled} from "@mui/material/styles";


const StyledImage  = styled(Image)`
  object-fit: scale-down;
`;

/**
 * Next.js image that fills its parent container
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.src Image source link
 * @param {number} [props.quality=75] Image quality to be fetched (1-100)
 * @param {string} props.alt Alternative text if the image does not load
 * @param {boolean} [props.priority=false] Shows if the image should have priority loading
 */
export default function ImageFill({ className, src, quality, alt, priority=false }) {
    return (
        <>
            <StyledImage
                className={ className }
                src={ src }
                layout="fill"
                quality={ quality || 75}
                alt={ alt }
                priority={priority}
            />
        </>
    );
}