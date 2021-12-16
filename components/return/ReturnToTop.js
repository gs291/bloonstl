import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const TopContainer = styled.div`
  position: fixed;
  bottom: 3em;
  right: 2em;
  padding: 0.4em 0.83em;
  border-radius: 10px;
  
  color: ${props => props["data-dm"] ? siteColors.accent.light : siteColors.accent.dark};
  background-color: ${props => props["data-dm"] ? siteColors.returnTop.dark : siteColors.returnTop.light};
  border: 2px solid ${props => props["data-dm"] ? siteColors.accent.light : siteColors.accent.dark};
  
  transition-duration: 0.3s;
  opacity: ${props => props["data-s"] ? 1 : 0};
  z-index: ${props => props["data-s"] ? 3 : -1};
  
  &:hover {
    cursor: pointer;
    background-color: ${props => props["data-dm"] ? siteColors.returnTop.hover.dark : siteColors.returnTop.hover.light};
  }
`;

export default function ReturnToTop({}) {
    const darkMode = useSelector(getDarkMode);
    const [show, setShow] = useState(false);

    const showButton = () => {
        if (window.scrollY > (parseInt(siteSizes.nav.height.replace('px', '')) + 400)) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const returnTop = () => {
        window.scrollTo(0, 0)
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
                data-dm={darkMode}
            >
                <ArrowUpwardIcon />
            </TopContainer>

        </>
    );
}