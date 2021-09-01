import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

const ItemList = styled.li`
  margin-top: 20px;
`;

const SubItemList = styled.li`
  margin-top: 5px;
`;

export default function PatchItems({ className, items }) {

    return (
        <>
            <ul>
                {items.map((item, idx) => (
                    <ItemList key={idx}>
                        {item.tower && (
                            <>
                                <TowerText variant="h6">
                                    {item.tower}
                                </TowerText>
                                <TowerText variant="body1" font={true}>
                                    {item.description}
                                </TowerText>
                                {item.items && (<PatchItems items={item.items} />)}
                            </>
                        )}

                        {!item.tower && (
                            <>
                                <TowerText variant="h6" font={!!item.text}>
                                    {item.text ? item.text : item.title}
                                </TowerText>
                                {item.subtexts && (
                                    <ul>
                                        {item.subtexts.map(text => (
                                            <SubItemList key={text}>
                                                <TowerText variant="body2" font={true}>
                                                    {text}
                                                </TowerText>
                                            </SubItemList>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </ItemList>
                ))}
            </ul>
        </>
    );
}