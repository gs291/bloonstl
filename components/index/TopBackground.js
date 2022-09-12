import {styled} from "@mui/material/styles";

import BloonIcon from "../icon/bloon/BloonIcon";


const BloonBackground = styled("div")`
  color: #000;
  height: 100%;
`;

const BloonPath = styled(BloonIcon)`
  fill: currentColor;
`;

/**
 * Top/Introduction background to the home page
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function TopBackground({className}) {


    return (
        <>
            <BloonBackground>
                <BloonPath />
            </BloonBackground>
        </>
    );
}