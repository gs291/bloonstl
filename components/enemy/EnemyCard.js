import Link from "next/link";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";
import {Card, CardContent, Link as MUILink, Typography} from "@mui/material";

import Icon from "../tower/Icon";
import TowerText from "../tower/TowerText";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getTowerLink, rgbaHex} from "../../lib/utils/utils";
import {getBorder, getMobile} from "../../lib/redux/selectors";
import {CARD_PREFIX, SELECT_CONTENT_CARD, ga4SendSelectContent} from "../../lib/utils/ga4";


const CardContainer = styled(Card, globalOptions)`
  @keyframes popup {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  animation-name: popup;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  
  
  
  margin: 5px;
  background-color: ${props => props["data-bc"]};
  border: 4px solid ${props => props["data-brc"]};
  border-radius: 10px;
  transition: 0.3s;
  
  &:hover{
    cursor: pointer;
    transform: translateY(-10px);
    background-color: ${props => props["data-hbc"]};
    box-shadow: 0 10px 10px ${props => rgbaHex(props["data-bc"], 0.75)};
  }
`;

const MLink = styled(MUILink)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const TowerName = styled(Typography)`
  color: ${props => props.theme.palette.text.primary};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardContentStyled = styled(CardContent)`
  position: relative;
`;

const Quantity = styled(TowerText)`
  position: absolute;
  bottom: 65px;
  right: 45px;
  z-index: 2;
`;


const GA4_TOWER_CARD_ID = "BLOON";

/**
 * Full Bloon card
 *
 * @param {Object} props Component props
 * @param {Object} props.enemy Object containing the enemy
 * @param {string} props.type Shows if the enemy is a bloon or boss
 * @param {number} props.ignoreFilter Shows if the card should ignore any filters
 * @param {number} [props.quantity] If there a number to display with the card, display quantity
 */
export default function EnemyCard({enemy, type, ignoreFilter, quantity, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const border = useSelector(getBorder);

    let href, borderColor, backgroundColor, hoverBackgroundColor;

    href = `/enemy/${getTowerLink(enemy.varName)}`;
    borderColor = theme.palette.bloon[enemy.varName].color;
    backgroundColor = type === "grid" ? theme.palette.tower.type.heroes.card : "transparent";
    hoverBackgroundColor = type === "grid" ? theme.palette.tower.type.heroes.hover : theme.palette.bloon.card.hover;

    if (!border && ignoreFilter === 0) {
        borderColor = backgroundColor;
    }

    const handleClick = (e) => ga4SendSelectContent(SELECT_CONTENT_CARD, {
        item_id: `${CARD_PREFIX}${GA4_TOWER_CARD_ID}`,
        bloon: enemy.name,
        bloon_type: type
    });


    return (
        <>
            <Link href={href} passHref>
                <MLink {...rest}>
                    <CardContainer onClick={handleClick} data-brc={borderColor} data-bc={backgroundColor} data-hbc={hoverBackgroundColor}>
                        <CardContentStyled>
                            {typeof quantity === "number" && quantity > 0 && (
                                <Quantity variant="h5">
                                    x{quantity}
                                </Quantity>
                            )}
                            <Icon tower={{name: enemy.name, filename: `${enemy.varName}.png`}} />
                            <TowerName variant={mobile ? "body1" : "h5"}>
                                {enemy.name}
                            </TowerName>
                        </CardContentStyled>
                    </CardContainer>
                </MLink>
            </Link>
        </>
    );
}