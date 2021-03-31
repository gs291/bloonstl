import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Tooltip as MUITooltip, ClickAwayListener} from "@material-ui/core";

import {siteColors} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";

//https://stackoverflow.com/questions/59934683/style-material-ui-tooltip-using-emotion-styled
const StyledTooltip = styled(({ className, ...other }) => (
    <MUITooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: ${siteColors.background.tooltip.dark};
`;

export default function Tooltip({ className, children, title, upgradeTier}) {
    let placement = "top";
    const mobile = useSelector(getMobile);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    if      (upgradeTier === 0) { placement = "top-start"; }
    else if (upgradeTier === 4) { placement = "top-end"; }

    return (
        <>
            { !mobile && (
                <>
                    <StyledTooltip
                        title={title}
                        arrow
                        interactive
                        leaveDelay={100}
                        placement={placement}
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
                                PopperProps={{ disablePortal: true }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={title}
                                placement={placement}
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