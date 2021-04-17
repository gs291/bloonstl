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

export const getMonkeyTypeColor = (type, tier, card = false, hover = false) => {
    if (tier){
        return getTierCardColor(tier, hover);
    }

    switch(type) {
        case "Primary":
            return card
                ? hover ? siteColors.monkeyType.primary.hover : siteColors.monkeyType.primary.card
                : siteColors.monkeyType.primary.color ;
        case "Military":
            return card
                ? hover ? siteColors.monkeyType.military.hover : siteColors.monkeyType.military.card
                : siteColors.monkeyType.military.color ;
        case "Magic":
            return card
                ? hover ? siteColors.monkeyType.magic.hover : siteColors.monkeyType.magic.card
                : siteColors.monkeyType.magic.color ;
        default:
            return card
                ? hover ? siteColors.monkeyType.support.hover : siteColors.monkeyType.support.card
                : siteColors.monkeyType.support.color;
    }
}

export const getHeroColor = (heroName, tier, card = false, hover = false) => {
    if (tier){
        return getTierCardColor(tier, hover);
    } else if(card) {
        return hover ? siteColors.heroes.hover : siteColors.heroes.card.dark;
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

export const getTierCardColor = (tier, hover) => {
    switch(tier){
        case "s":
            return hover ? siteColors.tier.s.hover.dark : siteColors.tier.s.card.dark;
        case "a":
            return hover ? siteColors.tier.a.hover.dark : siteColors.tier.a.card.dark;
        default:
            return hover ? siteColors.tier.b.hover.dark : siteColors.tier.b.card.dark;
    }
}

export const getTierColor = (tier, hover) => {
    switch(tier){
        case "s":
            return hover ? siteColors.tier.s.hover.dark : siteColors.tier.s.color;
        case "a":
            return hover ? siteColors.tier.a.hover.dark : siteColors.tier.a.color;
        default:
            return hover ? siteColors.tier.b.hover.dark : siteColors.tier.b.color;
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
