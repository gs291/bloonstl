import styled from "@emotion/styled";
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

const DonateButton = styled(SideButton)`
  margin-left: 35px;
`;


export default function FixedRightButtons() {

    return (
        <>
            <FixedContainer>
                <SideButton href="https://forms.gle/YXY4qyXdgfxcFcpH7" text="FEEDBACK" target="_blank" outbound />
                <DonateButton href="/donate" text="DONATE" />
            </FixedContainer>
        </>
    );
}