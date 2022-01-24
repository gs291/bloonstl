import StatItem from "./StatItem";
import TextTooltip from "../tooltip/TextTooltip";
import TypesTooltip from "../tooltip/TypesTooltip";
import DamageTooltip from "../tooltip/DamageTooltip";
import {SELECT_CONTENT_STAT, STAT_PREFIX, ga4SendSelectContent} from "../../lib/utils/ga4";

const codeParser = (code, value, prevValue, initialDamage = 0, baseDamage = 0, extraDamage = 0) => {
    switch(code) {
        case "Damage": return {"tooltip": <TextTooltip title="Damage" text={`Damage is the amount of health a single hit of an attack removes.`} value={value} prevValue={prevValue} />};
        case "Pierce": return {"tooltip": <TextTooltip title="Pierce" text={`Pierce (a.k.a Popping Power) is the number of different targets a single projectile can hit.`} value={value} prevValue={prevValue} />};
        case "Range": return {"tooltip": <TextTooltip title="Range" text={`Range is the radius of the targetable area.`} value={value} prevValue={prevValue} />};
        case "Atk Spd": return {"lowerIsBuff": true, "decimals": 3,"tooltip": <TextTooltip title="Attack Speed" text={`Attack Speed (a.k.a Reload time) is the number of seconds between attacks.`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Proj": return {"tooltip": <TextTooltip title="Projectiles" text={`Projectile count is the number of projectiles emitted at once.`} value={value} prevValue={prevValue} />};
        case "Type": return {"counter": false, "tooltip": <TypesTooltip type={value} prevType={prevValue} />};
        case "Camo": return {"tooltip": <DamageTooltip type="Camo" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Ceramic": return {"tooltip": <DamageTooltip type="Ceramic" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Crit": return {"tooltip": <DamageTooltip type="Critical" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Boss": return {"tooltip": <DamageTooltip type="Boss" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Lead": return {"tooltip": <DamageTooltip type="Lead" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Moab": return {"tooltip": <DamageTooltip type="Moab" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Fortified": return {"tooltip": <DamageTooltip type="Fortified" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "F Lead": return {"tooltip": <DamageTooltip type="Fortified Lead" typeDamage={initialDamage} baseDamage={baseDamage} extraDamage={extraDamage} />};
        case "F MOAB": return {"tooltip": <DamageTooltip type="Fortified MOAB" typeDamage={initialDamage} baseDamage={baseDamage} extraDamage={extraDamage} />};
        case "Status":return {"tooltip": <DamageTooltip type="Status" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Stun": return {"tooltip": <DamageTooltip type="Stun" typeDamage={initialDamage} baseDamage={baseDamage} />};
        case "Hotkey": return {"counter": false, "tooltip": <TextTooltip title="Default Hotkey" text={`Default keyboard hotkey keybind: ${value}`} />};
        case "Duration": return {"tooltip": <TextTooltip title="Duration" text={`Duration the tower base attack lasts in seconds. (e.g. Banana Farm passive bananas)`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Footprint": return {"counter": false, "tooltip": <TextTooltip title="Map Footprint" text={`Size the tower takes up on the map: ${value}`} />};
        case "Delay": return {"lowerIsBuff": true, "tooltip": <TextTooltip title="Delay" text={`Delay until the attack occurs in seconds`} value={value} prevValue={prevValue} />, "suffix": "&nbsp;s"};
        case "Income": return {"prefix": "+&nbsp;$", "tooltip": <TextTooltip title="Income" text={`Money generated per/each round`} value={value} prevValue={prevValue} />};
        case "Crit Rate": return {"counter": false, "tooltip": <TextTooltip title="Critical Occurrence" text={`Critical damage occurs every ${value} shots (where '~' is referred as 'to') `} />};
        case "Cooldown": return {"lowerIsBuff": true, "tooltip": <TextTooltip title="Cooldown" text={`Cooldown timer: ${value} seconds`} value={value} prevValue={prevValue} />};
        case "P Impact": return {"tooltip": <TextTooltip title="Pierce Impact" text={`Pierce Impact: ${value}`} value={value} prevValue={prevValue}/>};
        case "Slow": return {"tooltip": <TextTooltip title="Slow" text={`Slow is a applied to all bloons: ${value * 100}%`} value={value} prevValue={prevValue} />};
        case "Max/Round": return {"tooltip": <TextTooltip title="Max per Round" text={`Max uses per round: ${value}`} value={value} prevValue={prevValue} />};
        default: return {"tooltip": <TextTooltip text={`Error: ${code} : ${value}`} />};
    }
};


const GA4_STAT_ITEM_ID = "STAT_ITEM";
export default function StatItemWrapper({text, value, prevValue, initialDamage, baseDamage, extraDamage, ...rest}) {

    const codeValue = codeParser(text, value, prevValue, initialDamage, baseDamage, extraDamage);

    const handleClick = () => ga4SendSelectContent(SELECT_CONTENT_STAT, {
        item_id: `${STAT_PREFIX}${GA4_STAT_ITEM_ID}`,
        stat: text
    });

    return (
        <>
            <StatItem
                text={text}
                value={value}
                prevValue={prevValue}
                {...codeValue}
                {...rest}
            />
        </>
    );
}