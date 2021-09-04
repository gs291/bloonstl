import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Tier = styled(Typography)`
  color: ${props => getTierColor(props.name)};
  ${props => !props["data-dm"] && `text-shadow: 5px 5px 10px ${siteColors.text.light}`};
  transition: 0.3s;
`;

const TierContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TierLabel = styled(Tier)`
  margin-left: 10px;
`;

export default function TierText ({ className, tier, showText }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TierContainer className={className}>
                <Tier variant="h2" name={tier} data-dm={darkMode}>
                    { tier }
                </Tier>
                {showText && (
                    <TierLabel variant="h4" component="div" name={tier} data-dm={darkMode}>
                        Tier
                    </TierLabel>
                )}
            </TierContainer>
        </>
    );
}