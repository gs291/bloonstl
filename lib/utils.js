export const image_dir_url = "/images/";

export const font_family = [
        "'Luckiest Guy'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(', ');

export function getImageUrl( img_filename, upgrade_path, upgrade_tier ) {
    let image_file_path;
    const [filename, ext] = img_filename.split('.');

    if(typeof upgrade_path === "number" && typeof upgrade_tier === "number") {
        image_file_path = `${filename}/${filename}${upgrade_path}${upgrade_tier}.${ext}`;

        return image_dir_url + image_file_path;
    }

    image_file_path = `${filename}/${img_filename}`;
    return image_dir_url + image_file_path;
}

export const getMonkeyTypeColor = (type, hover) => {
    if (type === "Primary") {
        return hover ?
            siteColors.monkeyType.primary.hover :
            siteColors.monkeyType.primary.color;
    } else if (type === "Military") {
        return hover ?
            siteColors.monkeyType.military.hover :
            siteColors.monkeyType.military.color;
    } else if (type === "Magic") {
        return hover ?
            siteColors.monkeyType.magic.hover :
            siteColors.monkeyType.magic.color;
    }
    return hover ?
        siteColors.monkeyType.support.hover :
        siteColors.monkeyType.support.color;
}

export const rankColors = (name, hover) => {
    if (name === "s") {
        return hover ?
            siteColors.rank.s.hover :
            siteColors.rank.s.hover;
    } else if (name === "a") {
        return hover ?
            siteColors.rank.a.hover :
            siteColors.rank.a.hover;
    } else if (name === "b") {
        return hover ?
            siteColors.rank.b.hover :
            siteColors.rank.b.hover;
    }
    return hover ?
        siteColors.rank.default.hover :
        siteColors.rank.default.hover;
}

export const goldCost = (gold, difficulty) => {
    switch (difficulty) {
        case "easy":
            return gold * 0.85;
        case "hard":
            return gold * 1.08;
        case "impoppable":
            return gold * 1.20;
        default:
            return gold;
    }
}

export const getMonkeyLink = (monkey) => monkey.name.replace(' ', '-').toLowerCase();

export const parseMonkeyLink = (link) =>
    link
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');


export const siteLinks = {
    "left": {
        "home": {
            "key": -1,
            "path": "/",
            "text": "Home"
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
            "dark": "#151515"
        },
        "main": {
            "dark": "#121212"
        },
        "card" : {
            "dark": "#373737"
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
            "hover": "#FD997F"
        },
        "b": {
            "color": "#FFDF7F",
            "hover": "#FFFF7F"
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
    }
}

export const siteSizes = {
    "nav": {
        "height": "75px"
    }
}