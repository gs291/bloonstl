import {DataSource} from "apollo-datasource";
import {ApolloError, UserInputError} from "apollo-server-micro";

import bloonQueries from "../queries/bloonQueries";


/**
 * Bloons class representing a DataSource for the GraphQL API
 * @extends DataSource
 */
export default class BloonsAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
        this.bloons = {};
    }

    parseBosses(boss) {
        const type = boss.varName.split('-');
        if (type.length === 1 || (type.length === 2 && type[1] === "e")) {
            return {
                ...boss,
                type: type.length === 1 ? 0 : 1, //0: Regular, 1: Elite
                rbe: boss.rbe ? boss.rbe.split(',') : null,
                hp: boss.hp ? boss.hp.split(',') : null,
                speed: boss.speed ? boss.speed.split(',') : null,
                immune: boss.immune ? boss.immune.split(',') : null
            }
        } else if (type.length === 2 && (type[1] === "s" || type[1] === "es")) {
            const tableNameSplit = boss.name.split('|');

            return {
                type: 2, //Special
                id: boss.id,
                varName: boss.varName,
                firstSpecial: {
                    name: tableNameSplit[0],
                    values: boss.rbe.split(';')
                },
                secondSpecial: {
                    name: tableNameSplit[1],
                    values: boss.hp.split(';')
                },
                notes: boss.speed
            }
        } else {
            return boss;
        }
    }

    /**
     * Fetches all the bloons from the database
     *
     * @async
     *
     * @return {Array} Array list of all bloons
     */
    async getAllBloons() {
        const bloons = await this.executeQuery({
            query: bloonQueries.getAllBloons,
            values: []
        });
        const bosses = await this.executeQuery({
            query: bloonQueries.getAllBossBloons,
            values: []
        });

        if (!bloons.length || !bosses.length) {
            throw new ApolloError(`Internal Server Error:\n -- getAllBloons DataSource Error: Could not find bloons.`);
        }

        const bossesParsed = (() => {const b = []; bosses.forEach(boss => b.push(this.parseBosses(boss))); return b;})();

        return {
            bloons: bloons,
            bosses: bossesParsed
        };
    }

    /**
     * Fetches the Bloon given a specific id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Bloon database id
     *
     * @return {Object} Bloon/Boss database object
     */
    async getBloonById({id}) {
        const bloon = await this.executeQuery({
            query: bloonQueries.getBloonByID,
            values: [ id ]
        });
        if (!bloon.length) {
            const boss = await this.executeQuery({
                query: bloonQueries.getBossByID,
                values: [ id ]
            });
            if (!boss.length) {
                throw new UserInputError(`Could not find a Bloon with id: ${id}.`);
            } else {
                return this.parseBosses(boss[0])
            }
        } else {
            return bloon[0];
        }
    }

    /**
     * Fetches the Bloon given a specific name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.varName Bloon database name
     *
     * @return {Object} Bloon/Boss database object
     */
    async getBloonByVarName({varName}) {
        const bloon = await this.executeQuery({
            query: bloonQueries.getBloonByName,
            values: [ varName ]
        });
        if (!bloon.length) {
            const boss = await this.executeQuery({
                query: bloonQueries.getBossByName,
                values: [ varName ]
            });
            if (!boss.length) {
                throw new UserInputError(`Could not find a Bloon with name: ${name}.`);
            }  else {
                const bossParsed = this.parseBosses(boss[0]);
                if (bossParsed.type !== 0) {
                    throw new UserInputError(`Could not find a Bloon with name: ${name}.`);
                }

                const bossSpecial = await this.executeQuery({
                    query: bloonQueries.getBossByName,
                    values: [ `${varName}-s` ]
                });
                const bossElite = await this.executeQuery({
                    query: bloonQueries.getBossByName,
                    values: [ `${varName}-e` ]
                });
                const bossEliteSpecial = await this.executeQuery({
                    query: bloonQueries.getBossByName,
                    values: [ `${varName}-es` ]
                });

                bossParsed.special = bossSpecial[0];
                bossParsed.elite = bossElite[0];
                bossParsed.elite.special = bossEliteSpecial[0];

                return bossParsed;
            }
        } else {
            return bloon[0];
        }
    }
}