import Cookies from "universal-cookie";
import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";

import ConsentBody from "./ConsentBody";
import ConsentHeader from "./ConsentHeader";
import {globalOptions} from "../../../lib/utils/emotionStyled";


const Toast = styled("div", globalOptions)`
  width: 20rem;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 99;
  
  box-shadow: -5px 5px 5px 0 rgb(0 0 0 / 30%);
  border-radius: 15px;
  
  border: 1px solid ${props => props.theme.palette.primary.main};
  background-color: ${props => props["data-e"] ? props.theme.palette.toast.error.primary : props.theme.palette.toast.primary};
`;

/**
 * Cookie consent toast popup
 */
export default function ConsentToast() {
    const [show, setShow] = useState(true);
    const [error, setError] = useState(false);

    const closeBanner = () => {
        setError(false);
        setShow(false);
    };

    const checkConsent = (clicked) => {
        const cookies = new Cookies();
        const consent_cookie = cookies.get("cookie_consent");

        if (consent_cookie && consent_cookie === "accepted") {
            closeBanner();
        } else if (clicked) {
            setError(true);
        }
    };

    useEffect(() => {
        checkConsent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            { show && (
                <Toast data-e={error}>
                    <ConsentHeader setShow={setShow} checkConsent={checkConsent} error={error}/>
                    <ConsentBody error={error}/>
                </Toast>
            )}

        </>
    );
}