import styled from "@emotion/styled";
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    FormGroup,
    Switch } from "@material-ui/core";

const FilterContainer = styled(FormControl)`
  padding: 20px;
`;

const Label = styled(FormLabel)`
  color: white;
`;

export default function Filters({ className, state, handleFilter }) {
    return (
        <>
            <FilterContainer className={className}>
                <Label component="legend">Filters: </Label>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.isDetailed} onChange={handleFilter} name="isDetailed" />}
                        label="Show All Details."
                    />
                </FormGroup>
            </FilterContainer>
        </>
    );
}