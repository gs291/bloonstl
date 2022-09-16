import StatItem from "./StatItem";
import TextTooltip from "../tooltip/TextTooltip";
import TypesTooltip from "../tooltip/TypesTooltip";
import DamageTooltip from "../tooltip/DamageTooltip";


/**
 * Get an object containing all the necessary data about the statistic
 *
 * @param {string} code Component props
 * @param {number|string} value The number or string for the statistics
 * @param {number} prevValue The previous value number to compare to {value}
 * @param {number} [initialDamage=0] The initial damage done by the statistic
 * @param {number} [baseDamage=0] The base damage done by the statistic
 * @param {number} [extraDamage=0] The extra damage done by the statistic
 *
 * @return {Object} An object containing all the necessary data about the statistic
 */
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
        case "MOAB": return {"tooltip": <DamageTooltip type="MOAB" typeDamage={initialDamage} baseDamage={baseDamage} />};
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
        case "Cost": return {"lowerIsBuff": true, "prefix": "$", "tooltip": <TextTooltip title="Cost" text={`Cost of this ability`} value={value} prevValue={prevValue} />};
        case "Crit Rate": return {"counter": false, "tooltip": <TextTooltip title="Critical Occurrence" text={`Critical damage occurs every ${value} shots (where '~' is referred as 'to') `} />};
        case "Cooldown": return {"lowerIsBuff": true, "tooltip": <TextTooltip title="Cooldown" text={`Cooldown timer: ${value} seconds`} value={value} prevValue={prevValue} />};
        case "P Impact": return {"tooltip": <TextTooltip title="Pierce Impact" text={`Pierce Impact: ${value}`} value={value} prevValue={prevValue}/>};
        case "Slow": return {"tooltip": <TextTooltip title="Slow" text={`Slow is a applied to all bloons: ${value * 100}%`} value={value} prevValue={prevValue} />};
        case "RBE": return {"tooltip": <TextTooltip title="Red Bloon Equivalent" text="Total damage required to completely pop the Bloon" value={value} prevValue={prevValue} />};
        case "HP": return {"tooltip": <TextTooltip title="Health" text="Total damage required to completely pop one layer of the Bloon" value={value} prevValue={prevValue} />};
        case "Speed": return {"tooltip": <TextTooltip title="Speed" text="Bloon track speed" value={value} prevValue={prevValue} />};
        default: return {"tooltip": <TextTooltip text={`Error: ${code} : ${value}`} />};
    }
};


/**
 * The stat item component wrapper
 *
 * @param {Object} props Component props
 * @param {string} props.text Text/Title for the stat item
 * @param {number|string} props.value The number or string for the statistics
 * @param {number} props.prevValue The previous value number to compare to {props.value}
 * @param {number|null} [props.initialDamage=0] The initial damage done by the statistic
 * @param {number|null} [props.baseDamage=0] The base damage done by the statistic
 * @param {number|null} [props.extraDamage=0] The extra damage done by the statistic
 */
export default function StatItemWrapper({text, value, prevValue, initialDamage, baseDamage, extraDamage, ...rest}) {

    const codeValue = codeParser(text, value, prevValue, initialDamage, baseDamage, extraDamage);

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