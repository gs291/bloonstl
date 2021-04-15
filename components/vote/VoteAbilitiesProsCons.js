import styled from "@emotion/styled";
import {Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";

import siteProsCons from "../../lib/utils/siteProsCons";
import siteColors from "../../lib/utils/siteColors";


const GridContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 2em 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 20px;
  border: 2px solid ${siteColors.text.dark};
`;

const ProsConsGrid = styled(Grid)`
  overflow: auto;
  max-height: 300px;
`;

const LabelContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid ${siteColors.text.dark};
`;

const Label = styled(Typography)`
  color: ${siteColors.text.dark};
`;

const ProsConsControl = styled(FormControlLabel)`
  color: ${siteColors.text.dark};
`;

const ControlCheckBox = styled(Checkbox)`
  color: ${siteColors.text.dark};
`;

const prosConsKeys = Object.keys(siteProsCons);

export default function VoteAbilitiesProsCons({className}) {

    return (
        <>
            <GridContainer>
                <LabelContainer>
                    <Label variant="h4" color="inherit">
                        Pros
                    </Label>
                </LabelContainer>
                <ProsConsGrid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                >
                    {prosConsKeys.map(key => (
                        <Grid item xs={3} key={key}>
                            <ProsConsControl
                                control={<ControlCheckBox name={`pro-${key}`} />}
                                label={siteProsCons[key].title}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>

            <GridContainer>
                <LabelContainer>
                    <Label variant="h4" color="inherit">
                        Cons
                    </Label>
                </LabelContainer>
                <ProsConsGrid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                >
                    {prosConsKeys.map(key => (
                        <Grid item xs={3} key={key}>
                            <ProsConsControl
                                control={<ControlCheckBox name={`con-${key}`} />}
                                label={siteProsCons[key].title}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>
        </>
    );
}