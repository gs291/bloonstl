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
  min-width:${props => props["data-fw"] 
          ? props["data-m"] ? 300 : 450
          : 0 }px;
  ${props => props["data-fw"] ? `min-width: ${props => props["data-m"] ? 200 : 450}px;` : ""} 
  max-width: ${props => props["data-m"] ? 300 : 450}px;
  
  transition: 0.3s;
  padding: 4px 6px;
  
  margin-left: 15px;
  margin-right: 15px;
  ${props => props["data-m"] ? "margin-bottom: 10px;" : ""}
  
  border: 2px solid ${props =>
          props["data-bc"]
                  ? props["data-bc"]
                  : props["data-dm"] ? siteColors.tooltip.light : siteColors.tooltip.dark};

  .MuiTooltip-arrow {
    color: ${siteColors.tooltip.dark};
  }
  
  .MuiTooltip-arrow::before {
    border: 2px solid ${props => 
            props["data-bc"] 
                    ? props["data-bc"]
                    : props["data-dm"] ? siteColors.tooltip.light : siteColors.tooltip.dark};
  }
`;

const TooltipContainer = styled.div``;

const ContentContainer = styled.div``;

export default function Tooltip({children, title, borderColor, forceWidth=true, ...rest}) {
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
                        leaveTouchDelay={7000}
                        placement="top"
                        data-bc={borderColor}
                        data-m={mobile}
                        data-dm={darkMode}
                        data-fw={forceWidth}
                        arrow
                        disableInteractive
                        {...rest}
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