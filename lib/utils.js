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