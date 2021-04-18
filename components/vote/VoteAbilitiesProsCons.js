import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";

import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import siteProsCons from "../../lib/utils/siteProsCons";


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
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
`;

const LabelContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled(Typography)`
  color: ${props => props["data-type"] === "pro" ? siteColors.chip.pros : siteColors.chip.cons};
`;

const ProsConsControl = styled(FormControlLabel)`
  color: ${siteColors.text.dark};
  word-break: break-word;
`;

const ControlCheckBox = styled(Checkbox)`
  color: ${siteColors.text.dark};
  
  &.Mui-checked {
    color: ${props => props["data-type"] === "pro" ? siteColors.chip.pros : siteColors.chip.cons};
  }
`;

const ProConLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProConDescription = styled.div`
  margin-left: 5px;
  color: rgba(255, 255, 255, 0.5);
`;

const ProConText = styled(Typography)`
  font-family: sans-serif;
`;

const ProsConsLabel = ({proCon, type}) => (
    <>
        <ProConLabelContainer>
            <Typography variant="body1" color="inherit">
                {proCon.title}
            </Typography>
            <ProConDescription>
                <ProConText variant="body2" color="inherit">
                    {type === "pro" ? proCon.pro : proCon.con}
                </ProConText>
            </ProConDescription>
        </ProConLabelContainer>
    </>
);

const prosConsKeys = Object.keys(siteProsCons);

export default function VoteAbilitiesProsCons({className}) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 12;
    }

    return (
        <>
            <GridContainer>
                <LabelContainer>
                    <Label variant="h4" data-type="pro">
                        Pros
                    </Label>
                    <FixedDivider width={100} backgroundColor="#fff"/>
                </LabelContainer>
                <ProsConsGrid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                >
                    {prosConsKeys.map(key => (
                        <Grid item xs={gridSpacing} key={key}>
                            <ProsConsControl
                                control={<ControlCheckBox data-type="pro" name={`pro-${key}`} disableRipple />}
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="pro"/>}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>

            <GridContainer>
                <LabelContainer>
                    <Label variant="h4" data-type="con">
                        Cons
                    </Label>
                    <FixedDivider width={100} backgroundColor="#fff"/>
                </LabelContainer>
                <ProsConsGrid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                >
                    {prosConsKeys.map(key => (
                        <Grid item xs={gridSpacing} key={key}>
                            <ProsConsControl
                                control={<ControlCheckBox data-type="con" name={`con-${key}`} disableRipple/>}
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="con"/>}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>
        </>
    );
}