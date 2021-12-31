import styled from "@emotion/styled";

import Types from "./Types";
import StatItem from "./StatItem";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";


const InitialTypeText = styled(TowerText)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const TextTooltip = ({text}) => (
    <>
        <TowerText variant="body1" font={true}>
            {text}
        </TowerText>
    </>
);

const critOccurrenceToText = (critOccurrence) => {
    if (critOccurrence === "0~0") {
        return 'Critical damage never occurs.'
    }

    const co = critOccurrence.match(/(\d*)~(\d*)/);
    if (co) {
        return `Critical damage occurs every ${co[1]} to ${co[2]} shots`
    } else {
        return `Critical damage occurs every ${critOccurrence} shots`;
    }
};

const TypesTooltip = ({type, prevType}) => (
    <>
        <InitialTypeText variant="subtitle1" font={true}>
            Initial tower attack type: {prevType}
        </InitialTypeText>
        <Types type={type} />
    </>
);

const DamageText = (type, typeDamage, baseDamage, extraDamage = 0 ) => {
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

const codeParser = (code, value, prevValue, initialDamage = 0, baseDamage = 0, extraDamage = 0) => {
    switch(code) {
        case "Damage": return {"tooltip": <TextTooltip text={`Damage (${value}) is the amount of health a single hit of an attack removes.`} />};
        case "Pierce": return {"tooltip": <TextTooltip text={`Pierce (${value}) (a.k.a Popping Power) is the number of different targets a single projectile can hit.`} />};
        case "Range": return {"tooltip": <TextTooltip text={`Range (${value}) is the radius of the targetable area.`} />};
        case "Atk Spd": return {"decimals": 3,"tooltip": <TextTooltip text={`Attack Speed (${value}) (a.k.a Reload time) is the number of seconds between attacks.`} />, "suffix": "&nbsp;s"};
        case "Projectiles": return {"tooltip": <TextTooltip text={`Projectile Count (${value}) is the number of projectiles emitted at once.`} />};
        case "Type": return {"counter": false, "tooltip": <TypesTooltip type={value} prevType={prevValue} />};
        case "Camo": return {"tooltip": DamageText("Camo", initialDamage, baseDamage)};
        case "Ceramic": return {"tooltip": DamageText("Ceramic", initialDamage, baseDamage)};
        case "Crit": return {"tooltip": DamageText("Crit", initialDamage, baseDamage)};
        case "Boss": return {"tooltip": DamageText("Boss", initialDamage, baseDamage)};
        case "Lead": return {"tooltip": DamageText("Lead", initialDamage, baseDamage)};
        case "Moab": return {"tooltip": DamageText("Moab", initialDamage, baseDamage)};
        case "Fortified": return {"tooltip": DamageText("Fortified", initialDamage, baseDamage)};
        case "F Lead": return {"tooltip": DamageText("Fortified Lead", initialDamage, baseDamage, extraDamage)};
        case "F MOAB": return {"tooltip": DamageText("Fortified MOAB", initialDamage, baseDamage, extraDamage)};
        case "Status":return {"tooltip": DamageText("Status", initialDamage, baseDamage)};
        case "Stun": return {"tooltip": DamageText("Stun", initialDamage, baseDamage)};
        case "Hotkey": return {"counter": false, "tooltip": <TextTooltip text={`Default keyboard hotkey keybind: ${value}`} />};
        case "Duration": return {"tooltip": <TextTooltip text={`Duration the tower base attack lasts: ${value} seconds. (e.g. Banana Farm passive bananas)`} />, "suffix": "&nbsp;s"};
        case "Footprint": return {"counter": false, "tooltip": <TextTooltip text={`Size the tower takes up on the map: ${value}`} />};
        case "Delay": return {"tooltip": <TextTooltip text={`Delay until the attack occurs: ${value} seconds.`} />, "suffix": "&nbsp;s"};
        case "Income": return {"prefix": "+&nbsp;$", "tooltip": <TextTooltip text={`Money generated per round: +$${value}`} />};
        case "Crit Rate": return {"counter": false, "tooltip": <TextTooltip text={critOccurrenceToText(value)} />};
        case "Cooldown": return {"tooltip": <TextTooltip text={`Cooldown timer: ${value} seconds`} />};
        case "P Impact": return {"tooltip": <TextTooltip text={`Pierce Impact: ${value}`} />};
        case "Slow": return {"tooltip": <TextTooltip text={`Slow is a applied to all bloons: ${value * 100}%`} />};
        case "Max/Round": return {"tooltip": <TextTooltip text={`Max uses per round: ${value}`} />};
        default: return {"tooltip": <TextTooltip text={`Error: ${code} : ${value}`} />};
    }
};

export default function StatItemWrapper({text, value, prevValue, initialDamage, baseDamage, extraDamage, ...rest}) {

    const codeValue = codeParser(text, value, prevValue, initialDamage, baseDamage, extraDamage);

    return (
        <>
            <StatItem
                text={text}
                value={value}
                prevValue={prevValue}
                tooltip={codeValue.tooltip}
                counter={codeValue.counter}
                prefix={codeValue.prefix}
                suffix={codeValue.suffix}
                decimals={codeValue.decimals}
                {...rest}
            />
        </>
    );
}