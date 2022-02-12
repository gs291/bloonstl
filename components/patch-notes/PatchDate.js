import styled from "@emotion/styled";
import {useEffect, useState} from "react";

import TowerText from "../tower/TowerText";


const DateContainer = styled("div")`
  display: flex;
`;

const DateText = styled(TowerText)`
  margin-left: 7px;
`;

/**
 * Release date for a patch
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.date Release date for the patch
 */
export default function PatchDate({ className, date }) {
    const [dateString, setDateString] = useState("");

    useEffect(() => {
        if (date !== "") {
            const dateTime = new Date(date);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateStringConverted = new Intl.DateTimeFormat('en-US', options).format(dateTime);
            setDateString(dateStringConverted);
        } else {
            setDateString(date);
        }
    }, [date])


    return (
        <>
            <DateContainer className={className}>
                <TowerText variant="h5">
                    Released:
                </TowerText>
                <DateText variant="h6">
                    {dateString}
                </DateText>
            </DateContainer>

        </>
    );
}
