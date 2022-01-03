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
  background-color: ${props => props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light};
  max-width: ${props => props["data-m"] ? 300 : 600}px;
  
  transition: 0.3s;
  padding: 4px 6px;
  
  margin-left: 15px;
  margin-right: 15px;
  
  border: 2px solid ${props =>
          props["data-a"] 
                  ? siteColors.ability.activated 
                  : props["data-dm"] ? siteColors.tooltip.light : siteColors.tooltip.dark};

  .MuiTooltip-arrow {
    color: ${siteColors.tooltip.dark};
  }
  
  .MuiTooltip-arrow::before {
    border: 2px solid ${props => 
            props["data-a"] 
                    ? siteColors.ability.activated 
                    : props["data-dm"] ? siteColors.tooltip.light : siteColors.tooltip.dark};
  }
`;

const TooltipContainer = styled.div``;

const ContentContainer = styled.div``;

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
                <TooltipContainer>
                    <StyledTooltip
                        onClose={handleTooltipClose}
                        onMouseEnter={handleTooltipOpen}
                        open={open}
                        title={title}
                        leaveDelay={100}
                        leaveTouchDelay={5000}
                        placement="top"
                        data-a={active}
                        data-m={mobile}
                        data-dm={darkMode}
                        arrow
                        disableInteractive
                    >
                        <ContentContainer onClick={handleTooltipOpen}>
                            { children }
                        </ContentContainer>
                    </StyledTooltip>
                </TooltipContainer>
            </ClickAwayListener>
        </>
    );
}