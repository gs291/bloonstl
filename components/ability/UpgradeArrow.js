import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {DoubleArrow} from "@mui/icons-material";

import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const UpgradeArrowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Arrow = styled(DoubleArrow, globalOptions)`
  color: ${props => props["data-s"] ? props["data-c"] : props.theme.palette.text.primary};
  transition: 0.3s;
  ${props => props["data-m"] ? "width: 15px;" : ""}
`;


/**
 * Upgrade arrow in-between abilities
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.color The color of the tower
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function UpgradeArrow({ className, color, selected }) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow data-s={selected} data-c={color} data-m={mobile}/>
            </UpgradeArrowContainer>
        </>
    );
}