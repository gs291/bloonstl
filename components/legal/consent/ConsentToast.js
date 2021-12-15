import styled from "@emotion/styled";
import Cookies from "universal-cookie";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

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
  border: 1px solid ${props => props["data-dm"] ? siteColors.accent.light : siteColors.accent.dark};
  background-color: ${props => props["data-dm"] ? siteColors.toast.dark : siteColors.toast.light};
  border-radius: 15px;
  transition: 0.3s;
`;

export default function ConsentToast({}) {
    const darkMode = useSelector(getDarkMode);

    const [show, setShow] = useState(true);

    const closeBanner = () => {
        setShow(false);
    };

    const checkConsent = () => {
        const cookies = new Cookies();
        const consent_cookie = cookies.get('eu_cookie_consent');

        if (consent_cookie && consent_cookie === "accepted") {
            closeBanner();
        }
    };

    useEffect(() => {
        checkConsent();
    }, [])

    return (
        <>
            { show && (
                <Toast data-dm={darkMode}>
                    <ConsentHeader setShow={setShow} checkConsent={checkConsent}/>
                    <ConsentBody />
                </Toast>
            )}

        </>
    );
}