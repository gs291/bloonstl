import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import {Tooltip as MUITooltip, ClickAwayListener} from "@mui/material";

import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {TOOLTIP_PREFIX, ga4SendTooltipHover} from "../../lib/utils/ga4";


//https://stackoverflow.com/questions/59934683/style-material-ui-tooltip-using-emotion-styled
// Media is used for a specific case with ability tooltips causing page overflow x
const StyledTooltip = styled(({ className, ...other }) => (
    <MUITooltip classes={{ tooltip: className }} {...other} />
), globalOptions)`
  @media only screen and (min-width: 901px) and (max-width: 950px) {
    min-width:${props => props["data-fw"] ? 375 : 0 }px;
    max-width: 375px;
  }

  @media only screen and (min-width: 951px) and (max-width: 1025px) {
    min-width:${props => props["data-fw"] ? 400 : 0 }px;
    max-width: 400px;
  }
  
  background-color: ${props => props.theme.palette.background.tooltip};
  min-width:${props => props["data-fw"] 
          ? props["data-m"] ? 300 : 450
          : 0 }px;
  ${props => props["data-fw"] ? `min-width: ${props => props["data-m"] ? 200 : 450}px;` : ""} 
  max-width: ${props => props["data-m"] ? 300 : 450}px;
  
  padding: 4px 6px;
  
  margin-left: 15px;
  margin-right: 15px;
  ${props => props["data-m"] ? "margin-bottom: 10px;" : ""}
  
  border: 2px solid ${props =>
          props["data-bc"]
                  ? props["data-bc"]
                  : props.theme.palette.border.tooltip};

  .MuiTooltip-arrow {
    color: ${props => props.theme.palette.background.tooltip};
  }
  
  .MuiTooltip-arrow::before {
    border: 2px solid ${props => 
            props["data-bc"] 
                    ? props["data-bc"]
                    : props.theme.palette.border.tooltip};
  }
`;

const TooltipContainer = styled("div")``;

const ContentContainer = styled("div")``;

/**
 * The re-usable tooltip component
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the tooltip
 * @param {any} props.title The component for the tooltip
 * @param {string} props.borderColor The border color for the tooltip
 * @param {string} props.ga4ID The Google Analytics 4 ID to send
 * @param {boolean} props.forceWidth Shows if the tooltip's width should be forced or not
 * @param {string} [props.placement=top] The tooltip placement location
 */
export default function Tooltip({children, title, borderColor, ga4ID, forceWidth=true, placement="top", ...rest}) {
    const mobile = useSelector(getMobile);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const openState = rest.open !== undefined ? rest.open : open;

        // If the user hovers over and opens the tooltip, send an event to GA4 after 1 second
        const timer = openState && setTimeout(() => {
            const wasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
            if (!wasTouch) {
                ga4SendTooltipHover({item_id: `${TOOLTIP_PREFIX}${ga4ID}`});
            }
        }, 1000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, rest.open])

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
                        placement={placement}
                        data-bc={borderColor}
                        data-m={mobile}
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