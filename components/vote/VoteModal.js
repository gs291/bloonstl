import styled from "@emotion/styled";
import {Button, Modal} from "@material-ui/core";

const Check = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function VoteModal({className, modalStatus, handleSubmit, handleClose}) {
    return (
        <>
            <Check
                open={modalStatus}
                onClose={handleClose}
                className={className}
            >
                <div>
                    <div>
                        Review your Vote
                    </div>

                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Check>
        </>
    );
}