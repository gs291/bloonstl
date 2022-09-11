import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getHeroColor, getMonkeyColor, rgbaHex} from "../../lib/utils/utils";


const Items = styled("ul")`
  padding-left: 20px;
`;

const ItemList = styled("li")`
  margin-top: 20px;
  
  &::marker {
    color: ${props => props.theme.palette.text.primary};
  }
`;

const TowerTitle = styled(TowerText, globalOptions)`
  ${props => props["data-bc"] ? `text-shadow: 0 5px 20px ${props["data-bc"]};` : ''}
`;

/**
 * Recursively generated component of patch items
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Array<Object>} props.items Array list of items/notes for the patch
 */
export default function PatchItems({className, items}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Items className={className}>
                {items.map((item, idx) => (
                    <ItemList key={idx}>
                        <TowerTitle
                            variant={item.text ? "body1" : "h6"}
                            font={!!item.text}
                            data-bc={
                                item.tower ?
                                    item.type ? getMonkeyColor(item.type) : getHeroColor(item.tower)
                                    : null
                            }
                        >
                            {item.text ?
                                item.text
                                : item.tower ? item.tower : item.title}
                        </TowerTitle>
                        {item.description && (
                            <TowerText variant="body1" font={true} textColor={rgbaHex(darkMode ? siteColors.text.dark : siteColors.text.light, 0.5)}>
                                &quot;{item.description}&quot;
                            </TowerText>
                        )}
                        {item.items && (<PatchItems items={item.items} />)}
                    </ItemList>
                ))}
            </Items>
        </>
    );
}