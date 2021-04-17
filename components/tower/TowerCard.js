import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Card, CardContent, Link as MUILink, Typography} from "@material-ui/core";

import Icon from "../tower/Icon";
import siteColors from "../../lib/utils/siteColors";
import {getBorder} from "../../lib/redux/selectors";
import {getTowerLink, getMonkeyTypeColor, getHeroColor} from "../../lib/utils/utils";

const CardContainer = styled(Card)`
  margin: 5px;
  background-color: ${props => props["data-bc"]};
  border: 4px solid ${props => props["data-brc"]};
  border-radius: 10px;
  transition: 0.3s;
  
  &:hover{
    cursor: pointer;
    background-color: ${props => props["data-hbc"]};
  }
`;

const MLink = styled(MUILink)`
  &:hover {
    text-decoration: none;
  }
`;

const TowerName = styled(Typography)`
  color: ${siteColors.text.dark};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function TowerCard({tower, towerType, rank, keepBorder}) {
    const border = useSelector(getBorder);
    let href, borderColor, backgroundColor, hoverBackgroundColor;

    if (towerType === "monkey") {
        href = `/monkey/${getTowerLink(tower)}`;
        borderColor = getMonkeyTypeColor(tower.type);
        backgroundColor = getMonkeyTypeColor(tower.type, rank);
        hoverBackgroundColor = getMonkeyTypeColor(tower.type, rank, true);
    } else if (towerType === "hero") {
        href = `/hero/${getTowerLink(tower)}`;
        borderColor = getHeroColor(tower.name);
        backgroundColor = getHeroColor(tower.name, rank, false, true);
        hoverBackgroundColor = getHeroColor(tower.name, rank, true, true);
    }

    if (!border && keepBorder === 0) {
        borderColor = backgroundColor;
    }

    return (
        <>
            <Link href={href} passHref>
                <MLink>
                    <CardContainer data-brc={borderColor} data-bc={backgroundColor} data-hbc={hoverBackgroundColor}>
                        <CardContent>
                            <Icon tower={tower}/>
                            <TowerName varient="body1">
                                {tower.name}
                            </TowerName>
                        </CardContent>
                    </CardContainer>
                </MLink>
            </Link>
        </>
    );
}