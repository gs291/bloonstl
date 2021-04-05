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

export const getMonkeyTypeColor = (type, hover) => {
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

export const getHeroColor = (heroName, hover) => {
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

export const rankColors = (name, hover) => {
    switch(name){
        case "s":
            return hover ? siteColors.rank.s.hover : siteColors.rank.s.color;
        case "a":
            return hover ? siteColors.rank.a.hover : siteColors.rank.a.color;
        case "b":
            return hover ? siteColors.rank.b.hover : siteColors.rank.b.color;
        default:
            return hover ? siteColors.rank.default.hover : siteColors.rank.default.color;
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







