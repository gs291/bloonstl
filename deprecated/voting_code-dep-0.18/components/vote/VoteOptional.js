import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const OptionalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  margin-top: 20px;
  margin-bottom: 20px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const OptionalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  padding: 1em;
  background-color: ${props => props["data-dm"] ? siteColors.vote.optional.dark : siteColors.vote.optional.light};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const OptionalText = styled(Typography)`
  color: ${props => props["data-dm"] ? siteColors.text.optional.dark : siteColors.text.optional.light};
`;

const Expander = styled.div`
  color: inherit;
  min-width: 64px;
  padding: 6px 8px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function VoteOptional({className, title, collapse, handleCollapse}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <OptionalDiv data-dm={darkMode}>
                <OptionalContainer onClick={handleCollapse} data-dm={darkMode} className={className}>
                    <div>
                        <Typography variant="body1" color="inherit">
                            {title}
                        </Typography>
                        <OptionalText variant="body1" data-dm={darkMode}>
                            optional *
                        </OptionalText>
                    </div>
                    <Expander>
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