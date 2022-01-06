import styled from "@emotion/styled";

import BloonIcon from "../icon/bloon/BloonIcon";

const BloonBackground = styled("div")`
  color: #000;
  height: 100%;
`;

const BloonPath = styled(BloonIcon)`
  fill: currentColor;
`;

export default function TopBackground({className}) {


    return (
        <>
            <BloonBackground>
                <BloonPath />
            </BloonBackground>
        </>
    );
}