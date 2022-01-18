import ReactGA from "react-ga4";

const MEASUREMENT_ID="G-ERWW6617M8";


export const ga4Initialize = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const ga4SendPageView = () => {
    ReactGA.send("pageview");
};

export const ga4SendAbilityClick = (path, ability, tower, sandbox, towerType) => {
    if (towerType === "monkey" && path !== null) {
        path = {top_path: path.top_path, middle_path: path.middle_path, bottom_path: path.bottom_path};
    }

    ReactGA.event("select_content", {
        content_type: "ability",
        item_id: `AB_${ability.id}`,
        ability_name: ability.name,
        ability_path: ability.upgrade_path,
        ability_tier: ability.upgrade_tier,
        tower: tower,
        tower_type: towerType,
        sandbox: sandbox,
        ...path
    });
};