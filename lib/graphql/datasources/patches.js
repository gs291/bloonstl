import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import heroQueries from "../queries/heroQueries";
import monkeyQueries from "../queries/monkeyQueries";

export default class PatchesAPI extends DataSource {
    constructor({executeQuery, patches, patchVersions}) {
        super();
        this.executeQuery = executeQuery;
        this.patches = patches;
        this.patchVersions = patchVersions;
    }

    async getPatchByVersion ({version}) {
        const data = this.patches[version]
        if (!data) {
            throw new UserInputError(`Patch version (${version}) not found`);
        }
        return data;
    }

    async getLatestThreePatchUpdatesByTowerName ({name, start = 0}) {
        if (start < 0 || start >= this.patchVersions.length) { throw new UserInputError( `Invalid starting index of ${start}`); }

        const monkey = await this.executeQuery({ query: monkeyQueries.getMonkeyByName, values: [ name ] });
        const hero = await this.executeQuery({ query: heroQueries.getHeroByName, values: [ name ] });

        if (!monkey.length && !hero.length) { throw new UserInputError(`Could not find tower with name: ${name}.`); }

        const data = [];
        let i = start;
        let newStart = 0;
        let count = 0;

        for (i; (i < this.patchVersions.length) && (count !== 3); i++) {
            let patchItems = this.patches[this.patchVersions[i]].items;
            let added = false;
            let j = 0;
            const dataObj = {};

            for (j; j < patchItems.length; j++) {
                if (patchItems[j].title === "Bug Fixes & General Changes") {
                    let x = patchItems[j].items.length - 1;

                    for (x; x >= 0; x--) {
                        let patchChange = patchItems[j].items[x];
                        if (patchChange.tower && patchChange.tower === name) {
                            if (!dataObj.items) { dataObj.items = []; }

                            dataObj.release = this.patchVersions[i];
                            dataObj.items.push({
                                "title": "Bug Fixes & General Changes",
                                "items":  patchChange.items
                            });
                            newStart = i + 1;
                            added = true;
                            break;
                        }
                    }
                }
                if (patchItems.title === "Balance Changes") {
                    let x = 0;
                    for (x; x < patchItems[j].items.length; x++) {
                        let patchChange = patchItems[j].items[x];
                        if (patchChange.tower && patchChange.tower === name) {
                            if (!dataObj.items) { dataObj.items = []; }

                            dataObj.release = this.patchVersions[i];
                            dataObj.items.push({
                                "title": "Balance Changes",
                                "description": patchChange.description,
                                "items":  patchChange.items
                            });
                            newStart = i + 1;
                            added = true;
                            break;
                        }
                    }
                }
            }
            if (added) {
                count += 1;
                data.push(dataObj);
            }
        }

        if (newStart === this.patchVersions.length || count === 0) {
            newStart = -1;
        }
        return {
            start: newStart,
            items: data
        };
    }
}