import styled from "@emotion/styled";
import {Button, Typography} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const OptionalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Expander = styled(Button)`
  &:hover {
    cursor: pointer;
  }
`;

export default function VoteOptional({className, collapse, handleCollapse}) {

    return (
        <>
            <OptionalContainer className={className}>
                <Typography variant="body1" component="div" color="inherit">
                    Abilities Pros/Cons?
                    &nbsp;
                    <Typography variant="body1" color="secondary" display="inline">
                        optional *
                    </Typography>
                    <Expander onClick={handleCollapse} color="inherit">
                        { collapse ? (
                                <HighlightOffIcon />
                            ) :
                            (
                                <AddCircleOutlineIcon />
                            )}
                    </Expander>
                </Typography>
            </OptionalContainer>
        </>
    );
}