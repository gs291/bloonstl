import {
    Collapse,
    FormControlLabel,
    Radio,
    RadioGroup,
    Slider,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import VoteOptional from "./VoteOptional";
import siteColors from "../../lib/utils/siteColors";
import VoteAbilitiesProsCons from "./VoteAbilitiesProsCons";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const AbilitiesContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const PathSlider = styled(Slider)`
  width: ${props => props["data-m"] ? 90 : 75}%;
  margin-left: auto;
  margin-right: auto;
  
  color: inherit;
  
  & .MuiSlider-markLabel {
    color: inherit;
  }

  & .MuiSlider-valueLabel {
    color: ${props => props["data-dm"] ? siteColors.text.light : siteColors.text.dark};
  }
  
  & .MuiSlider-valueLabel span span {
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TierLabel = styled(FormControlLabel)`
  color: inherit;
`;

const TierRadio = styled(Radio)`
  color: inherit;
`;

const AbilityTier = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`;

const valueText = (value) => {
    return `${value}`;
}

const marks = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
]

export default function VoteAbilities() {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [collapseProCon, setCollapseProCon] = useState(false);
    const handleCollapseProCon = (_) => setCollapseProCon(!collapseProCon);

    return (
        <>
            <AbilitiesContainers data-dm={darkMode}>
                <Typography variant="body1" color="inherit" id="slider-top">
                    Top Path
                </Typography>
                <PathSlider
                    defaultValue={0}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    aria-labelledby="slider-top"
                    step={1} min={0} max={5}
                    marks={marks}
                    name="slider-top"
                    data-dm={darkMode}
                    data-m={mobile}
                />

                <Typography variant="body1" color="inherit" id="slider-middle">
                    Middle Path
                </Typography>
                <PathSlider
                    defaultValue={0}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    aria-labelledby="slider-middle"
                    step={1} min={0} max={5}
                    marks={marks}
                    name="slider-middle"
                    data-dm={darkMode}
                    data-m={mobile}
                />

                <Typography variant="body1" color="inherit" id="slider-bottom">
                    Bottom Path
                </Typography>
                <PathSlider
                    defaultValue={0}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    aria-labelledby="slider-bottom"
                    step={1} min={0} max={5}
                    marks={marks}
                    name="slider-bottom"
                    data-dm={darkMode}
                    data-m={mobile}
                />

                <Typography variant="body1" color="inherit">What tier is this ability path?</Typography>
                <AbilityTier defaultValue="" name="ability-tier">
                    <TierLabel value="" control={<TierRadio />} label="none" labelPlacement="top"/>
                    <TierLabel value="s" control={<TierRadio />} label="S" labelPlacement="top"/>
                    <TierLabel value="a" control={<TierRadio />} label="A" labelPlacement="top"/>
                    <TierLabel value="b" control={<TierRadio />} label="B" labelPlacement="top"/>
                </AbilityTier>

                <VoteOptional title="Want to vote on Ability Path Pros/Cons?" collapse={collapseProCon} handleCollapse={handleCollapseProCon} />
                <Collapse in={collapseProCon}>
                    <VoteAbilitiesProsCons />
                </Collapse>
            </AbilitiesContainers>
        </>
    );
}
