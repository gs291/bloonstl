import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const Tier = styled(Typography, globalOptions)`
  color: ${props => getTierColor(props.name)};
  cursor: default;
  ${props => !props["data-dm"] && `text-shadow: 5px 5px 10px ${siteColors.text.light}`};
  transition: 0.3s;
`;

const TierContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export default function TierPathText ({ className, tier, tiers, towerType}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TierContainer className={className}>
                {towerType === "hero" ? (
                    <Tier variant="h3" component="h2" name={tier} data-dm={darkMode}>
                        Level {tiers.top_path}
                    </Tier>
                ) : (
                    <Tier variant="h3" component="h2" name={tier} data-dm={darkMode}>
                        { tiers.top_path }
                        &nbsp;-&nbsp;
                        { tiers.middle_path }
                        &nbsp;-&nbsp;
                        { tiers.bottom_path }
                    </Tier>
                )}

            </TierContainer>
        </>
    );
}