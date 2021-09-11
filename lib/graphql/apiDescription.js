export default {
    "queries": {
        "title": "Queries",
        "description": "All GraphQL API queries are used to get information on Monkeys or Heroes.",
        "items": [
            {
                "name": "monkeys",
                "description": "Gets all monkeys.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query monkeys {\n    monkeys {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n    }\n}",
                        "variables": "{}"
                    }
                }
            },
            {
                "name": "monkeyById",
                "description": "Gets a monkey by ID. ID is a database identifier number starting at 0.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query monkeyById ($id: ID!) {\n    monkeyById (id: $id) {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n    }\n}",
                        "variables": "{\n  \"id\": 0\n}"
                    }
                }
            },
            {
                "name": "monkeyByName",
                "description": "Gets a monkey by name. Name is a string of the monkey name.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query monkeyByName ($name: String!) {\n    monkeyByName (name: $name) {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n    }\n}",
                        "variables": "{\n  \"name\": \"\"\n}"
                    }
                }
            },
            {
                "name": "heroes",
                "description": "Get all heroes.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query heroes {\n    heroes {\n        id\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n    }\n}",
                        "variables": "{}"
                    }
                }
            },
            {
                "name": "heroById",
                "description": "Gets a hero by ID. ID is a database identifier number starting at 0.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query heroById ($id: ID!) {\n    heroById (id: $id) {\n        id\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n    }\n}",
                        "variables": "{\n  \"id\": 0\n}"
                    }
                }
            },
            {
                "name": "heroByName",
                "description": "Gets a hero by name. Name is a string of the hero name.",
                "request": {
                    "method": "POST",
                    "body": {
                        "query": "query heroByName ($name: String!) {\n    heroByName (name: $name) {\n        id\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n        }\n        tier {\n            id\n            tier\n        }\n    }\n}",
                        "variables": "{\n  \"name\": \"\"\n}"
                    },
                }
            }
        ]
    },
    "objects": {
        "title": "Objects",
        "description": "All GraphQL API objects. Contains each field and its description.",
        "items": [
            {
                "name": "Monkey",
                "fields": [
                    { "key": "id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "name", "type": "String!", "text": "The name of the monkey." },
                    { "key": "type", "type": "String!", "text": "The class type of monkey." },
                    { "key": "description", "type": "String!", "text": "The description for the monkey." },
                    { "key": "cost_gold", "type": "Int!", "text": "The in-game gold cost." },
                    { "key": "filename", "type": "String!", "text": "The image filename." },
                    { "key": "abilities", "type": "[Ability!]!", "text": "A list of all monkey abilities." },
                    { "key": "tier", "type": "TowerTier!", "text": "The tier list rank for the monkey." },
                    { "key": "ability_tiers", "type": "[AbilityTier]", "text": "A list of tiers for different ability paths." }
                ]
            },
            {
                "name": "Hero",
                "fields": [
                    { "key": "id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "name", "type": "String!", "text": "The name of the hero." },
                    { "key": "type", "type": "String!", "text": "The class type of hero." },
                    { "key": "description", "type": "String!", "text": "The description for the hero." },
                    { "key": "cost_gold", "type": "Int!", "text": "The in-game gold cost." },
                    { "key": "cost_cash", "type": "Int!", "text": "The cash cost to own the hero." },
                    { "key": "filename", "type": "String!", "text": "The image filename." },
                    { "key": "abilities", "type": "[Ability!]!", "text": "A list of all hero abilities." },
                    { "key": "tier", "type": "TowerTier!", "text": "The tier list rank for the hero." },
                ]
            },
            {
                "name": "TowerTier",
                "fields": [
                    { "key": "id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "tier", "type": "String!", "text": "The tier list rank for the tower." },
                ]
            },
            {
                "name": "Ability",
                "fields": [
                    { "key": "id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "active", "type": "Boolean!", "text": "Indicates whether the ability has an active ability." },
                    { "key": "upgrade_path", "type": "Int!", "text": "Indicates what path the ability is on. 0, 1 or 2 for X-X-X, respectively." },
                    { "key": "upgrade_tier", "type": "Int!", "text": "Indicates what ability it is on the path. 0-4, 4 being tier 5 ability." },
                    { "key": "name", "type": "String!", "text": "The name of the ability." },
                    { "key": "description", "type": "String!", "text": "The description of the ability." },
                    { "key": "cost_gold", "type": "Int!", "text": "The in-game gold cost." },
                    { "key": "cost_xp", "type": "Int!", "text": "The xp cost to unlock the ability." },
                ]
            },
            {
                "name": "AbilityTier",
                "fields": [
                    { "key": "id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "tier", "type": "String!", "text": "The tier list rank for the ability path." },
                    { "key": "top_path", "type": "Int!", "text": "Indicates what ability is on the top ability path." },
                    { "key": "middle_path", "type": "Int!", "text": "Indicates what ability is on the middle ability path." },
                    { "key": "bottom_path", "type": "Int!", "text": "Indicates what ability is on the bottom ability path." },
                    { "key": "pros", "type": "String!", "text": "The comma delimited list of pros about the ability path." },
                    { "key": "cons", "type": "String!", "text": "The comma delimited list of cons about the ability path." }
                ]
            }
        ]
    }
}