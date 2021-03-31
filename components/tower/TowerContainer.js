import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Icon from "../tower/Icon";
import TowerInfo from "./TowerInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {getHeroColor, getMonkeyTypeColor} from "../../lib/utils";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function TowerContainer({tower, towerType}) {
    const mobile = useSelector(getMobile);
    let backgroundColor;

    if (towerType === "monkey") {
        backgroundColor = getMonkeyTypeColor(tower.type, true);
    } else if (towerType === "hero") {
        backgroundColor = getHeroColor(tower.name, true);
    }

    return (
        <>
            <ContentContainer>
                <Icon tower={ tower } />
                <VerticalDivider backgroundColor={ backgroundColor } />
                <TowerInfo tower={ tower }/>
            </ContentContainer>
        </>
    );
}