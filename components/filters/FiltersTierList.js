import styled from "@emotion/styled";
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Switch } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {getBorder} from "../../lib/redux/selectors";
import {UPDATE_BORDER, updateFilter} from "../../lib/redux/actions";

const FilterContainer = styled(FormControl)`
  padding: 20px;
`;

export default function FiltersTierList({className}) {
    const dispatch = useDispatch();
    const border = useSelector(getBorder);

    const handleBorder = (e) => dispatch(updateFilter(UPDATE_BORDER, e.target.checked))

    return (
        <>
            <FilterContainer className={className}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={border} onChange={handleBorder} />}
                        label={`${border ? "Hide" : "Show"} Border`}
                    />
                </FormGroup>
            </FilterContainer>
        </>
    );
}