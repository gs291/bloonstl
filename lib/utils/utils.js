import siteColors from "./siteColors";
import siteProsCons from "./siteProsCons";


export const font_family = [
        "'Luckiest Guy'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(', ');

export const font_family_default = [
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
].join(', ');

export function getImageUrl( img_filename, upgrade_path, upgrade_tier ) {
    let image_file_path;
    const [filename, ext] = img_filename.split('.');

    if(typeof upgrade_path === "number" && typeof upgrade_tier === "number") {
        image_file_path = `${filename}/${filename}${upgrade_path}${upgrade_tier}.${ext}`;

        return image_file_path;
    }

    image_file_path = `${filename}/${img_filename}`;
    return image_file_path;
}

export const getMonkeyColor = (type, darkMode, tier, card = false, hover = false) => {
    if (tier){
        return getTierCardColor(tier, darkMode, hover);
    }

    switch(type) {
        case "Primary":
            return (
                card
                    ? (hover
                        ? (darkMode ? siteColors.monkeyType.primary.hover.dark : siteColors.monkeyType.primary.hover.light)
                        : (darkMode ? siteColors.monkeyType.primary.card.dark : siteColors.monkeyType.primary.card.light)
                    )
                    : siteColors.monkeyType.primary.color
            );
        case "Military":
            return (
                card
                    ? (hover
                        ? (darkMode ? siteColors.monkeyType.military.hover.dark : siteColors.monkeyType.military.hover.light)
                        : (darkMode ? siteColors.monkeyType.military.card.dark : siteColors.monkeyType.military.card.light)
                    )
                    : siteColors.monkeyType.military.color
            );
        case "Magic":
            return (
                card
                    ? (hover
                        ? (darkMode ? siteColors.monkeyType.magic.hover.dark : siteColors.monkeyType.magic.hover.light)
                        : (darkMode ? siteColors.monkeyType.magic.card.dark : siteColors.monkeyType.magic.card.light)
                    )
                    : siteColors.monkeyType.magic.color
            );
        default:
            return (
                card
                    ? (hover
                        ? (darkMode ? siteColors.monkeyType.support.hover.dark : siteColors.monkeyType.support.hover.light)
                        : (darkMode ? siteColors.monkeyType.support.card.dark : siteColors.monkeyType.support.card.light)
                    )
                    : siteColors.monkeyType.support.color
            );
    }
}

export const getHeroColor = (heroName, darkMode, tier, card = false, hover = false) => {
    if (tier){
        return getTierCardColor(tier, darkMode, hover);
    } else if(card) {
        return hover
            ? (darkMode ? siteColors.heroes.hover.dark : siteColors.heroes.hover.light)
            : (darkMode ? siteColors.heroes.card.dark : siteColors.heroes.card.light);
    }

    switch(heroName) {
        case "Quincy":
            return siteColors.hero.quincy.color;
        case "Gwendolin":
            return siteColors.hero.gwendolin.color;
        case "Striker Jones":
            return siteColors.hero.strikerJones.color;
        case "Obyn Greenfoot":
            return siteColors.hero.obynGreenfoot.color;
        case "Sauda":
            return siteColors.hero.sauda.color;
        case "Captain Churchill":
            return siteColors.hero.captainChurchill.color;
        case "Benjamin":
            return siteColors.hero.benjamin.color;
        case "Ezili":
            return siteColors.hero.ezili.color;
        case "Pat Fusty":
            return siteColors.hero.patFusty.color;
        case "Adora":
            return siteColors.hero.adora.color;
        case "Admiral Brickell":
            return siteColors.hero.admiralBrickell.color;
        default:
            return siteColors.hero.psi.color;
    }
}

export const getTierCardColor = (tier, darkMode, hover) => {
    switch(tier){
        case "s":
            return hover
                ? (darkMode ? siteColors.tier.s.hover.dark : siteColors.tier.s.hover.light)
                : (darkMode ? siteColors.tier.s.card.dark : siteColors.tier.s.card.light);
        case "a":
            return hover
                ? (darkMode ? siteColors.tier.a.hover.dark : siteColors.tier.a.hover.light)
                : (darkMode ? siteColors.tier.a.card.dark : siteColors.tier.a.card.light);
        case "b":
            return hover
                ? (darkMode ? siteColors.tier.b.hover.dark : siteColors.tier.b.hover.light)
                : (darkMode ? siteColors.tier.b.card.dark : siteColors.tier.b.card.light);
        default:
            return hover
                ? (darkMode ? siteColors.tier.c.hover.dark : siteColors.tier.c.hover.light)
                : (darkMode ? siteColors.tier.c.card.dark : siteColors.tier.c.card.light);
    }
}

export const getTierColor = (tier, selected) => {
    switch(tier){
        case "s": return selected ? siteColors.tier.s.selected :  siteColors.tier.s.color;
        case "a": return selected ? siteColors.tier.a.selected :  siteColors.tier.a.color;
        case "b":  return selected ? siteColors.tier.b.selected :  siteColors.tier.b.color;
        default:  return selected ? siteColors.tier.c.selected :  siteColors.tier.c.color;
    }
}

export const getThousandsNumber = (number) =>
    number
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Convert to string with thousands separated

export const goldCost = (gold, difficulty) => {
    let goldCost;
    switch (difficulty) {
        case "easy":
            goldCost = gold * 0.85;
            break;
        case "hard":
            goldCost = gold * 1.08;
            break;
        case "impoppable":
            goldCost = gold * 1.20;
            break;
        default:
            goldCost = gold;
            break;
    }

    goldCost = Math.round(goldCost/5) * 5; // Round to the nearest 5

    return goldCost;
}

export const getTowerLink = (tower) => tower && tower.replace(/\s/g, '-').toLowerCase();

export const parseTowerLink = (link) => link &&
    link
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

export const parseProsCons = (prosCons) => prosCons.split(',').map(pc => siteProsCons[pc]);

export const rgbaHex = (hex, opacity) => `rgba(${hexToRgb(hex)}, ${opacity})`;

export const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null;
}

