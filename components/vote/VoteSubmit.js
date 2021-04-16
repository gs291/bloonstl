import styled from "@emotion/styled";
import ErrorIcon from '@material-ui/icons/Error';
import {Button, CircularProgress} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import siteColors from "../../lib/utils/siteColors";

const SubmitVote = styled(Button)`
  color: ${siteColors.text.dark};
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
                                <SubmitVote type="submit">
                                    Vote!
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