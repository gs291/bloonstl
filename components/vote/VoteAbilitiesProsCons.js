import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";

import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import siteProsCons from "../../lib/utils/siteProsCons";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {hexToRgb} from "../../lib/utils/utils";


const GridContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 2em 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 20px;
  background-color: ${props => props["data-dm"] ? siteColors.vote.proCon.dark : siteColors.vote.proCon.light};
  border: 2px solid ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
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
  color: ${props => props["data-t"] === "pro" ? siteColors.chip.pros : siteColors.chip.cons};
`;

const ProsConsControl = styled(FormControlLabel)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  word-break: break-word;
`;

const ControlCheckBox = styled(Checkbox)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &.Mui-checked {
    color: ${props => props["data-t"] === "pro" ? siteColors.chip.pros : siteColors.chip.cons};
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
  color: rgba(${props => hexToRgb(props["data-dm"] ? siteColors.text.light : siteColors.text.dark)}, 0.5);
`;

const ProsConsLabel = ({proCon, type, darkMode}) => (
    <>
        <ProConLabelContainer>
            <Typography variant="body1" color="inherit">
                {proCon.title}
            </Typography>
            <ProConDescription>
                <ProConText variant="body2" data-dm={darkMode}>
                    {type === "pro" ? proCon.pro : proCon.con}
                </ProConText>
            </ProConDescription>
        </ProConLabelContainer>
    </>
);

const prosConsKeys = Object.keys(siteProsCons);

export default function VoteAbilitiesProsCons({className}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 12;
    }

    return (
        <>
            <GridContainer data-dm={darkMode}>
                <LabelContainer>
                    <Label variant="h4" data-t="pro">
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
                                control={<ControlCheckBox data-t="pro" data-dm={darkMode} name={`pro-${key}`} disableRipple />}
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="pro" data-dm={darkMode}/>}
                                data-dm={darkMode}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>

            <GridContainer data-dm={darkMode}>
                <LabelContainer>
                    <Label variant="h4" data-t="con">
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
                                control={<ControlCheckBox data-t="con" data-dm={darkMode} name={`con-${key}`} disableRipple/>}
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="con" data-dm={darkMode}/>}
                                data-dm={darkMode}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>
        </>
    );
}