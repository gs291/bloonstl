import {Link} from "@mui/material";
import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";


const DLink = styled(Link)`
  text-align: center;
  margin-bottom: 50px;
`;

/**
 * Donation Page Link
 *
 * @param {Object} props Component props
 * @param {string} props.href The link to a donation method
 * @param {string} props.title The title to be shown above the text
 * @param {string} props.text The text to be shown below the title
 */
export default function DonateLink({href, title, text}) {

    return (
        <>
            <DLink
                href={href}
                underline="none"
            >
                <TowerText variant="h3">
                    {title}
                </TowerText>
                <TowerText variant="h5" font={true}>
                    {text}
                </TowerText>
            </DLink>
        </>
    );
}