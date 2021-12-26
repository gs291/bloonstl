import { gql } from 'apollo-server-micro';

export default gql`
    type Monkey {
        id: ID!
        name: String!
        type: String!
        description: String!
        cost_gold: Int!
        filename: String!
        abilities: [Ability!]!
        tier: TowerTier!
        ability_tiers: [AbilityTier]
        stats: TowerStats
    }
    
    type Hero {
        id: ID!
        name: String!
        type: String!
        description: String!
        cost_gold: Int!
        cost_cash: Int!
        filename: String!
        abilities: [Ability!]!
        tier: TowerTier!
        stats: TowerStats
    }

    type TowerStats {
        tower_stats_id: ID!
        range: Float!,
        pierce: Int!,
        damage: Int!,
        boss_damage: Int,
        moab_damage: Int,
        fortified_moab_damage: Int,
        ceramic_damage: Int,
        fortified_damage: Int,
        lead_damage: Int,
        fortified_lead_damage: Int,
        projectile_count: Int!,
        attack_speed: Float!,
        income: Int,
        duration: Int,
        note: String,
        footprint: Int!,
        hotkey: String!,
        damage_type: String!,
    }

    type TowerTier {
        id: ID!
        tier: String!
    }
    
    type Ability {
        id: ID!
        active: Boolean!
        upgrade_path: Int!
        upgrade_tier: Int!
        name: String!
        description: String!
        cost_gold: Int!
        cost_xp: Int!
        modifier: String!
    }

    type AbilityTier {
        id: ID!
        tier: String!
        top_path: Int!
        middle_path: Int!
        bottom_path: Int!
        pros: String!
        cons: String!
    }
    
    type Items {
        title: String
        text: String
        tower: String
        type: String
        description: String
        items: [Items]
    }
    
    type Patch {
        release: String!
        items: [Items]!
    }
    
    type Query {
        monkeys: [Monkey]!
        monkeyById(id: ID!): Monkey
        monkeyByName(name: String!): Monkey

        heroes: [Hero]!
        heroById(id: ID!): Hero
        heroByName(name: String!): Hero

        patchByVersion(version: String!): Patch
    }
`;
