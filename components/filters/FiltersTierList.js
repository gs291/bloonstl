import styled from "@emotion/styled";
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Switch } from "@material-ui/core";

const FilterContainer = styled(FormControl)`
  padding: 20px;
`;

export default function FiltersTierList({ className, state, handleFilter }) {
    return (
        <>
            <FilterContainer className={className}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.showCardBorder} onChange={handleFilter} name="showCardBorder" />}
                        label={`${state.showCardBorder ? "Hide" : "Show"} Border`}
                    />
                </FormGroup>
            </FilterContainer>
        </>
    );
}