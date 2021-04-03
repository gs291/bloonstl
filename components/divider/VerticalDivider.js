import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

export default function VerticalDivider({ backgroundColor }) {
    const VDivider = styled(Divider)`
      margin-left: 10px;
      margin-right: 10px;
      
      background-color: ${backgroundColor ? backgroundColor : "white"};
    `;

    return (
        <>
            <VDivider flexItem orientation="vertical" />
        </>
    );
}