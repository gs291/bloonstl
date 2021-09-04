import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const Button = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 20px 20px;
  border-radius: 50%;
  background-color: ${props => props["data-s"] ? getTierColor(props["data-t"]) : "none"};
  border: 2px solid transparent;
  transition: 0.3s;
  
  &:hover {
    border: 2px solid ${props => getTierColor(props["data-t"])};
  }
`;

const TierText = styled(Typography)`
  transition: 0.3s;
  color: ${props => props["data-s"] 
          ? props["data-dm"] ? siteColors.page.dark : siteColors.page.light 
          : getTierColor(props["data-t"])};
  
  user-select: none;
  width: 55px;
  height: 55px;
  text-align: center;
`;

export default function TierButton({ className, tier, selected, handleTier }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Button
                onClick={(e) => handleTier(e, tier)}
                data-t={tier}
                data-s={selected}
                name="tier"
                value={tier}
                className={className}
            >
                <TierText
                    variant="h3"
                    data-dm={darkMode}
                    data-t={tier}
                    data-s={selected}
                >
                    {tier}
                </TierText>
            </Button>
        </>
    );
}