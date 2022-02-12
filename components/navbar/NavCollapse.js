import styled from "@emotion/styled";
import {useState} from "react";
import {useSelector} from "react-redux";
import {ClickAwayListener, MenuItem, Popover} from "@mui/material";

import NavLink from "./NavLink";
import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const NavExpandText = styled("div")`
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const NavExpandHover = styled("span")`
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 1.5em;
  height: 50px;
  width: 50px;
`;

const NavExpand = styled("div", globalOptions)`
  padding: 0 2em;
  border-bottom: 5px solid transparent;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  height: ${props => props["data-m"] ? "" : siteSizes.nav.height};
  ${props => props["data-m"] ? "width: 100%;" : ""}
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
  
  &:hover>span {
    background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.expander.hover.dark : siteColors.expander.hover.light, 0.25)};
  }
`;

const ExpandMenu = styled(Popover, globalOptions)`
  & .MuiPaper-root {
    background-color: ${props => props["data-dm"] ? siteColors.expander.dark : siteColors.expander.light};
  }
`;

const NavExpandItem = styled(MenuItem)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GA4_NAV_COLLAPSE_ID = "NAV_COLLAPSE";

/**
 * Navbar collapse for (...)
 *
 * @param {Object} props Component props
 * @param {Array<Object>} props.links Array list of links to display in the collapsed container
 * @param {RefObject<HTMLDivElement>|null} props.expanderRef React reference to the navbar expander (...)
 * @param {RefObject<HTMLDivElement>|null} props.anchorEl React reference anchor to the navbar expander (...)
 * @param {function} props.handleExpand Function to expand/show the collapse container
 * @param {function} props.handleClose Function to close the collapse container
 */
export default function NavCollapse({links, expanderRef, anchorEl, handleExpand, handleClose}){
    const [isHover, setIsHover] = useState(false);

    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleClick = () => {
        handleExpand();
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_NAV_COLLAPSE_ID}`});
    }

    return (
        <>
            <Tooltip title={(<TowerText variant="h6" font={true}>More</TowerText>)} forceWidth={false} open={!anchorEl && isHover} ga4ID="NAV_COLLAPSE" >
                <NavExpand
                    onClick={handleClick}
                    ref={expanderRef}
                    data-m={mobile}
                    data-dm={darkMode}
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <NavExpandHover>
                        <NavExpandText>
                            . . .
                        </NavExpandText>
                    </NavExpandHover>
                </NavExpand>
            </Tooltip>
            <ExpandMenu
                open={!!anchorEl}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                container={expanderRef.current}
                role={undefined}
                data-dm={darkMode}
                style={{
                    zIndex: 1,
                    position: "inherit",
                }}
                hideBackdrop
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        {links.map(link => (
                            <NavExpandItem onClick={handleClose} key={link.key}>
                                <NavLink {...link} />
                            </NavExpandItem>
                        ))}
                    </div>
                </ClickAwayListener>
            </ExpandMenu>
        </>
    );
}