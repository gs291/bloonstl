import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Tooltip as MUITooltip, ClickAwayListener} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";

//https://stackoverflow.com/questions/59934683/style-material-ui-tooltip-using-emotion-styled
const StyledTooltip = styled(({ className, ...other }) => (
    <MUITooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: ${siteColors.background.tooltip.dark};
  width: 265px;
  
  ${props => props.mobile ? "margin-bottom: 7px;" : ""}
  
  border: 1px solid ${props => props.active ? siteColors.ability.activated : siteColors.background.tooltip.dark};

  .MuiTooltip-arrow {
    color: ${siteColors.background.tooltip.dark};
  }
  
  .MuiTooltip-arrow::before {
    border: 1px solid ${props => props.active ? siteColors.ability.activated : siteColors.background.tooltip.dark};
  }
`;

export default function Tooltip({ className, children, title, upgradeTier, active}) {
    let placement = "top";
    const mobile = useSelector(getMobile);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    if      (upgradeTier % 5 === 0 || (upgradeTier -1) % 5 === 0) { placement = "top-start"; }
    else if ((upgradeTier + 1) % 5 === 0 || (upgradeTier + 2) % 5 === 0) { placement = "top-end"; }

    return (
        <>
            { !mobile && (
                <>
                    <StyledTooltip
                        title={title}
                        leaveDelay={100}
                        placement={placement}
                        active={active}
                        mobile={mobile ? 1 : 0}
                        arrow
                    >
                        <div>
                            { children }
                        </div>
                    </StyledTooltip>
                </>
            )}
            { mobile && (
                <>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                            <StyledTooltip
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={title}
                                placement={placement}
                                active={active}
                                mobile={mobile ? 1 : 0}
                                arrow
                            >
                                <div onClick={handleTooltipOpen}>
                                    { children }
                                </div>
                            </StyledTooltip>
                        </div>
                    </ClickAwayListener>
                </>
            )}
        </>
    );
}