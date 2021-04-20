import styled from "@emotion/styled";
import {Container} from "@material-ui/core";

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default function MainContainer({children}) {

    return (
        <>
            <Main maxWidth="md">
                {children}
            </Main>
        </>
    );
}