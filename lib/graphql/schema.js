import { gql } from 'apollo-server-micro';

export default gql`
    type Monkey {
        id: ID!
        name: String!
        type: String!
        description: String!
        cost_gold: Int!
    }
    
    type Hero {
        id: ID!
        name: String!
        description: String!
        cost_gold: Int!
        cost_cash: Int!
    }
    
    type Tower {
        id: ID!,
        monkey_id: ID,
        hero_id: ID,
    }
    
    type Ability {
        id: ID!
        monkey: Tower!
        path: Int!
        tier: Int!
        name: String!
        description: String!
        cost_xp: Int!
        cost_gold: Int!
        icon: String!
        active: Boolean!
    }
    
    type Query {
        monkeys: [Monkey]!
        monkeysWithTier: [Monkey]!
        monkey(name: String!): Monkey
        monkeyTypes(type: String!): [Monkey]
        
        towers: [Tower]!
        
        heroes: [Hero]!
        heroesWithTier: [Hero]!
        hero(name: ID!): Hero
        
        monkey_abilities(mid: ID!): [Ability]!
        hero_abilities(hid: ID!): [Ability]!
    }
    
`;