import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import {getDarkMode} from "../../lib/redux/selectors";
import siteColors from "../../lib/utils/siteColors";

const TabContainer = styled.div`
  width: 100%;
  height: 30px;
  
  display: flex;
  flex-direction: row;
`;

const TabLeftSide = styled.div`
  width: 60%;
  position: relative;
`;

const TabRightSide = styled.div`
  width: 41%
`;

const LeftSideOuter = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  transition: 0.3s;
  background-color: ${props => props["data-bc"]};
  border-bottom-right-radius: 8px;
  z-index: 1;
  
  &:after {
    content: "";
    position: absolute;
    left: 10px;
    right: -1px;
    bottom: -1px;
    top: 8px;
    
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
    border-right: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
  }
`;

const LeftSideInner = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].dark : siteColors.stats[props["data-t"]].light};
`;

const TabTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].dark : siteColors.stats[props["data-t"]].light};

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 9px;
    top: 0;
    
    border-top-left-radius: 10px;
    border-left: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
  }
  
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
    border-right: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
  }
`;

export default function StatTab({type, title, level, parentBackgroundColor}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TabContainer>
                <TabLeftSide>
                    <LeftSideOuter
                        data-dm={darkMode}
                        data-t={type}
                        data-bc={parentBackgroundColor
                            ? parentBackgroundColor
                            : darkMode ? siteColors.page.dark : siteColors.page.light}
                    />
                    <LeftSideInner data-dm={darkMode} data-t={type} />
                </TabLeftSide>

                <TabRightSide>
                    <TabTitle data-dm={darkMode} data-t={type}>
                        <TowerText variant={level === 1 ? "h6" : "subtitle1"}>
                            {title}
                        </TowerText>
                    </TabTitle>
                </TabRightSide>
            </TabContainer>
        </>
    );
}