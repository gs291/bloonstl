import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";

export default function DamageTooltip({type, typeDamage, baseDamage, extraDamage = 0} ) {
    const totalDamage = typeDamage + baseDamage + extraDamage;

    const typeDamageText = `${typeDamage} ${type} Damage`;

    let extraDamageText = "";
    const extraType = type.match(/Fortified\s(\w*)/);
    if (extraType) {
        extraDamageText = `${extraDamage} ${extraType[1]} Damage`;
    }

    const baseDamageText = `${baseDamage} Base Damage`;

    return (
        <>
            <TowerText variant="body1" font={true}>
                + {typeDamageText}
            </TowerText>
            {extraDamageText !== "" && (
                <TowerText variant="body1" font={true}>
                    + {extraDamageText}
                </TowerText>
            )}
            <TowerText variant="body1" font={true}>
                + {baseDamageText}
            </TowerText>
            <FixedDivider />
            <TowerText variant="body1" font={true}>
                = {totalDamage} Total {type} Damage
            </TowerText>
        </>
    );
};