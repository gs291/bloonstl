import ReactGA from "react-ga4";

import {checkIfValidPath} from "./utils";

const MEASUREMENT_ID = "G-ERWW6617M8";

export const SELECT_CONTENT_ABILITY = "ability";
export const SELECT_CONTENT_BUTTON = "button";
export const SELECT_CONTENT_CARD = "card";
export const SELECT_CONTENT_CHECKBOX = "checkbox";
export const SELECT_CONTENT_CHIP = "chip";
export const SELECT_CONTENT_EXPAND = "expand";
export const SELECT_CONTENT_LINK = "link";
export const SELECT_CONTENT_STAT = "stat";

export const ABILITY_BUTTON_PREFIX = "AB_";
export const BUTTON_PREFIX = "BTN_";
export const CARD_PREFIX = "CD_";
export const CHECKBOX_PREFIX = "CB_";
export const CHIP_PREFIX = "CP_";
export const EXPAND_PREFIX = "ED_";
export const LINK_PREFIX = "LK_";
export const STAT_PREFIX = "ST_";

export const ga4Initialize = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const ga4SendPageView = () => {
    ReactGA.send("pageview");
};

export const ga4SendSelectContent = (type, params) => {
    ReactGA.event("select_content", {
        content_type: type,
        ...params
    });
};

export const ga4SendAbilityClick = (path, ability, tower, sandbox, towerType) => {
    if (towerType === "monkey" && path !== null) {
        path = {top_path: path.top_path, middle_path: path.middle_path, bottom_path: path.bottom_path};
        const err = checkIfValidPath(path);
        path.path_is_valid = err === undefined;
    }

    ga4SendSelectContent(SELECT_CONTENT_ABILITY, {
        item_id: `${ABILITY_BUTTON_PREFIX}${ability.id}`,
        ability_name: ability.name,
        ability_path: ability.upgrade_path,
        ability_tier: ability.upgrade_tier,
        tower: tower,
        tower_type: towerType,
        sandbox_mode: sandbox,
        ...path
    })
};