import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Tooltip as MUITooltip, ClickAwayListener} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

//https://stackoverflow.com/questions/59934683/style-material-ui-tooltip-using-emotion-styled
const StyledTooltip = styled(({ className, ...other }) => (
    <MUITooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: ${siteColors.tooltip.dark};
  width: 300px;
  transition: 0.3s;
  
  ${props => props["data-m"] ? "margin-bottom: 10px;" : ""}
  
  border: 2px solid ${props =>
          props["data-a"] 
                  ? siteColors.ability.activated 
                  : props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light};

  .MuiTooltip-arrow {
    color: ${siteColors.tooltip.dark};
  }
  
  .MuiTooltip-arrow::before {
    border: 2px solid ${props => 
            props["data-a"] 
                    ? siteColors.ability.activated 
                    : props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light};
  }
`;

export default function Tooltip({className, children, title, active}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <StyledTooltip
                        onClose={handleTooltipClose}
                        onMouseEnter={handleTooltipOpen}
                        open={open}
                        title={title}
                        leaveDelay={250}
                        leaveTouchDelay={3500}
                        placement="top"
                        data-a={active}
                        data-m={mobile}
                        data-dm={darkMode}
                        arrow
                    >
                        <div onClick={handleTooltipOpen}>
                            { children }
                        </div>
                    </StyledTooltip>
                </div>
            </ClickAwayListener>
        </>
    );
}