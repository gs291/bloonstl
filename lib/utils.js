import { image_dir_url } from "../pages";

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