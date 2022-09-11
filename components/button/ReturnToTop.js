import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import siteSizes from "../../lib/utils/siteSizes";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const TopContainer = styled("div", globalOptions)`
  position: fixed;
  bottom: 3em;
  right: 2em;
  padding: 0.4em 0.83em;
  border-radius: 10px;
  
  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.palette.button.returnTop.primary};
  border: 2px solid ${props => props.theme.palette.primary.main};
  
  transition-duration: 0.3s;
  opacity: ${props => props["data-s"] ? 1 : 0};
  z-index: ${props => props["data-s"] ? 10 : -1};
  
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.palette.button.returnTop.hover};
  }
`;

const GA4_RETURN_TOP_ID = "RETURN_TOP";

/**
 * Fixed return to top of page button
 */
export default function ReturnToTop() {
    const [show, setShow] = useState(false);

    const showButton = () => {
        if (window.scrollY > (parseInt(siteSizes.nav.height.replace('px', '')) + 400)) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const returnTop = () => {
        window.scrollTo(0, 0);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_RETURN_TOP_ID}`})
    };

    useEffect(() => {
        window.addEventListener('scroll', showButton);

        return () => {
            window.removeEventListener('scroll', showButton);
        }
    }, []);

    return (
        <>

            <TopContainer
                onClick={returnTop}
                data-s={show}
            >
                <ArrowUpwardIcon />
            </TopContainer>

        </>
    );
}