import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Tooltip as MUITooltip, ClickAwayListener} from "@material-ui/core";

import {getMobile} from "../../lib/redux/selectors";
import {siteColors} from "../../lib/utils";

const StyledTooltip = styled(({ className, ...other }) => (
    <MUITooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: ${siteColors.background.tooltip.dark};
`;

export default function Tooltip({ className, children, title}) {
    const mobile = useSelector(getMobile);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <>
            { !mobile && (
                <>
                    <StyledTooltip
                        title={title}
                        arrow
                        interactive
                        leaveDelay={100}
                        placement="top"
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
                                placement="top"
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