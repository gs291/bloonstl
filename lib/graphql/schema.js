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
        monkeyByName(name: String!): Monkey
        
        monkeys: [Monkey]!
        monkeysByType(type: String!): [Monkey]
        
        towers: [Tower]!
        
        heroByName(name: String!): Hero

        heroes: [Hero]!
        
        monkeyAbilitiesByMonkeyId(mid: ID!): [Ability]!
        heroAbilitiesById(hid: ID!): [Ability]!
    }
`;
