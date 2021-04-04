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

export const getHeroActivatedAbilityText = (description) => description.split(": ");

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


export const siteLinks = {
    "left": {
        "home": {
            "key": -1,
            "path": "/",
            "text": "Bloons"
        }
    },
    "middle": [
        {
            "key": 0,
            "path": "/tierlist",
            "text": "Tier List"
        },
        {
            "key": 1,
            "path": "/monkeys",
            "text": "Monkeys"
        },
        {
            "key": 2,
            "path": "/heroes",
            "text": "Heroes"
        }
    ],
    "right": {
        "login": {
            "key": 100,
            "path": "/login",
            "text": "Login"
        }
    }
}

export const siteColors = {
    "nav": {
        "dark": "#1F1F1F"
    },
    "background": {
        "hover": {
            "dark": "#3B3B3B"
        },
        "main": {
            "dark": "#121212"
        },
        "card" : {
            "dark": "#373737"
        },
        "tooltip": {
            "dark": "#000000"
        },
        "filters": {
            "dark": "#1D1D1D"
        },
        "odd": {
            "dark": "#2B2B2B"
        }
    },
    "card": {
        "dark": "#1D1D1D"
    },
    "rank": {
        "s": {
            "color": "#FF7F7F",
            "hover": "#FF667F"
        },
        "a": {
            "color": "#FFBF7F",
            "hover": "#B28558"
        },
        "b": {
            "color": "#FFDF7F",
            "hover": "#B29C58"
        },
        "default": {
            "color": "#964B00",
            "hover": "#492400"
        }
    },
    "monkeyType": {
        "primary": {
            "color": "#ADD8E6",
            "hover": "#739099"
        },
        "military": {
            "color": "#90EE90",
            "hover": "#61A161"
        },
        "magic": {
            "color": "#9370DB",
            "hover": "#5F488E"
        },
        "support": {
            "color": "#CD853F",
            "hover": "#805327"
        }
    },
    "hero": {
        "quincy": {
            "color": "#2CD7FF",
            "hover": "#1E96B2"
        },
        "gwendolin": {
            "color": "#FFD900",
            "hover": "#B29700"
        },
        "strikerJones": {
            "color": "#73BEDE",
            "hover": "#4B7C91"
        },
        "obynGreenfoot": {
            "color": "#10C3C6",
            "hover": "#097779"
        },
        "sauda": {
            "color": "#73BEDE",
            "hover": "#4B7C91"
        },
        "captainChurchill": {
            "color": "#73BEDE",
            "hover": "#4B7C91"
        },
        "benjamin": {
            "color": "#10C3C6",
            "hover": "#097779"
        },
        "ezili": {
            "color": "#DC00FD",
            "hover": "#9900B0"
        },
        "patFusty": {
            "color": "#79FF1B",
            "hover": "#54B212"
        },
        "adora": {
            "color": "#FFD900",
            "hover": "#B29700"
        },
        "admiralBrickell": {
            "color": "#FFDC00",
            "hover": "#B29900"
        }
    },
    "tower": {
        "description": "#CCCCCC",
        "gold": "#EBA407",
        "cash": "#9AE42C"
    }
}

export const siteSizes = {
    "nav": {
        "height": "100px",
        "link": {
            "height": "75px"
        }
    }
}