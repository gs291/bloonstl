const { DataSource } = require('apollo-datasource');

export default class AbilitiesAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAbilitiesByMonkeyId({monkeyID}) {
        // return this.data.filter(ability => ability.monkeyid === monkeyID);
        try {
            const abilities = await this.executeQuery({
                query: "SELECT * FROM Abilities",
                values: []
            });
            if (!abilities) {
                throw `Could not find abilities.`;
            }
            return abilities[0];
        } catch (e) {
            throw new Error(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
        }
    }
}