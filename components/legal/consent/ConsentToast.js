import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import ConsentBody from "./ConsentBody";
import ConsentHeader from "./ConsentHeader";
import siteColors from "../../../lib/utils/siteColors";
import {getDarkMode} from "../../../lib/redux/selectors";

const Toast = styled.div`
  width: 25.33rem;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 99;
  
  box-shadow: -5px 5px 5px 0 rgb(0 0 0 / 30%);
  border: 1px solid ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  background-color: ${props => props["data-dm"] ? siteColors.toast.dark : siteColors.toast.light};
  border-radius: 15px;
  transition-duration: 0.3s;
`;

export default function ConsentToast({}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Toast data-dm={darkMode}>
                <ConsentHeader />
                <ConsentBody />
            </Toast>
        </>
    );
}