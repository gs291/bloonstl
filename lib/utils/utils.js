import siteProsCons from "./siteProsCons";

export const font_family = [
        "'Luckiest Guy'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(', ');

export const font_family_default = [
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
].join(', ');

export const MAX_STAT_VALUE = 100000000;

/**
 * Get the Cloudinary image url
 *
 * @param {string} img_filename Source image filename
 * @param {number|null} upgrade_path Ability upgrade path
 * @param {number|null} upgrade_tier Ability upgrade path tier
 *
 * @return {string} Image file path
 */
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

/**
 * Get the monkey color
 *
 * @param {string} type Monkey type
 * @param {Object} theme MUI 5 theme for the project
 * @param {boolean} [card=false] Shows if the monkey card color should be returned
 * @param {boolean} [hover=false] Shows if the monkey hover color should be returned
 *
 * @return {string} Monkey HEX color code
 */
export const getMonkeyColor = (type, theme, card = false, hover = false) => {
    switch(type) {
        case "Primary":
            return (
                card
                    ? (hover ? theme.palette.tower.type.primary.hover : theme.palette.tower.type.primary.card)
                    : theme.palette.tower.type.primary.color
            );
        case "Military":
            return (
                card
                    ? (hover ? theme.palette.tower.type.military.hover : theme.palette.tower.type.military.card)
                    : theme.palette.tower.type.military.color
            );
        case "Magic":
            return (
                card
                    ? (hover ? theme.palette.tower.type.magic.hover : theme.palette.tower.type.magic.card)
                    : theme.palette.tower.type.magic.color
            );
        default:
            return (
                card
                    ? (hover ? theme.palette.tower.type.support.hover : theme.palette.tower.type.support.card)
                    : theme.palette.tower.type.support.color
            );
    }
}

/**
 * Get the hero color
 *
 * @param {string} heroName Hero name
 * @param {Object} theme MUI 5 theme for the project
 * @param {boolean} [card=false] Shows if the hero card color should be returned
 * @param {boolean} [hover=false] Shows if the hero hover color should be returned
 *
 * @return {string} Hero HEX color code
 */
export const getHeroColor = (heroName, theme, card = false, hover = false) => {
    if(card) {
        return hover ? theme.palette.tower.type.heroes.hover : theme.palette.tower.type.heroes.card;
    }

    switch(heroName) {
        case "Quincy":
            return theme.palette.tower.hero.quincy.color;
        case "Gwendolin":
            return theme.palette.tower.hero.gwendolin.color;
        case "Striker Jones":
            return theme.palette.tower.hero.strikerJones.color;
        case "Obyn Greenfoot":
            return theme.palette.tower.hero.obynGreenfoot.color;
        case "Sauda":
            return theme.palette.tower.hero.sauda.color;
        case "Captain Churchill":
            return theme.palette.tower.hero.captainChurchill.color;
        case "Benjamin":
            return theme.palette.tower.hero.benjamin.color;
        case "Ezili":
            return theme.palette.tower.hero.ezili.color;
        case "Pat Fusty":
            return theme.palette.tower.hero.patFusty.color;
        case "Adora":
            return theme.palette.tower.hero.adora.color;
        case "Admiral Brickell":
            return theme.palette.tower.hero.admiralBrickell.color;
        case "Etienne":
            return theme.palette.tower.hero.etienne.color;
        case "Psi":
            return theme.palette.tower.hero.psi.color;
        default:
            return theme.palette.tower.hero.geraldo.color;
    }
}

/**
 * Get the bloon name from the varName
 */
export const getBloonName = {
    "red": "Red Bloon",
    "blue": "Blue Bloon",
    "grn": "Green Bloon",
    "ylw": "Yellow Bloon",
    "pink": "Pink Bloon",
    "blk": "Black Bloon",
    "wht": "White Bloon",
    "purp": "Purple Bloon",
    "lead": "Lead Bloon",
    "zbr": "Zebra Bloon",
    "rnbw": "Rainbow Bloon",
    "cm": "Ceramic Bloon",
    "moab": "M.O.A.B",
    "bfb": "B.F.B",
    "zomg": "Z.O.M.G",
    "ddt": "D.D.T",
    "bad": "B.A.D",
    "bloonarius": "Bloonarius",
    "lych": "Lych",
    "vortex": "Vortex"
}

/**
 * Get a string number with thousands seperated
 *
 * @param {number} number The number to convert
 *
 * @return {string} Converted number to string with thousands separated
 */
export const getThousandsNumber = (number) =>
    number
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Convert to string with thousands separated

/**
 * Get the in-game gold cost from the in-game difficulty
 *
 * @param {number} gold The in-game gold cost
 * @param {string} [difficulty="medium"] The in-game difficulty
 *
 * @return {number} Calculated gold cost
 */
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

/**
 * Get a link from a tower name
 *
 * @param {string} tower The name of the tower
 *
 * @return {string} Converted tower name
 */
export const getTowerLink = (tower) => tower && tower.replace(/\s/g, '-').toLowerCase();

/**
 * Convert a tower link into its original name
 *
 * @param {string} link The link to parse
 *
 * @return {string} Converted tower link
 */
export const parseTowerLink = (link) => link &&
    link
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

/**
 * Parse the string pros/cons into their data objects
 *
 * @param {string} prosCons The comma-delimited list of pros/cons
 *
 * @return {Array<Object>} Parsed pros/cons
 */
export const parseProsCons = (prosCons) => prosCons.split(',').map(pc => siteProsCons[pc]);

/**
 * Converts a HEX color code into rgba(...)
 *
 * @param {string} hex The HEX color code
 * @param {number} opacity The opacity applied to rgba(...)
 *
 * @return {string} Converted HEX color code
 */
export const rgbaHex = (hex, opacity) => `rgba(${hexToRgb(hex)}, ${opacity})`;

/**
 * Converts a HEX color code into an RGB color code
 *
 * @param {string} hex The HEX color code
 *
 * @return {string|null} Converted HEX color code
 */
export const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null;
}

