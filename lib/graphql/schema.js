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
