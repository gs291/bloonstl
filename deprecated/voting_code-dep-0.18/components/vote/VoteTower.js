import {
    FormControlLabel,
    InputLabel,
    ListSubheader,
    MenuItem,
    Radio,
    RadioGroup,
    Select, TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {getTowerLink} from "../../lib/utils/utils";

const VoteTowerContainer = styled.div`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
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
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  margin-left: 10px;
  min-width: 180px;
  overflow: visible;

  & .MuiPopover-paper {
    
  }
  
  & ul {
    overflow: visible;
    height: 500px;
  }
  
  & .MuiSelect-icon {
    color: inherit;
  }
  
  &:before {
    border-bottom: 1px solid ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TowerTier = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SelectContainer = styled.div`
  text-align: center;
  margin-left: ${props => props["data-m"] ? "0" : "20px"};
`;

const TowerSelectContainer = styled.div`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledRadio = styled(Radio)`
  color: inherit;
`;

export default function VoteTower({towers, tower, handleVoteType}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [towerSelect, setTowerSelect] = useState("");
    const handleSelect = (e) => {
        handleVoteType(e.target.value.slice(0, 1));
        setTowerSelect(e.target.value);
    }

    return (
        <>
            <VoteTowerContainer data-dm={darkMode}>
                <TowerSelectContainer data-m={mobile}>
                    <SelectContainer data-m={mobile}>
                        {towers && (
                            <>
                                <TowerLabel id="tower-label">
                                    <VoteText variant="h3">
                                        Select a Tower:
                                    </VoteText>
                                </TowerLabel>
                                <TowerSelect
                                    name="tower"
                                    labelId="tower-label"
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        disablePortal: true,
                                        anchorOrigin: {
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        },
                                        transformOrigin: {
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }
                                    }}
                                    value={towerSelect}
                                    onChange={handleSelect}
                                    data-dm={darkMode}
                                    defaultValue={tower ? tower : ""}
                                    required
                                >
                                    <ListSubheader disableSticky value="">Monkeys</ListSubheader>
                                    {towers.monkeys.map(monkey => (
                                        <MenuItem value={`m-${getTowerLink(monkey.name)}`} key={monkey.id}>{monkey.name}</MenuItem>
                                    ))}
                                    <ListSubheader disableSticky value="">Heroes</ListSubheader>
                                    {towers.heroes.map(hero => (
                                        <MenuItem value={`h-${getTowerLink(hero.name)}`} key={hero.id}>{hero.name}</MenuItem>
                                    ))}
                                </TowerSelect>
                            </>
                        )}
                        {tower && (
                            <>
                                <TextField
                                    disabled
                                    name="tower"
                                    defaultValue={tower.name}
                                />
                            </>
                        )}
                    </SelectContainer>
                </TowerSelectContainer>

                <VoteText variant="h5">What tier is this tower?</VoteText>
                <TowerTier name="tower-tier">
                    <FormControlLabel value="s" control={<StyledRadio required/>} label="S" labelPlacement="top"/>
                    <FormControlLabel value="a" control={<StyledRadio required/>} label="A" labelPlacement="top"/>
                    <FormControlLabel value="b" control={<StyledRadio required/>} label="B" labelPlacement="top"/>
                </TowerTier>
            </VoteTowerContainer>
        </>
    );
}