export const getTowerType = (type) => {
    switch(type) {
        case "Primary":
        case "Military":
        case "Magic":
        case "Support":
            return "monkey";
        default:
            return "hero";
    }
}

export const getStatAttributeText = (text) => text &&
    text
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

export const fetchAPI = async (query, variables, controller, ignore, setProgress) => {
    let responseBody = {};

    if (setProgress) {
        setProgress(prg => ({
            ...prg,
            isLoading: true,
            isError: false,
            errorMessages: []
        }));
    }

    try {
        const res = await fetch(
            `${window.location.protocol}//${window.location.host}/api/graphql`,
            {
                signal: controller.signal,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: variables
                })
            }
        );
        responseBody = await res.json();

        // check if response has error messages
        if (responseBody && responseBody.errors) {
            if (setProgress) {
                setProgress(prg => ({
                    ...prg,
                    isLoading: false,
                    isError: true,
                    errorMessages: responseBody.errors
                }));
            }
        }
    } catch (e) {
        if (e instanceof DOMException) {
            console.log("Request aborted");
        } else {
            if (setProgress) {
                setProgress(prg => ({
                    ...prg,
                    isLoading: false,
                    isError: true,
                    errorMessages: [{ "message": `${e.name}: ${e.message}`}]
                }));
            }
        }
    }

    if (!ignore.ignore) {
        if (setProgress) {
            setProgress(prg => ({
                ...prg,
                isLoading: false,
                isError: false
            }));
        }

        return responseBody;
    }
};

