import StatItem from "./StatItem";
import TextTooltip from "../tooltip/TextTooltip";
import TypesTooltip from "../tooltip/TypesTooltip";
import DamageTooltip from "../tooltip/DamageTooltip";
import CritOccurrenceTooltip from "../tooltip/CritOccurrenceTooltip";
import TextWithPreviousTooltip from "../tooltip/TextWithPreviousTooltip";

const codeParser = (code, value, prevValue, initialDamage = 0, baseDamage = 0, extraDamage = 0) => {
    switch(code) {
        case "Damage": return {"tooltip": <TextWithPreviousTooltip text={`Damage is the amount of health a single hit of an attack removes.`} value={value} prevValue={prevValue} />};
        case "Pierce": return {"tooltip": <TextWithPreviousTooltip text={`Pierce (a.k.a Popping Power) is the number of different targets a single projectile can hit.`} value={value} prevValue={prevValue} />};
        case "Range": return {"tooltip": <TextWithPreviousTooltip text={`Range is the radius of the targetable area.`} value={value} prevValue={prevValue} />};
        case "Atk Spd": return {"decimals": 3,"tooltip": <TextWithPreviousTooltip text={`Attack Speed (a.k.a Reload time) is the number of seconds between attacks.`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Projectiles": return {"tooltip": <TextWithPreviousTooltip text={`Projectile Count is the number of projectiles emitted at once.`} value={value} prevValue={prevValue} />};
        case "Type": return {"counter": false, "tooltip": <TypesTooltip type={value} prevType={prevValue} />};
        case "Camo": return {"tooltip": <DamageTooltip type="Camo" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Ceramic": return {"tooltip": <DamageTooltip type="Ceramic" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Crit": return {"tooltip": <DamageTooltip type="Crit" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Boss": return {"tooltip": <DamageTooltip type="Boss" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Lead": return {"tooltip": <DamageTooltip type="Lead" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Moab": return {"tooltip": <DamageTooltip type="Moab" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Fortified": return {"tooltip": <DamageTooltip type="Fortified" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "F Lead": return {"tooltip": <DamageTooltip type="Fortified Lead" typeDamage={initialDamage} baseDamage={baseDamage} extraDamage={extraDamage} />};
        case "F MOAB": return {"tooltip": <DamageTooltip type="Fortified MOAB" typeDamage={initialDamage} baseDamage={baseDamage} extraDamage={extraDamage} />};
        case "Status":return {"tooltip": <DamageTooltip type="Status" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Stun": return {"tooltip": <DamageTooltip type="Stun" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Hotkey": return {"counter": false, "tooltip": <TextTooltip text={`Default keyboard hotkey keybind: ${value}`} variant="body1" />};
        case "Duration": return {"tooltip": <TextWithPreviousTooltip text={`Duration the tower base attack lasts in seconds. (e.g. Banana Farm passive bananas)`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Footprint": return {"counter": false, "tooltip": <TextTooltip text={`Size the tower takes up on the map: ${value}`} variant="body1" />};
        case "Delay": return {"tooltip": <TextWithPreviousTooltip text={`Delay until the attack occurs in seconds`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Income": return {"prefix": "+&nbsp;$", "tooltip": <TextWithPreviousTooltip text={`Money generated per round`} value={value} prevValue={prevValue} />};
        case "Crit Rate": return {"counter": false, "tooltip": <TextTooltip text={<CritOccurrenceTooltip critOccurrence={value} />} variant="body1" />};
        case "Cooldown": return {"tooltip": <TextTooltip text={`Cooldown timer: ${value} seconds`} variant="body1" />};
        case "P Impact": return {"tooltip": <TextTooltip text={`Pierce Impact: ${value}`} variant="body1" />};
        case "Slow": return {"tooltip": <TextTooltip text={`Slow is a applied to all bloons: ${value * 100}%`} variant="body1" />};
        case "Max/Round": return {"tooltip": <TextTooltip text={`Max uses per round: ${value}`} variant="body1" />};
        default: return {"tooltip": <TextTooltip text={`Error: ${code} : ${value}`} variant="body1" />};
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