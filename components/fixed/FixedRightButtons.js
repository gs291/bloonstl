import {styled} from "@mui/material/styles";
import SideButton from "../button/SideButton";


const FixedContainer = styled("div")`
  position: fixed;
  right: 0;
  bottom: 40%;
  
  transform-origin: right bottom;
  transform: rotate(270deg);
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/**
 * Buttons placed vertically along a bottom right side of the viewport
 */
export default function FixedRightButtons() {

    return (
        <>
            <FixedContainer>
                <SideButton href="https://forms.gle/YXY4qyXdgfxcFcpH7" text="FEEDBACK" target="_blank" outbound />
            </FixedContainer>
        </>
    );
}