import styled from "@emotion/styled";
import Cookies from "universal-cookie";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import ConsentBody from "./ConsentBody";
import ConsentHeader from "./ConsentHeader";
import siteColors from "../../../lib/utils/siteColors";
import {getDarkMode} from "../../../lib/redux/selectors";
import {globalOptions} from "../../../lib/utils/emotionStyled";

const Toast = styled("div", globalOptions)`
  width: 20rem;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 99;
  
  box-shadow: -5px 5px 5px 0 rgb(0 0 0 / 30%);
  border-radius: 15px;
  transition: 0.3s;
  
  border: 1px solid ${props => props["data-dm"] ? siteColors.accent.light : siteColors.accent.dark};
  background-color: ${
          props => props["data-e"]
                  ? props["data-dm"] ? siteColors.toast.error.dark : siteColors.toast.error.light
                  : props["data-dm"] ? siteColors.toast.dark : siteColors.toast.light
  };
`;

export default function ConsentToast({}) {
    const darkMode = useSelector(getDarkMode);

    const [show, setShow] = useState(true);
    const [error, setError] = useState(false);

    const closeBanner = () => {
        setError(false);
        setShow(false);
    };

    const checkConsent = (clicked) => {
        const cookies = new Cookies();
        const consent_cookie = cookies.get('cookie_consent');

        if (consent_cookie && consent_cookie === "accepted") {
            closeBanner();
        } else if (clicked) {
            setError(true);
        }
    };

    useEffect(() => {
        checkConsent();
    }, [])

    return (
        <>
            { show && (
                <Toast data-dm={darkMode} data-e={error}>
                    <ConsentHeader setShow={setShow} checkConsent={checkConsent} error={error}/>
                    <ConsentBody error={error}/>
                </Toast>
            )}

        </>
    );
}