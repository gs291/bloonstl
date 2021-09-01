import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

const ItemList = styled.li`
  margin-top: 20px;
`;

export default function PatchItems({ className, items }) {

    return (
        <>
            <ul>
                {items.map((item, idx) => (
                    <ItemList key={idx}>
                        <TowerText variant={item.text ? "h6" : "h5"} font={!!item.text}>
                            {item.text ?
                                item.text
                                : item.tower ? item.tower : item.title}
                        </TowerText>
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