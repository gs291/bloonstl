import styled from "@emotion/styled";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Menu, MenuItem} from "@material-ui/core";

import NavLink from "./NavLink";
import {rgbaHex} from "../../lib/utils/utils";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import TextTooltip from "../tooltip/TextTooltip";

const NavExpandText = styled.div`
  height: 10px;
  display: flex;
  align-items: center;
`;

const NavExpandHover = styled.span`
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 1.5em;
  height: 43px;
  width: 43px;
`;

const NavExpand = styled.div`
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

const ExpandMenu = styled(Menu)`
  & .MuiMenu-paper {
    background-color: ${props => props["data-dm"] ? siteColors.expander.dark : siteColors.expander.light};
  }
`;

const MenuContainer = styled.div`
  
`;

const NavExpandItem = styled(MenuItem)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MoreTooltip = styled(TextTooltip)`
  ${props => props["data-d"] ? "" : "display: none;" }
`;

export default function NavCollapse({links, expanderRef, anchorEl, handleExpand, handleClose}){
    const [isHover, setIsHover] = useState(false);

    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const Expander = () => (
        <NavExpand onClick={handleExpand} ref={expanderRef} data-m={mobile} data-dm={darkMode}>
            <NavExpandHover>
                <NavExpandText>
                    . . .
                </NavExpandText>
            </NavExpandHover>
        </NavExpand>
    )

    return (
        <>
            <TextTooltip tooltip={"More"} open={!anchorEl && isHover}>
                <NavExpand
                    onClick={handleExpand}
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
            </TextTooltip>
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
                getContentAnchorEl={null}
                data-dm={darkMode}
            >
                <MenuContainer>
                    {links.map(link => (
                        <NavExpandItem onClick={handleClose} key={link.key}>
                            <NavLink {...link} />
                        </NavExpandItem>
                    ))}
                </MenuContainer>
            </ExpandMenu>
        </>
    );
}