import {
    Collapse,
    FormControlLabel,
    InputLabel,
    ListSubheader,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import styled from "@emotion/styled";

import VoteOptional from "./VoteOptional";
import VoteAbilities from "./VoteAbilities";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";

const VoteTowerContainer = styled.div`
  color: ${siteColors.text.dark};
`;

const VoteText = styled(Typography)`
  color: inherit;
  text-align: center;
`;

const TowerLabel = styled(InputLabel)`
  color: inherit;
  margin-bottom: 10px;
`;

const TowerSelect = styled(Select)`
  color: ${siteColors.text.dark};
  margin-left: 10px;
  min-width: 180px;
  overflow: visible;

  & .MuiPopover-paper {
    margin-top: ${siteSizes.nav.height};
  }
  
  & ul {
    overflow: visible;
    height: 500px;
  }
  
  & .MuiSelect-icon {
    color: inherit;
  }
  
  &:before {
    border-bottom: 1px solid ${siteColors.text.dark};
  }
`;

const TowerTier = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SelectContainer = styled.div`
  text-align: center;
`;

const TowerSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledRadio = styled(Radio)`
  color: inherit;
`;

export default function VoteTower({towers, tower}) {
    const [ collapse, setCollapse ] = useState(false);
    const handleCollapse = (_) => setCollapse(!collapse);

    return (
        <>
            <VoteTowerContainer>
                <TowerSelectContainer>
                    <VoteText variant="h3">
                        Tower:
                    </VoteText>
                    <SelectContainer>
                        {towers && (
                            <>
                                <TowerLabel id="tower-label">Select a tower</TowerLabel>
                                <TowerSelect name="tower" labelId="tower-label" MenuProps={{disablePortal: true}}>
                                    <ListSubheader disableSticky>Monkeys</ListSubheader>
                                    {towers.monkeys.map(monkey => (
                                        <MenuItem value={monkey.id} key={monkey.id}>{monkey.name}</MenuItem>
                                    ))}
                                    <ListSubheader disableSticky>Heroes</ListSubheader>
                                    {towers.heroes.map(hero => (
                                        <MenuItem value={hero.name} key={hero.id}>{hero.name}</MenuItem>
                                    ))}
                                </TowerSelect>
                            </>
                        )}
                        {tower && (
                            <>
                                {tower.name}
                            </>
                        )}
                    </SelectContainer>
                </TowerSelectContainer>

                <VoteText variant="h5">What tier is this tower?</VoteText>
                <TowerTier name="tower-tier">
                    <FormControlLabel value="s" control={<StyledRadio />} label="S" labelPlacement="top"/>
                    <FormControlLabel value="a" control={<StyledRadio />} label="A" labelPlacement="top"/>
                    <FormControlLabel value="b" control={<StyledRadio />} label="B" labelPlacement="top"/>
                </TowerTier>


                <VoteOptional collapse={collapse} handleCollapse={handleCollapse} />
                <Collapse in={collapse}>
                    <VoteAbilities />
                </Collapse>
            </VoteTowerContainer>
        </>
    );
}