/**
 * Get a tower type from its type
 *
 * @param {string} type The monkey type or hero name
 *
 * @return {string} The tower type
 */
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

/**
 * Converts a stat attribute string into a readable string
 *
 * @param {string} text The stat attribute text
 *
 * @return {string} Converted stat attribute text
 */
export const getStatAttributeText = (text) => text &&
    text
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

/**
 * Converts a stat attribute string into a readable string
 *
 * @param {Object} special the special move from the boss
 *
 * @return {string} Converted stat attribute text
 */
export const parseBossSpecial = (special) => {

}

/**
 * Fetch from the GraphQL API
 *
 * @param {string} query The GraphQL query to fetch
 * @param {Object} variables Object of the GraphQL variables
 * @param {AbortController} controller Fetch abort mechanism
 * @param {Object<{ignore: boolean}>} ignore Object reference that ensures data doesn't get set if an error occurs
 * @param {function} setProgress Function to set the state of the fetch progress
 *
 * @return {Object} The response body of the fetch
 */
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
            if (setProgress) {
                setProgress(prg => ({
                    ...prg,
                    isLoading: false,
                    isError: true,
                    errorMessages: [{ "message": `DOMException: Request aborted`}]
                }));
            }
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

/**
 * Checks if a given path is valid for BTD 6 rules
 *
 * @param {Object} path The ability path
 * @param {number} path.top_path The top path number
 * @param {number} path.middle_path The middle= path number
 * @param {number} path.bottom_path The bottom path number
 *
 * @return {Object<{err: string}>|void} Void if a valid path, else an Object with an error message
 */
export const checkIfValidPath = ({top_path, middle_path, bottom_path}) => {
    if (top_path === 5 && middle_path === 5 && bottom_path === 5) {
        return;
    }
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

/**
 * Gets an order for how to parse the ability stats
 *  - This was needed to solve any discrepancies when parsing the stats.
 *  (E.g. Given path 2-5-0. 2-0-0 overrode certain stats from 0-5-0 when 0-5-0 should override 2-0-0)
 *
 * @param {Object<{top_path: number, middle_path: number, bottom_path: number}>} tiers The ability path
 *
 * @return {Array<number>} Array list of the parse order
 */
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

/**
 * Returns a true copied object
 *
 * @param {Object} obj The object to copy
 *
 * @return {Object} The copied object
 */
const copyObject = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Check if there are duplicate pros and cons
 *  - If a con exists as a pro, the con is removed
 *
 * @param {string} pros The comma-delimited pros
 * @param {string} cons The comma-delimited cons
 *
 * @return {Object<{pros: string, cons:string}>} Object of pros and cons
 */
export const checkDuplicateProsCons = (pros, cons) => {
    if (pros === "" || cons === "") { return {pros, cons} }

    let splitCons = cons.split(',');
    splitCons = splitCons.filter(con => {
        return pros.indexOf(con) === -1;
    });

    return {pros, cons: splitCons.join(',')}
}

/**
 * Add to a comma-delimited list if it is missing
 *
 * @param {string} commaList The comma-delimited list
 * @param {string} addCommaList The comma-delimited list to add
 *
 * @return {string} New comma list with the added items
 */
export const concatToStringIfMissing = (commaList, addCommaList) => {
    if (addCommaList === "") { return commaList }

    const newList = addCommaList.split(',');
    newList.forEach(item => {
        if (commaList.indexOf(item) === -1) {
            commaList = commaList.concat(',', item);
        }
    });
    return commaList;
}

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
    "cost": "cost",
    "del": "delay",
    "mpr": "max_per_round",
    "slow": "slow",
    "i": "pierce_impact",
}

