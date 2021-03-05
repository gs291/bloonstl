import styled from "@emotion/styled";
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    FormGroup,
    Switch } from "@material-ui/core";


export default function Filters({ className, state, handleChange }) {
    return (
        <>
            <FormControl className={className}>
                <FormLabel component="legend">Filters: </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={true} onChange={handleChange} name="isExpanded" />}
                        label="Show Best Path."
                        disabled
                    />
                    <FormControlLabel
                        control={<Switch checked={state.isDetailed} onChange={handleChange} name="isDetailed" />}
                        label="Show All Details."
                    />
                </FormGroup>
            </FormControl>
        </>
    );
}