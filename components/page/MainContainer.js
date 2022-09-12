import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";


const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

/**
 * Website main container
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the main container
 */
export default function MainContainer({children}) {

    return (
        <>
            <Main maxWidth="md">
                {children}
            </Main>
        </>
    );
}