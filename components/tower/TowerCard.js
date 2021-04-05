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
  background-color: ${ siteColors.card.dark };
  border: 2px solid ${props => props.bordercolor};
  &:hover{
    cursor: pointer;
    background-color: ${ props => props.backgroundcolor };
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

export default function TowerCard({tower, towerType, keepBorder}) {
    const border = useSelector(getBorder);
    let href, borderColor, backgroundColor;

    if (towerType === "monkey") {
        href = `/monkey/${getTowerLink(tower)}`;
        borderColor = getMonkeyTypeColor(tower.type);
        backgroundColor = getMonkeyTypeColor(tower.type, true);
    } else if (towerType === "hero") {
        href = `/hero/${getTowerLink(tower)}`;
        borderColor = getHeroColor(tower.name);
        backgroundColor = getHeroColor(tower.name, true);
    }

    if (!border && keepBorder === 0) {
        borderColor = siteColors.card.dark;
    }

    return (
        <>
            <Link href={href} passHref>
                <MLink>
                    <CardContainer bordercolor={borderColor} backgroundcolor={backgroundColor}>
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