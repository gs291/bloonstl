import { gql } from 'apollo-server-micro';

export default gql`
    type Monkey {
        id: ID!
        name: String!
        type: String!
        description: String!
        cost_gold: Int!
        filename: String!
    }
    
    type Hero {
        id: ID!
        name: String!
        type: String!
        description: String!
        cost_gold: Int!
        cost_cash: Int!
        filename: String!
    }
    
    type Tower {
        id: ID!,
        monkey_id: ID,
        hero_id: ID,
    }
    
    type Ability {
        id: ID!
        tower_id: ID!
        active: Boolean!
        upgrade_path: Int!
        upgrade_tier: Int!
        name: String!
        description: String!
        cost_gold: Int!
        cost_xp: Int!
    }

    type TowerRanks {
        id: ID!
        tower_id: ID!
        tier: String!
        votes: Int!
    }

    type AbilityRanks {
        id: ID!
        tower_id: ID!
        tier: String!
        top_path: Int!
        middle_path: Int!
        bottom_path: Int!
        votes: Int!
    }

    type AbilityRanksInfo {
        id: ID!
        rank_id: ID!
        pros: String!
        cons: String!
    }
    
    type Query {
        monkeys: [Monkey]!
        monkey(name: String!): Monkey
        monkeyTypes(type: String!): [Monkey]
        
        towers: [Tower]!
        
        heroes: [Hero]!
        hero(name: String!): Hero
        
        monkeyAbilities(mid: ID!): [Ability]!
        heroAbilities(hid: ID!): [Ability]!
    }
`;
