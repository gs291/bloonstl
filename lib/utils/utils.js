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

export const getMonkeyTypeColor = (type, tier, hover) => {
    if (tier){
        return getTierCardColor(tier, hover);
    }

    switch(type) {
        case "Primary":
            return hover ? siteColors.monkeyType.primary.hover : siteColors.monkeyType.primary.color;
        case "Military":
            return hover ? siteColors.monkeyType.military.hover : siteColors.monkeyType.military.color;
        case "Magic":
            return hover ? siteColors.monkeyType.magic.hover : siteColors.monkeyType.magic.color;
        default:
            return hover ? siteColors.monkeyType.support.hover : siteColors.monkeyType.support.color;
    }
}

export const getHeroColor = (heroName, tier, hover, card) => {
    if (tier){
        return getTierCardColor(tier, hover);
    } else if(card) {
        return hover ? siteColors.heroes.hover : siteColors.heroes.card.dark;
    }

    switch(heroName) {
        case "Quincy":
            return hover ? siteColors.hero.quincy.hover : siteColors.hero.quincy.color;
        case "Gwendolin":
            return hover ? siteColors.hero.gwendolin.hover : siteColors.hero.gwendolin.color;
        case "Striker Jones":
            return hover ? siteColors.hero.strikerJones.hover : siteColors.hero.strikerJones.color;
        case "Obyn Greenfoot":
            return hover ? siteColors.hero.obynGreenfoot.hover : siteColors.hero.obynGreenfoot.color;
        case "Sauda":
            return hover ? siteColors.hero.sauda.hover : siteColors.hero.sauda.color;
        case "Captain Churchill":
            return hover ? siteColors.hero.captainChurchill.hover : siteColors.hero.captainChurchill.color;
        case "Benjamin":
            return hover ? siteColors.hero.benjamin.hover : siteColors.hero.benjamin.color;
        case "Ezili":
            return hover ? siteColors.hero.ezili.hover : siteColors.hero.ezili.color;
        case "Pat Fusty":
            return hover ? siteColors.hero.patFusty.hover : siteColors.hero.patFusty.color;
        case "Adora":
            return hover ? siteColors.hero.adora.hover : siteColors.hero.adora.color;
        default:
            return hover ? siteColors.hero.admiralBrickell.hover : siteColors.hero.admiralBrickell.color;
    }
}

export const getTierCardColor = (tier, hover) => {
    switch(tier){
        case "s":
            return hover ? siteColors.tier.s.hover : siteColors.tier.s.card;
        case "a":
            return hover ? siteColors.tier.a.hover : siteColors.tier.a.card;
        default:
            return hover ? siteColors.tier.b.hover : siteColors.tier.b.card;
    }
}

export const getTierColor = (tier, hover) => {
    switch(tier){
        case "s":
            return hover ? siteColors.tier.s.hover : siteColors.tier.s.color;
        case "a":
            return hover ? siteColors.tier.a.hover : siteColors.tier.a.color;
        default:
            return hover ? siteColors.tier.b.hover : siteColors.tier.b.color;
    }
}

export const getThousandsNumber = (number) =>
    number
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Convert to string with thousands separated

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

    return getThousandsNumber(goldCost);
}

export const getTowerLink = (tower) => tower.name.replace(' ', '-').toLowerCase();

export const parseTowerLink = (link) =>
    link
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

export const parseProsCons = (prosCons) => prosCons.split(',').map(pc => siteProsCons[pc]);

export const parseForm = (form) => {
    const body = {
        "tower": form.tower.value,
        "tower-tier": form["tower-tier"].value,
        "top-path": form["slider-top"].value,
        "middle-path": form["slider-middle"].value,
        "bottom-path": form["slider-bottom"].value,
        "ability-path": form["ability-path"].value,
    }

    return body;
}

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
            `https://api.github.com/search/repositories?q=test`,
            { signal: controller.signal }
        );
        responseBody = await res.json();
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
