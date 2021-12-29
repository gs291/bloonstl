import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

const TitleContainer = styled.div`
  width: 100%;
  padding: 1em;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled(TowerText)`
  
`;

export default function StatsTitle({title, ...rest}) {

    return (
        <>
            <TitleContainer {...rest}>
                <TitleWrapper>
                    <Title variant="h5">
                        {title}
                    </Title>
                </TitleWrapper>
            </TitleContainer>
        </>
    );
}