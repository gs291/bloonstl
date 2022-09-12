import styled from "@emotion/styled";
import {useTheme} from '@mui/material/styles';

import TowerText from "../tower/TowerText";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TabContainer = styled("div")`
  width: 100%;
  height: 30px;
  
  display: flex;
  flex-direction: row;
`;

const TabLeftSide = styled("div")`
  width: 60%;
  position: relative;
`;

const TabRightSide = styled("div")`
  width: 41%
`;

const LeftSideOuter = styled("div", globalOptions)`
  height: 100%;
  width: 100%;

  position: relative;
  background-color: ${props => props["data-bc"]};
  border-bottom-right-radius: 8px;
  z-index: 1;
`;

const LeftSideInner = styled("div", globalOptions)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  
  background: ${props => props["data-bc"]};
`;

const TabTitle = styled("div", globalOptions)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${props => props["data-bc"]};
  
`;

/**
 * The stats card tab attached to the top of the card
 *
 * @param {Object} props Component props
 * @param {string} props.cardType Shows what card it is
 * @param {string} props.title The title for the stats card tab
 * @param {number} props.level Shows how deep the stat card (recursive) level is
 * @param {string} props.backgroundColor The color of the stat card tab
 * @param {string|null} props.parentBackgroundColor The color of the parent stat card
 */
export default function StatTab({cardType, title, level, backgroundColor, parentBackgroundColor}) {
    const theme = useTheme();

    const gradient = `linear-gradient(180deg, ${theme.palette.stats[cardType].primary}, ${backgroundColor})`

    return (
        <>
            <TabContainer>
                <TabLeftSide>
                    <LeftSideOuter
                        data-bc={parentBackgroundColor ? parentBackgroundColor : theme.palette.background.default}
                    />
                    <LeftSideInner data-bc={gradient} />
                </TabLeftSide>

                <TabRightSide>
                    <TabTitle data-bc={gradient} >
                        <TowerText variant={level === 1 ? "h6" : "subtitle1"} font={true} >
                            {title}
                        </TowerText>
                    </TabTitle>
                </TabRightSide>
            </TabContainer>
        </>
    );
}