import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import ErrorIcon from "@mui/icons-material/Error";
import {Button, CircularProgress, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const SubmitVote = styled(Button)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
  border-radius: 20px;
`;

const Loading = styled(CircularProgress)`
    
`;

const Success = styled(CheckCircleIcon)`
  color: #28A745;
  height: 2.5em;
  width: 2.5em;
`;

const Error = styled(ErrorIcon)`
  color: #DC3545;
  height: 2.5em;
  width: 2.5em;
`;

const ProgressContainer = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function VoteSubmit ({className, progress}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <SubmitContainer className={className}>
                {progress.isLoading ? (
                    <>
                        <ProgressContainer>
                            <Loading color="inherit" size={50}/>
                        </ProgressContainer>
                    </>
                ) : (
                    <>
                        {progress.isSuccess ?
                            (
                                <ProgressContainer>
                                    <Success />
                                </ProgressContainer>
                            ) : (
                                <SubmitVote type="submit" data-dm={darkMode}>
                                    <Typography variant="h2" color="inherit">
                                        Vote!
                                    </Typography>
                                </SubmitVote>
                            )
                        }
                        {progress.isError && (
                            <ProgressContainer>
                                <Error />
                            </ProgressContainer>
                        )}
                    </>
                )}
            </SubmitContainer>
        </>
    );
}