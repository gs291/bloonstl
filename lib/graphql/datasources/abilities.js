const { DataSource } = require("apollo-datasource");

export default class AbilitiesAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllAbilities() {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT T.id as mt_id, Monkeys.id as m_id FROM Monkeys
        JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
        JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.mt_id = Abilities.at_id
ORDER BY Tower.m_id, Abilities.upgrade_path, Abilities.upgrade_tier;`,
                values: []
            });
            if (!abilities) { throw `Could not find abilities.`; }

            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByMonkeyId({mid}) {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT T.id as mt_id, Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.id = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.mt_id = Abilities.at_id
ORDER BY Tower.m_id, Abilities.upgrade_path, Abilities.upgrade_tier;
`,
                values: [ mid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByHeroId({hid}) {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT T.id as ht_id, Heroes.id as h_id FROM Heroes
            JOIN Towers T on Heroes.id = T.hero_id
        WHERE Heroes.id = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.ht_id = Abilities.at_id
ORDER BY Tower.h_id, Abilities.upgrade_tier;
`,
                values: [ hid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByHeroId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllMonkeyAbilityRanksWithInfo() {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityRanks.id as ar_id, 
               AbilityRanks.tier, 
               AbilityRanks.top_path, 
               AbilityRanks.middle_path, 
               AbilityRanks.bottom_path,
               AbilityRanks.votes
        FROM AbilityRanks
            JOIN Towers T on AbilityRanks.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityRanksInfo.id as ari_id,
               AbilityRanksInfo.rank_id, 
               AbilityRanksInfo.pros,
               AbilityRanksInfo.cons
        FROM AbilityRanksInfo
            JOIN AbilityRanks AR on AbilityRanksInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.ar_id;

`,
                values: [  ]
            });
            if (!abilities) { throw `Could not find abilities ranks with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeyAbilityRanksWithInfo DataSource Error: ${e}`);
            return [];
        }
    }

    async getMonkeyByNameAbilityRanksWithInfo({ name }) {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.name = ?
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityRanks.id as ar_id, 
               AbilityRanks.tier, 
               AbilityRanks.top_path, 
               AbilityRanks.middle_path, 
               AbilityRanks.bottom_path,
               AbilityRanks.votes
        FROM AbilityRanks
            JOIN Towers T on AbilityRanks.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityRanksInfo.id as ari_id,
               AbilityRanksInfo.rank_id, 
               AbilityRanksInfo.pros,
               AbilityRanksInfo.cons
        FROM AbilityRanksInfo
            JOIN AbilityRanks AR on AbilityRanksInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.ar_id;

`,
                values: [ name ]
            });
            if (!abilities) { throw `Could not find abilities ranks with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getMonkeyByNameAbilityRanksWithInfo DataSource Error: ${e}`);
            return [];
        }
    }
}