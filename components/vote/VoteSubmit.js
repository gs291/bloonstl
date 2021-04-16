import styled from "@emotion/styled";
import ErrorIcon from '@material-ui/icons/Error';
import {Button, CircularProgress} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import siteColors from "../../lib/utils/siteColors";

const SubmitVote = styled(Button)`
  color: ${siteColors.text.dark};
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
                        <Loading color="inherit" size={50}/>
                    </>
                ) : (
                    <>
                        {progress.isSuccess ?
                            (
                                <Success />
                            ) : (
                                <SubmitVote type="submit">
                                    Vote!
                                </SubmitVote>
                            )
                        }
                        {progress.isError && (
                            <Error />
                        )}
                    </>
                )}
            </SubmitContainer>
        </>
    );
}