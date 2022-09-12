import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {DoubleArrow} from "@mui/icons-material";

import {getTierColor} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const UpgradeArrowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Arrow = styled(DoubleArrow, globalOptions)`
  color: ${props => props["data-s"] ? getTierColor(props.tier, props.theme) : props.theme.palette.text.primary};
  transition: 0.3s;
  ${props => props["data-m"] ? "width: 15px;" : ""}
`;


/**
 * Upgrade arrow in-between abilities
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function UpgradeArrow({ className, tier, selected }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow data-s={selected} tier={tier} data-dm={darkMode} data-m={mobile}/>
            </UpgradeArrowContainer>
        </>
    );
}