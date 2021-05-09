import siteColors from "./siteColors";
import siteProsCons from "./siteProsCons";


export const font_family = [
        "'Luckiest Guy'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
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
        default:
            return siteColors.hero.admiralBrickell.color;
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

export const getTierColor = (tier) => {
    switch(tier){
        case "s": return siteColors.tier.s.color;
        case "a": return siteColors.tier.a.color;
        case "b":  return siteColors.tier.b.color;
        default:  return siteColors.tier.c.color;
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

export const getTowerLink = (tower) => tower && tower.replace(' ', '-').toLowerCase();

export const parseTowerLink = (link) => link &&
    link
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

export const parseProsCons = (prosCons) => prosCons.split(',').map(pc => siteProsCons[pc]);

export const parseForm = (form) => {
    let body = {};
    let pros = [], cons = [];
    const prosCons = Object.keys(siteProsCons);

    prosCons.forEach(pro => {
       if (form[`pro-${pro}`].checked){
           pros.push(pro);
       }
    });

    prosCons.forEach(con => {
        if (form[`con-${con}`].checked){
            cons.push(con);
        }
    });


    const topPath = parseInt(form["slider-top"].value);
    const middlePath = parseInt(form["slider-middle"].value);
    const bottomPath = parseInt(form["slider-bottom"].value);
    if (topPath > 0 || middlePath > 0 || bottomPath > 0) {
        if (form["ability-tier"].value === "") {
            return {"err": "Ability path selected yet ability path tier is not"};
        }

        const pathError = formAbilityPathError(topPath, middlePath, bottomPath);

        if (pathError) {
            return pathError;
        }
    }

    if ((pros.length || cons.length) && form["ability-tier"].value === "") {
        return {"err": "Ability pros/cons selected yet ability path tier is not"};
    }

    body.tower = form.tower.value
    body["tower_tier"] = form["tower-tier"].value;

    if (form["ability-tier"].value) {
        body["ability_tier"] = form["ability-tier"].value
        body["ability_top"] =  topPath;
        body["ability_middle"] =  middlePath;
        body["ability_bottom"] =  bottomPath;

        if (pros.length) { body.pros = pros.join(','); }
        if (cons.length) { body.cons = cons.join(','); }
    }

    return body;
}

const formAbilityPathError = (topPath, middlePath, bottomPath) => {
    if ((topPath > 0 && topPath < 3) && (middlePath > 0 && middlePath < 3) && (bottomPath > 0 && bottomPath < 3)) {
        return {"err": "Bottom path not allowed"}
    }

    // Keeps all paths to BTD 6 X-X-X format
    // (i.e 5-X-0, 5-0-X, X-5-0, 0-5-X, X-0-5, 0-X-5)
    if (topPath > 2) {
        if (middlePath > 0) {
            if (middlePath > 2) { return {"err": "Middle path not allowed"} }
            if (bottomPath !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottomPath > 0) {
            if (bottomPath > 2) { return {"err": "Bottom path not allowed"} }
            if (middlePath !== 0) { return {"err": "Middle path not allowed"} }
        }
    }
    if (middlePath > 2) {
        if (topPath > 0) {
            if (topPath > 2) { return {"err": "Top path not allowed"} }
            if (bottomPath !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottomPath > 0) {
            if (bottomPath > 2) { return {"err": "Bottom path not allowed"} }
            if (topPath !== 0) { return {"err": "Top path not allowed"} }
        }
    }
    if (bottomPath > 2) {
        if (topPath > 0) {
            if (topPath > 2) { return {"err": "Middle path not allowed"} }
            if (middlePath !== 0) { return {"err": "Middle path not allowed"} }
        } else if (middlePath > 0) {
            if (middlePath > 2) { return {"err": "Middle path not allowed"} }
            if (topPath !== 0) { return {"err": "Top path not allowed"}}
        }
    }
}

const voteQuery = `
mutation AddVote($vote: Vote!) {
    addVote(vote: $vote) {
        text
    }
}
`;

export const sendVote = async (body, controller, ignore, setProgress) => {
    let responseBody = {};
    setProgress(prg => ({
        ...prg,
        isLoading: true,
        isError: false,
        isSuccess: false
    }));
    console.log("== body:", body);
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
                    query: voteQuery,
                    variables: {
                        vote: body
                    }
                })
            }
        );
        responseBody = await res.json();
        console.log(responseBody);
    } catch (e) {
        if (e instanceof DOMException) {
            console.log("HTTP request aborted");
        } else {
            setProgress(prg => ({...prg, isError: true,}));
            console.log(e);
        }
    }

    if (!ignore) {
        setProgress(prg => ({
            ...prg,
            isLoading: false,
            isSuccess: true
        }));
        console.log("== repos:", responseBody.items);
    }
}

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
