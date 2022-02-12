import styled from "@emotion/styled";
import {CircularProgress} from "@mui/material";

import TowerText from "../tower/TowerText";


const Loading = styled("div")`
  margin-top: 30px;
  margin-bottom: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

/**
 * Loading progress circle with text
 */
export default function FetchLoading() {

    return (
        <>
            <Loading>
                <TowerText variant="h4">
                    Loading
                </TowerText>
                <CircularProgress />
            </Loading>
        </>
    );
}