import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import StatNumbers from "../statistics/StatNumbers";

const TooltipContainer = styled.div`
  padding: 2em 1em;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const SmallDivider = styled(FixedDivider)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;


export default function DamageTooltip({type, typeDamage, baseDamage, extraDamage = 0} ) {
    const totalDamage = typeDamage + baseDamage + extraDamage;

    let extraDamageText = "Extra DMG";
    const extraType = type.match(/Fortified\s(\w*)/);
    if (extraType) {
        extraDamageText = `${extraType[1]} DMG`;
    }

    return (
        <>
            <TooltipContainer>
                <TowerText variant="h5">
                    {type} Damage
                </TowerText>
                <TallDivider width={100} />
                <StatNumbers
                    widthLeft={60}
                    widthRight={40}
                    rows={[
                        {
                            "title": `${type} DMG`,
                            "text": `+ ${typeDamage}`
                        },
                        {
                            "title": `${extraDamageText}`,
                            "text": `+ ${extraDamage}`
                        },
                        {
                            "title": `Base DMG`,
                            "text": `+ ${baseDamage}`
                        },
                        {
                            "title": `Total`,
                            "text": `= ${totalDamage}`
                        }
                    ]}
                />
            </TooltipContainer>
        </>
    );
};