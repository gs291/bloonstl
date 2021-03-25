export const image_dir_url = "/images/";

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
        return hover ? "#739099" : "#ADD8E6";
    } else if (type === "Military") {
        return hover ? "#61A161" : "#90EE90";
    } else if (type === "Magic") {
        return hover ? "#5F488E" : "#9370DB";
    }
    return hover ? "#805327" : "#CD853F";
}

export const rankColors = (name, hover) => {
    if (name === "s") {
        return hover ? "#FF667F" : "#FF7F7F";
    } else if (name === "a") {
        return hover ? "#FD997F" : "#FFBF7F";
    } else if (name === "b") {
        return hover ? "#FFFF7F" : "#FFDF7F";
    }
    return "#964B00";
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
    }
}

export const siteSizes = {
    "nav": {
        "height": "75px"
    }
}