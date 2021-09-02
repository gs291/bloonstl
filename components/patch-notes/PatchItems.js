import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";

const ItemList = styled.li`
  margin-top: 20px;
  
  &::marker {
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TowerTitle = styled(TowerText)`
  ${props => props["data-bc"] ? `text-shadow: 0 5px 20px ${props["data-bc"]};` : ''}
`;

export default function PatchItems({ className, items }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <ul>
                {items.map((item, idx) => (
                    <ItemList key={idx} data-dm={darkMode}>
                        <TowerTitle
                            variant={item.text ? "h6" : "h5"}
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
                            <TowerText variant="body1" font={true}>
                                {item.description}
                            </TowerText>
                        )}
                        {item.items && (<PatchItems items={item.items} />)}
                    </ItemList>
                ))}
            </ul>
        </>
    );
}