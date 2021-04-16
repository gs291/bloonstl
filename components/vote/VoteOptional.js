import styled from "@emotion/styled";
import {Button, Typography} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import siteColors from "../../lib/utils/siteColors";

const OptionalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  margin-top: 20px;
  margin-bottom: 20px;
  color: ${siteColors.text.dark};

  &:hover {
    cursor: pointer;
  }
`;

const OptionalContainer = styled.div`
  display: flex;
  
  padding: 1em;
  background-color: #222;
  border-radius: 10px;
`;

const Expander = styled(Button)`
  
`;

export default function VoteOptional({className, title, collapse, handleCollapse}) {

    return (
        <>
            <OptionalDiv onClick={handleCollapse}>
                <OptionalContainer className={className}>
                    <div>
                        <Typography variant="body1" color="inherit">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="secondary">
                            optional *
                        </Typography>
                    </div>
                    <Expander color="inherit">
                        { collapse ? (
                                <HighlightOffIcon />
                            ) :
                            (
                                <AddCircleOutlineIcon />
                            )}
                    </Expander>
                </OptionalContainer>
            </OptionalDiv>
        </>
    );
}