import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Link as MUILink} from "@mui/material";
import OutboundIcon from "@mui/icons-material/Outbound";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const SideContainer = styled("div", globalOptions)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  margin-top: 8px;
  padding: ${props => props["data-m"] ? "4px 7.5px" : "6px 10px"};
  background-color: ${props => props["data-dm"] ? siteColors.button.dark : siteColors.button.light};
  
  &:hover {
    margin-top: 0;
    padding-bottom: 8px;
  }
`;

const OutBound = styled(OutboundIcon, globalOptions)`
  margin-left: 5px;
  font-size: ${props => props["data-m"] ? 1 : 1.25}rem;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

/**
 * Button to be placed vertically along a side of the viewport
 *
 * @param {Object} props Component props
 * @param {string} props.href The link to be placed on the button
 * @param {string} props.text The text to be shown on the button
 * @param {boolean} [props.outbound=false] Shows if the button should include an outbound icon
 */
export default function SideButton({href, text, outbound=false, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Link
                href={href}
                passHref
            >
                <MUILink
                    underline="none"
                    {...rest}
                >
                    <SideContainer data-dm={darkMode} data-m={mobile}>
                        <TowerText variant={mobile ? "body1" : "h6"}>
                            {text}
                        </TowerText>
                        {outbound && (
                            <OutBound data-dm={darkMode} data-m={mobile} fontSize={mobile ? "small" : "medium"}/>
                        )}
                    </SideContainer>
                </MUILink>
            </Link>
        </>
    );
}