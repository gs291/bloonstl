import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {getTierColor, rgbaHex} from "../../lib/utils/utils";


const Button = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 5px 5px;
  border-radius: 50%;
  background-color: ${props => props["data-s"] ? getTierColor(props["data-t"]) : "none"};
  border: 5px solid transparent;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 5px 5px 7.5px 0 ${props => props["data-t"] 
            ? rgbaHex(getTierColor(props["data-t"]), 0.5) 
            : props["data-dm"] ? siteColors.page.light : siteColors.page.dark
    };
    border: 5px solid ${props => getTierColor(props["data-t"])};
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
                data-dm={darkMode}
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