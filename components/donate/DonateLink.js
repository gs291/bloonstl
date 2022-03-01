import {Link} from "@mui/material";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const DLink = styled(Link)`
  text-align: center;
  margin-bottom: 50px;
  
  & h3 {
    transition: 0.3s;
  }
  
  &:hover h3 {
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
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
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <DLink
                href={href}
                underline="none"
                data-dm={darkMode}
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