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

const TierItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TierText = styled(Tier)`
  margin-left: 10px;
`;

const RightContainer = styled.div`
  margin-left: 15px;
`;

export default function TierTitle ({ className, tier, tiers, showText }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TierContainer className={className}>
                <TierItem>
                    <Tier variant={tiers ? "h1" : "h2"} name={tier} data-dm={darkMode}>
                        { tier }
                    </Tier>
                    {showText && (
                        <TierText variant="h4" component="div" name={tier} data-dm={darkMode}>
                            Tier
                        </TierText>
                    )}
                </TierItem>
                {tiers && (
                    <TierItem>
                        <RightContainer>
                            <Tier variant="h4" component="h2" name={tier} data-dm={darkMode}>
                                { tiers.top_path }
                                &nbsp;-&nbsp;
                                { tiers.middle_path }
                                &nbsp;-&nbsp;
                                { tiers.bottom_path }
                            </Tier>
                        </RightContainer>
                    </TierItem>
                )}
            </TierContainer>
        </>
    );
}