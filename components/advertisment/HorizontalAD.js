import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {getMobile} from "../../lib/redux/selectors";


const ADContainer = styled("div")`
  width: 100%;
  padding: 0.5em 0;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const StyledAD = styled("ins")`
  width: 100%;
  max-width: 952px;
`;


/**
 * Google AdSense rectangle/horizontal display unit advertisement
 */
export default function HorizontalAD() {
    const mobile = useSelector(getMobile);
    const [windowWidth, setWindowWidth] = useState(0);

    const handleResize = () => {
        if (windowWidth !== window.innerWidth) {
            setWindowWidth(window.innerWidth);
        }
    }

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [windowWidth, mobile])

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <>
            <ADContainer key={`${mobile}-${windowWidth}`}>
                <StyledAD
                    className="adsbygoogle"
                    style={{ display: "block", minHeight: (mobile ? "280px" : "100px") }}
                    data-ad-client="ca-pub-4102574682241123"
                    data-ad-slot="8510736877"
                    data-ad-format={mobile ? "rectangle" : "horizontal"}
                    data-full-width-responsive="true"
                />
            </ADContainer>
        </>
    );
}