export const checkIfValidPath = ({top_path, middle_path, bottom_path}) => {
    if ((top_path > 0 && top_path < 3) && (middle_path > 0 && middle_path < 3) && (bottom_path > 0 && bottom_path < 3)) {
        return {"err": "Bottom path not allowed"}
    }

    // Keeps all paths to BTD 6 X-X-X format
    // (i.e 5-X-0, 5-0-X, X-5-0, 0-5-X, X-0-5, 0-X-5)
    if (top_path > 2) {
        if (middle_path > 0) {
            if (middle_path > 2) { return {"err": "Middle path too high"} }
            if (bottom_path !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottom_path > 0) {
            if (bottom_path > 2) { return {"err": "Bottom path too high"} }
            if (middle_path !== 0) { return {"err": "Middle path not allowed"} }
        }
    }
    if (middle_path > 2) {
        if (top_path > 0) {
            if (top_path > 2) { return {"err": "Top path too high"} }
            if (bottom_path !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottom_path > 0) {
            if (bottom_path > 2) { return {"err": "Bottom path too high"} }
            if (top_path !== 0) { return {"err": "Top path not allowed"} }
        }
    }
    if (bottom_path > 2) {
        if (top_path > 0) {
            if (top_path > 2) { return {"err": "Top path too high"} }
            if (middle_path !== 0) { return {"err": "Middle path not allowed"} }
        } else if (middle_path > 0) {
            if (middle_path > 2) { return {"err": "Middle path too high"} }
            if (top_path !== 0) { return {"err": "Top path not allowed"}}
        }
    }
}

export const getMonkeyAbilityParseOrder = (tiers) => {
    if (tiers.top_path >= tiers.middle_path && tiers.middle_path >= tiers.bottom_path) { // 5-2-0
        return [0, 5, 10];
    }
    if (tiers.top_path >= tiers.bottom_path && tiers.bottom_path >= tiers.middle_path) { // 5-0-2
        return [0, 10, 5];
    }
    if (tiers.middle_path >= tiers.top_path && tiers.top_path >= tiers.bottom_path) { // 2-5-0
        return [5, 0, 10];
    }
    if (tiers.middle_path >= tiers.bottom_path && tiers.bottom_path >= tiers.top_path) { // 0-5-2
        return [5, 10, 0];
    }
    if (tiers.bottom_path >= tiers.top_path && tiers.top_path >= tiers.middle_path) { // 2-0-5
        return [10, 0, 5];
    }
    if (tiers.bottom_path >= tiers.middle_path && tiers.middle_path >= tiers.top_path) { // 0-2-5
        return [10, 5, 0];
    }
};

const copyObject = (obj) => JSON.parse(JSON.stringify(obj));

const towerStatsAttributeNames = {
    "r": "range",
    "p": "pierce",
    "d": "damage",
    "bd": "boss_damage",
    "md": "moab_damage",
    "fmd": "fortified_moab_damage",
    "cd": "ceramic_damage",
    "cmd": "camo_damage",
    "dc": "crit_damage",
    "fd": "fortified_damage",
    "ld": "lead_damage",
    "fld": "fortified_lead_damage",
    "sd": "stun_damage",
    "std": "status_damage",
    "j": "projectile_count",
    "s": "attack_speed",
    "mon": "income",
    "dur": "duration",
    "clt": "cooldown",
    "co": "crit_occurance",
    "del": "delay",
    "mpr": "max_per_round",
    "slow": "slow",
    "i": "pierce_impact",
}

const tempInitialTowerStats = (stats) => {
    if (!stats) {
        stats = {
            "range": 0,
            "pierce": 0,
            "damage": 0,
            "boss_damage": 0,
            "moab_damage": 0,
            "fortified_moab_damage": 0,
            "ceramic_damage": 0,
            "camo_damage": 0,
            "crit_damage": 0,
            "stun_damage": 0,
            "status_damage": 0,
            "fortified_damage": 0,
            "lead_damage": 0,
            "fortified_lead_damage": 0,
            "projectile_count": 1,
            "attack_speed": 1,
            "income": 0,
            "duration": 0,
            "cooldown": 0,
            "crit_occurance": "0~0",
            "delay": 0,
            "note": null,
            "footprint": 0,
            "hotkey": "",
            "damage_type": "",
            "slow": 0,
            "max_per_round": 0,
            "pierce_impact": 0
        }
    }

    if (typeof stats.slow !== "number") { stats.slow = 0; }
    if (typeof stats.pierce_impact !== "number") { stats.pierce_impact = 0; }
    if (typeof stats.max_per_round !== "number") { stats.max_per_round = 0; }

    return {
        "cost": 0,
        "description": "",
        "defaults": stats,
        "modifiers": stats,
        "statuses": {},
        "attacks": {},
        "buffs": {},
        "abils": {},
        "targets": [],
        "notes": []
    };
};

export const getInitialTowerStats = (stats) => {
    const tempStats = tempInitialTowerStats(stats);

    return copyObject(tempStats);
};

export const parseAbilityModifiers = (modifiers, tiers, stats, parseTooltip = false, level = 1) => {
    const split = level === 1
        ? ','
        : level === 2
            ? ';'
            : level === 3 ? '=' : '@';
    modifiers = modifiers.split(split);

    const parsed = [];

    let i = 0;
    for (i; i < modifiers.length; i++) {
        const mod = parseModifier(modifiers[i], tiers, stats, parseTooltip, level)
        if (mod) { parsed.push(mod); }
    }
    return parsed;
}


const parseModifier = (modifier, tiers, stats, parseTooltip, level) => {
    // Matches for Critical Occurrence (e.g. X~Xco)
    let parsed = modifier.match(/^(\d*~\d*)(\w*)/);
    if (parsed) {
        const attributeName = towerStatsAttributeNames[parsed[2]];
        if(attributeName) {
            if (parseTooltip) { return {"text": `${getStatAttributeText(attributeName)} - ${parsed[1]}`}; }

            stats.modifiers[attributeName] = parsed[1];
        }
        return;
    }

    // Matches for math usages (e.g. '-4.50', or '+1')
    parsed = modifier.match(/^([\+\-\*])?([0-9]+\.?[0-9]*|\.[0-9]+)(%)?(\w*)/);
    if (parsed) {
        const attributeName = towerStatsAttributeNames[parsed[4]];
        if (attributeName) {
            let num;
            if (parsed[3]) {
                num = parseFloat(parsed[2]) / 100.0;
            } else {
                num = parseFloat(parsed[2]);
            }

            if (parseTooltip) { return { "text": `${parsed[1] !== undefined ? `${parsed[1]} ` : ""}${parsed[2]}${parsed[3] !== undefined ? `${parsed[3]} ` : " "}${getStatAttributeText(attributeName)}`}; }

            if (!stats.modifiers[attributeName]) {
                stats.modifiers[attributeName] = 0;
            }

            if (parsed[1] === '+') {
                stats.modifiers[attributeName] = stats.modifiers[attributeName] + num;
            } else if (parsed[1] === '-') {
                stats.modifiers[attributeName] = stats.modifiers[attributeName] - num;
            } else if (parsed[1] === '*') {
                stats.modifiers[attributeName] = num * stats.modifiers[attributeName];
            } else {
                stats.modifiers[attributeName] = num;
            }
        } else {
            console.log(`(${level}):` ,modifier, parsed)
            console.log("ERROR: missing tower stats code:", `-${parsed[4]}--${typeof parsed[4]}-`)
        }

        return;
    }

    // Matches for + or - targets (e.g. '-moab', or '+decamo')
    parsed = modifier.match(/^([\+\-])(\w*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `${parsed[1]} ${parsed[2]}` }; }
        stats.targets.push({"isPro": parsed[1] === "+", "code": parsed[2]}); return;
    }

    // Matches for notes (e.g. 'note:TEXT' TEXT does not contain any terminating characters such as , ; = %)
    parsed = modifier.match(/^note:(.*)/);
    if(parsed && parsed[1]) {
        if (parseTooltip) { return { "text": `note: ${parsed[1]}` }; }
        stats.notes.push(parsed[1]); return;
    }

    // Matches for description (e.g. 'desc:TEXT' TEXT does not contain any terminating characters such as , ; = %)
    parsed = modifier.match(/^desc:(.*)/);
    if(parsed && parsed[1]) {
        if (parseTooltip) { return; }
        stats.description = parsed[1]; return;
    }

    // Matches for damage type (e.g. 'type:sharp')
    parsed = modifier.match(/^type:(\w*)/);
    if(parsed && parsed[1]) {
        if (parseTooltip) { return { "text": `Change type to: ${parsed[1]}` }; }
        stats.modifiers.damage_type = parsed[1]; return;
    }

    // Matches for cross paths (e.g. 'cross:XXX:MODIFIERS' where XXX is an ability path X-X-X)
    parsed = modifier.match(/^cross:([0-9])([0-9])([0-9]):(.*)/);
    if(parsed && parsed[1] && parsed[2] && parsed[3]) {
        if (parseTooltip) { return { "text": `Cross with ${parsed[1]}-${parsed[2]}-${parsed[3]} (or higher)`, "more": parseAbilityModifiers(parsed[4], tiers, stats, true, level + 1) }; }

        if (tiers.top_path >= parseInt(parsed[1]) && tiers.middle_path >= parseInt(parsed[2]) && tiers.bottom_path >= parseInt(parsed[3])) {
            if (parsed[4]) {
                parseAbilityModifiers(parsed[4], tiers, stats, level + 1);
            }
        }
        return;
    }

    const parseRecursive = (statsExtra, name, modifiers) => {
        if (statsExtra[name]) {
            parseAbilityModifiers(modifiers, tiers, statsExtra[name], parseTooltip, level + 1);
        } else {
            const tempStats = getInitialTowerStats();
            parseAbilityModifiers(modifiers, tiers, tempStats, parseTooltip, level + 1);

            statsExtra[name] = tempStats;
        }
    };

    // Matches for abilities (e.g. 'abil:NAME:MODIFIERS')
    parsed = modifier.match(/^abil:(\w*):(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Ability: ${getStatAttributeText(parsed[1])}`, "more": parseAbilityModifiers(parsed[2], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.abils, parsed[1], parsed[2]); return;
    }

    // Matches for statuses (e.g. 'status:NAME:MODIFIERS')
    parsed = modifier.match(/^status:(\w*):(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Status: ${getStatAttributeText(parsed[1])}`, "more": parseAbilityModifiers(parsed[2], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.statuses, parsed[1], parsed[2]); return;
    }

    // Matches for attacks (e.g. 'attack:NAME:MODIFIERS')
    parsed = modifier.match(/^attack:(\w*):(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Attack: ${getStatAttributeText(parsed[1])}`, "more": parseAbilityModifiers(parsed[2], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.attacks, parsed[1], parsed[2]); return;
    }

    // Matches for buffs (e.g. 'buff:NAME:MODIFIERS')
    parsed = modifier.match(/^buff:(\w*):(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Update Buff: ${getStatAttributeText(parsed[1])}`, "more": parseAbilityModifiers(parsed[2], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.buffs, parsed[1], parsed[2]); return;
    }

    console.log(`(${level}):` ,"missed:", modifier);
};


