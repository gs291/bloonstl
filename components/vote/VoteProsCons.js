import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";

import {rgbaHex} from "../../lib/utils/utils";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import siteProsCons from "../../lib/utils/siteProsCons";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


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

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
`;

const LabelContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled(Typography)`
  color: ${props => props["data-t"] === "pro"
          ? props["data-dm"] ? siteColors.pros.dark : siteColors.pros.light
          : props["data-dm"] ? siteColors.cons.dark : siteColors.cons.light};
`;

const ProsConsControl = styled(FormControlLabel)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  word-break: break-word;
`;

const ControlCheckBox = styled(Checkbox)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &.Mui-checked {
    color: ${props => 
            props["data-t"] === "pro" 
                    ? props["data-dm"] ? siteColors.pros.dark : siteColors.pros.light 
                    : props["data-dm"] ? siteColors.cons.dark : siteColors.cons.light};
  }
`;

const ProConLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProConDescription = styled.div`
  margin-left: 5px;
`;

const ProConText = styled(Typography)`
  font-family: sans-serif;
  color: ${props => rgbaHex(props["data-dm"] ? siteColors.text.dark : siteColors.text.light, 0.75)};
`;

const ProsConsLabel = ({proCon, type, darkMode}) => (
    <>
        <ProConLabelContainer>
            <Typography variant="body1" color="inherit">
                {proCon.title}
            </Typography>
            <ProConDescription data-dm={darkMode}>
                <ProConText variant="body2" data-dm={darkMode} color="inherit">
                    {type === "pro" ? proCon.pro : proCon.con}
                </ProConText>
            </ProConDescription>
        </ProConLabelContainer>
    </>
);

const prosConsKeys = Object.keys(siteProsCons);

export default function VoteProsCons({className}) {
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
                    <Label variant="h4" data-t="pro" data-dm={darkMode}>
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
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="pro" darkMode={darkMode}/>}
                                data-dm={darkMode}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>

            <GridContainer data-dm={darkMode}>
                <LabelContainer>
                    <Label variant="h4" data-t="con" data-dm={darkMode}>
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
                                label={<ProsConsLabel proCon={siteProsCons[key]} type="con" darkMode={darkMode}/>}
                                data-dm={darkMode}
                            />
                        </Grid>
                    ))}
                </ProsConsGrid>
            </GridContainer>
        </>
    );
}