import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import siteColors from "../../lib/utils/siteColors";
import FilterRanks from "../filters/FilterRanks";

const VoteTowerContainer = styled.div`
  color: ${siteColors.text.dark};
`;

const Towers = styled.select`
  margin-left: 10px;
`;

const VoteText = styled(Typography)`
  color: ${siteColors.text.dark};
`;

export default function VoteTower({towers, tower}) {

    return (
        <>
            <VoteTowerContainer>
                <label htmlFor="tower">
                    <Typography variant="h4" display="inline">
                        Tower
                    </Typography>
                </label>
                {towers && (
                    <Towers id="tower" name="tower">
                        <optgroup label="Monkeys">
                            {towers.monkeys.map(monkey => (
                                <option value={monkey.name} key={monkey.id}>{monkey.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Heroes">
                            {towers.heroes.map(hero => (
                                <option value={hero.name} key={hero.id}>{hero.name}</option>
                            ))}
                        </optgroup>
                    </Towers>
                )}
                {tower && (
                    <>
                        {tower.name}
                    </>
                )}

                <VoteText variant="body1">What tier is this tower?</VoteText>
                <FilterRanks />
            </VoteTowerContainer>
        </>
    );
}
