import {useSelector} from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import {styled, useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import DefaultButton from "./DefaultButton";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const RefreshContainer = styled("div", globalOptions)`
  position: ${props => props["data-m"] ? "relative" : "absolute"};
  right: ${props => props["data-m"] ? "0" : "1"}em;
  z-index: 5;
  
  display: flex;
  justify-content: center;
`;

const RefreshI = styled(RefreshIcon)`
  margin-left: 5px;
  color: ${props =>props.theme.palette.text.primary};
`;

const CenteredComponents = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-d"]};
  justify-content: center;
  align-items: center;
`;

/**
 * Patch notes refresh button
 *
 * @param {Object} props Component props
 * @param {string} props.borderColor The color for the button
 */
export default function PatchRefreshButton({borderColor, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    return (
        <>
            <RefreshContainer data-m={mobile}>
                <DefaultButton borderColor={borderColor} variant={theme.palette.mode === "dark" ? "outlined" : "contained"} {...rest}>
                    <CenteredComponents data-d="row">
                        <TowerText variant="subtitle2" font={true}>
                            Reset Patch Data
                        </TowerText>
                    </CenteredComponents>
                    <RefreshI />
                </DefaultButton>
            </RefreshContainer>
        </>
    );
}