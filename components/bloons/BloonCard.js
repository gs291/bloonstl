import Link from "next/link";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";
import {Card, CardContent, Link as MUILink, Typography} from "@mui/material";

import Icon from "../tower/Icon";
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


const GA4_TOWER_CARD_ID = "BLOON";

/**
 * Full tower card
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing the bloon
 * @param {string} props.type Shows if the bloon is a bloon or boss
 * @param {number} props.ignoreFilter Shows if the card should ignore any filters
 */
export default function BloonCard({bloon, type, ignoreFilter}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const border = useSelector(getBorder);

    let href, borderColor, backgroundColor, hoverBackgroundColor;

    if (type === "bloon") {
        href = `/bloon/${getTowerLink(bloon.varName)}`;
    } else if (type === "boss") {
        href = `/boss/${getTowerLink(bloon.varName)}`;
    }
    borderColor = theme.palette.tower.hero.geraldo.color;
    backgroundColor = theme.palette.tower.type.heroes.card;
    hoverBackgroundColor = theme.palette.tower.type.heroes.hover

    if (!border && ignoreFilter === 0) {
        borderColor = backgroundColor;
    }

    const handleClick = (e) => ga4SendSelectContent(SELECT_CONTENT_CARD, {
        item_id: `${CARD_PREFIX}${GA4_TOWER_CARD_ID}`,
        bloon: bloon.name,
        bloon_type: type
    });


    return (
        <>
            <Link href={href} passHref>
                <MLink>
                    <CardContainer onClick={handleClick} data-brc={borderColor} data-bc={backgroundColor} data-hbc={hoverBackgroundColor}>
                        <CardContent>
                            <Icon tower={{name: bloon.name, filename: `${bloon.varName}.png`}} />
                            <TowerName variant={mobile ? "body1" : "h5"}>
                                {bloon.name}
                            </TowerName>
                        </CardContent>
                    </CardContainer>
                </MLink>
            </Link>
        </>
    );
}