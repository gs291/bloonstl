import {useEffect} from "react";
import styled from "@emotion/styled";

const ADContainer = styled.div`
  width: 100%;
  padding: 0.5em 0;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const StyledAD = styled.ins`
  width: 100%;
  height: 100px;
`;

export default function HorizontalAD({}) {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <>
            <ADContainer >
                <StyledAD
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-4102574682241123"
                    data-ad-slot="8510736877"
                    data-full-width-responsive="true"
                />
            </ADContainer>
        </>
    );
}