/**
 * Creates an initial version of the tower stats
 *
 * @param {Object} stats The initial tower stats
 * @param {Object<{pros: string, cons:string }>} prosCons The pros and cons object
 *
 * @return {Object} Object of the initial tower stats
 */
const tempInitialTowerStats = (stats, {pros, cons}) => {
    const defaultStats = {
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
        "attack_speed": 0,
        "income": 0,
        "cost": 0,
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

    return {
        "cost": 0,
        "xp": 0,
        "description": "",
        "defaults": {...defaultStats, ...stats},
        "modifiers": {...defaultStats, ...stats},
        "pros": pros,
        "cons": cons,
        "statuses": {},
        "attacks": {},
        "buffs": {},
        "abils": {},
        "targets": [],
        "notes": []
    };
};

/**
 * Gets an initial version of the tower stats
 *
 * @param {Object} [stats] The initial tower stats
 * @param {Object<{pros: string, cons:string }>} [proCons=Object] The pros and cons object
 *
 * @return {Object} Object of the tower stats
 */
export const getInitialTowerStats = (stats, proCons = {pros: "", cons: ""}) => {
    const tempStats = tempInitialTowerStats(stats, proCons);

    return copyObject(tempStats);
};

/**
 * Parse the ability modifiers based on the ability path
 *
 * @param {string|Array} modifiers The multi-delimited list of modifiers
 * @param {Object} tiers The ability path
 * @param {Object} stats The tower stats object
 * @param {boolean} [parseTooltip=false] Shows if the parsing should only return tooltip texts' or not
 * @param {number} [level=1] The recursive parse level
 *
 * @return {Array} Array list of parsed modifiers
 */
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

/**
 * Regex parse the ability modifier
 *  - Sets the stats object if not parsing tooltips
 *
 * @param {string|Array} modifier The individual modifier
 * @param {Object} tiers The ability path
 * @param {Object} stats The tower stats object
 * @param {boolean} parseTooltip Shows if the parsing should only return tooltip texts' or not
 * @param {number} level The recursive parse level
 *
 * @return {Object|Void} Void if not parsing the tooltip text, else an object for the tooltip
 */
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

    // Matches for math usages (e.g. '-4.50', or '|$1r')
    parsed = modifier.match(/^(\|)?([\+\-\*\$])?([0-9]+\.?[0-9]*|\.[0-9]+)(%)?(\w*)/);
    if (parsed) {
        const attributeName = towerStatsAttributeNames[parsed[5]];
        if (attributeName) {
            let num;
            if (parsed[2] === '$') {
                num = 110000000;
            } else if (parsed[4]) {
                num = parseFloat(parsed[3]) / 100.0;
            } else {
                num = parseFloat(parsed[3]);
            }

            if (parseTooltip) {
                return {
                    "text": `${(parsed[2] !== undefined) 
                        ? `${parsed[2] === '$' ? `∞ ` : parsed[2]} `
                        : ""}${parsed[2] !== '$' ? parsed[3] : ''}${parsed[4] !== undefined ? `${parsed[4]} ` : ' '}${getStatAttributeText(attributeName)}`
                };
            }

            if (!stats.modifiers[attributeName]) {
                stats.modifiers[attributeName] = 0;
            }

            if (parsed[2] === '+') {
                stats.modifiers[attributeName] = stats.modifiers[attributeName] + num;
            } else if (parsed[2] === '-') {
                stats.modifiers[attributeName] = stats.modifiers[attributeName] - num;
            } else if (parsed[2] === '*') {
                stats.modifiers[attributeName] = num * stats.modifiers[attributeName];
            } else {
                stats.modifiers[attributeName] = num;
                if (parsed[1] === '|') {
                    stats.defaults[attributeName] = num;
                }
            }
        }

        return;
    }

    // Matches for + or - targets (e.g. '-moab', or '+decamo')
    parsed = modifier.match(/^([\+\-])(\w*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `${parsed[1]} ${parsed[2]}` }; }

        let i = 0; // Check if the target already exists
        for (i; i < stats.targets.length; i++) {
            if (stats.targets[i].code === parsed[2]) {
                stats.targets[i].isPro = parsed[1] === "+";
                return;
            }
        }

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
    parsed = modifier.match(/^type:(\|)?(\w*)/);
    if(parsed && parsed[2]) {
        if (parseTooltip) { return { "text": `Change type to: ${parsed[2]}` }; }
        stats.modifiers.damage_type = parsed[2];
        if (parsed[1]) {
            stats.defaults.damage_type = parsed[2];
        }
        return;
    }

    // Matches for cross paths (e.g. 'cross:XXX:MODIFIERS' where XXX is an ability path X-X-X)
    parsed = modifier.match(/^cross:([0-9])([0-9])([0-9]):(.*)/);
    if(parsed && parsed[1] && parsed[2] && parsed[3]) {
        if (parseTooltip) { return { "text": `Cross with ${parsed[1]}-${parsed[2]}-${parsed[3]} (or higher)`, "more": parseAbilityModifiers(parsed[4], tiers, stats, true, level + 1) }; }

        // The === 5 is so cross paths do not overlap with paragons
        if (!(tiers.top_path === 5 && tiers.middle_path === 5 && tiers.bottom_path === 5)
            && tiers.top_path >= parseInt(parsed[1])
            && tiers.middle_path >= parseInt(parsed[2])
            && tiers.bottom_path >= parseInt(parsed[3])) {
            if (parsed[4]) {
                parseAbilityModifiers(parsed[4], tiers, stats, parseTooltip, level + 1);
            }
        }
        return;
    }

    const parseRecursive = (statsExtra, name, howToUse, newName, modifiers) => {
        if (statsExtra[name]) {
            if (howToUse === '-' && newName) {
                statsExtra[newName] = copyObject(statsExtra[name]);
                delete statsExtra[name];
                name = newName;
            }
            parseAbilityModifiers(modifiers, tiers, statsExtra[name], parseTooltip, level + 1);
        } else if (howToUse === '|' && statsExtra[newName]) {
            parseAbilityModifiers(modifiers, tiers, statsExtra[newName], parseTooltip, level + 1);
        } else {
            const tempStats = getInitialTowerStats();
            parseAbilityModifiers(modifiers, tiers, tempStats, parseTooltip, level + 1);

            statsExtra[name] = tempStats;
        }
    };


    // Matches for abilities (e.g. 'abil:NAME-NEWNAME:MODIFIERS')
    parsed = modifier.match(/^abil:(\w*)(([-\|])(\w*))?:(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Ability: ${getStatAttributeText(parsed[1])}${parsed[3] === '|' ? ` (or named ${getStatAttributeText(parsed[4])})` : ''}${parsed[3] === '-' ? ` -> ${getStatAttributeText(parsed[4])}` : ''}`, "more": parseAbilityModifiers(parsed[5], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.abils, parsed[1], parsed[3], parsed[4], parsed[5]); return;
    }

    // Matches for statuses (e.g. 'status:NAME|NEWNAME:MODIFIERS')
    parsed = modifier.match(/^status:(\w*)(([-\|])(\w*))?:(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Status: ${getStatAttributeText(parsed[1])}${parsed[3] === '|' ? ` (or named ${getStatAttributeText(parsed[4])})` : ''}${parsed[3] === '-' ? ` -> ${getStatAttributeText(parsed[4])}` : ''}`, "more": parseAbilityModifiers(parsed[5], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.statuses, parsed[1], parsed[3], parsed[4], parsed[5]); return;
    }

    // Matches for attacks (e.g. 'attack:NAME|NEWNAME:MODIFIERS')
    parsed = modifier.match(/^attack:(\w*)(([-\|])(\w*))?:(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Buff Attack: ${getStatAttributeText(parsed[1])}${parsed[3] === '|' ? ` (or named ${getStatAttributeText(parsed[4])})` : ''}${parsed[3] === '-' ? ` -> ${getStatAttributeText(parsed[4])}` : ''}`, "more": parseAbilityModifiers(parsed[5], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.attacks, parsed[1], parsed[3], parsed[4], parsed[5]); return;
    }

    // Matches for buffs (e.g. 'buff:NAME-NEWNAME:MODIFIERS')
    parsed = modifier.match(/^buff:(\w*)(([-\|])(\w*))?:(.*)/);
    if(parsed) {
        if (parseTooltip) { return { "text": `Gain/Update Buff: ${getStatAttributeText(parsed[1])}${parsed[3] === '|' ? ` (or named ${getStatAttributeText(parsed[4])})` : ''}${parsed[3] === '-' ? ` -> ${getStatAttributeText(parsed[4])}` : ''}`, "more": parseAbilityModifiers(parsed[5], tiers, stats, true, level + 1) }; }
        parseRecursive(stats.buffs, parsed[1], parsed[3], parsed[4], parsed[5]); return;
    }
};


