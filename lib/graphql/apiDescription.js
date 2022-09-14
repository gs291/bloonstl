const apiDescription = {
    "queries": {
        "title": "Queries",
        "description": "All GraphQL API queries are used to get information on Monkeys or Heroes.",
        "items": [
            {
                "name": "monkeys",
                "description": "Gets all monkeys.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    monkeys: [<strong>Monkey</strong>]!\n}",
                    "body": {
                        "query": "query monkeys {\n    monkeys {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{}"
                    }
                }
            },
            {
                "name": "monkeyById",
                "description": "Gets a monkey by ID. ID is a database identifier number starting at 0.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    monkeyById (id: <strong>ID!</strong>): <strong>Monkey</strong>\n}",
                    "body": {
                        "query": "query monkeyById ($id: ID!) {\n    monkeyById (id: $id) {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{\n  \"id\": 0\n}"
                    }
                }
            },
            {
                "name": "monkeyByName",
                "description": "Gets a monkey by name. Name is a string of the monkey name.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    monkeyByName (name: <strong>String!</strong>): <strong>Monkey</strong>\n}",
                    "body": {
                        "query": "query monkeyByName ($name: String!) {\n    monkeyByName (name: $name) {\n        id\n        name\n        type\n        description\n        cost_gold\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        ability_tiers {\n            id\n            tier\n            top_path\n            middle_path\n            bottom_path\n            pros\n            cons\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{\n  \"name\": \"Wizard Monkey\"\n}"
                    }
                }
            },
            {
                "name": "heroes",
                "description": "Get all heroes.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    heroes: [<strong>Hero</strong>]!\n}",
                    "body": {
                        "query": "query heroes {\n    heroes {\n        id\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{}"
                    }
                }
            },
            {
                "name": "heroById",
                "description": "Gets a hero by ID. ID is a database identifier number starting at 0.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    heroById (id: <strong>ID!</strong>): <strong>Hero</strong>\n}",
                    "body": {
                        "query": "query heroById ($id: ID!) {\n    heroById (id: $id) {\n        id\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{\n  \"id\": 0\n}"
                    }
                }
            },
            {
                "name": "heroByName",
                "description": "Gets a hero by name. Name is a string of the hero name.",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    heroByName (name: <strong>String!</strong>): <strong>Hero</strong>\n}",
                    "body": {
                        "query": "query heroByName ($name: String!) {\n    heroByName (name: $name) {\n        titleid\n        name\n        type\n        description\n        cost_gold\n        cost_cash\n        filename\n        abilities {\n            id\n            active\n            upgrade_path\n            upgrade_tier\n            name\n            description\n            cost_gold\n            cost_xp\n            modifiers\n            pros\n            cons\n        }\n        tier {\n            id\n            tier\n        }\n        stats {\n            tower_stats_id\n            range\n            pierce\n            damage\n            boss_damage\n            camo_damage\n            crit_damage\n            stun_damage\n            status_damage\n            moab_damage\n            fortified_moab_damage\n            ceramic_damage\n            fortified_damage\n            lead_damage\n            fortified_lead_damage\n            projectile_count\n            attack_speed\n            income\n            cost\n            duration\n            note\n            footprint\n            hotkey\n            damage_type\n            cooldown\n            crit_occurance\n            delay\n        }\n    }\n}",
                        "variables": "{\n  \"name\": \"Captain Churchill\"\n}"
                    },
                }
            },
            {
                "name": "patchByVersion",
                "description": "Gets patch update notes by version number. Version is a string of the version number. The largest depth for recursive items is 4 (Items -> Items -> Items -> Items).",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    patchByVersion (version: <strong>String!</strong>): <strong>Patch</strong>\n}",
                    "body": {
                        "query": "query patchByVersion ($version: String!) {\n    patchByVersion (version: $version) {\n        release\n        items {\n            title\n            text\n            tower\n            type\n            description\n            items {\n                  ...\n            }\n    }\n}",
                        "variables": "{\n  \"version\": \"29.0\"\n}"
                    },
                }
            },
            {
                "name": "latestThreePatchUpdatesByTowerName",
                "description": "Gets the the latest patch updates by tower name. Name is a string of the monkey/hero name. Start is the starting pagination index (defaults to 0). The largest depth for recursive Patch items is 4 (Items -> Items -> Items -> Items).",
                "request": {
                    "method": "POST",
                    "def": "type Query {\n    latestThreePatchUpdatesByTowerName (name: <strong>String!</strong>, start: <strong>Int</strong>): <strong>PatchUpdate</strong>\n}",
                    "body": {
                        "query": "query latestThreePatchUpdatesByTowerName ($name: String!, $start: Int) {\n    latestThreePatchUpdatesByTowerName (name: $name, start: $start) {\n        start\n        items {\n            release\n            items {\n                  title\n                  text\n                  tower\n                  type\n                  description\n                  items {\n                        ...\n                  }\n            }\n    \n}",
                        "variables": "{\n  \"name\": \"Captain Churchill\"\n}"
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
                    { "key": "ability_tiers", "type": "[AbilityTier]", "text": "A list of tiers for different ability paths." },
                    { "key": "stats", "type": "TowerStats", "text": "The default tower stats." }
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
                    { "key": "stats", "type": "TowerStats", "text": "The default tower stats." }
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
                    { "key": "modifiers", "type": "String!", "text": "A multi-delimited string list of modifiers the ability changes." },
                    { "key": "pros", "type": "String!", "text": "The comma delimited string list of pros about the specific ability." },
                    { "key": "cons", "type": "String!", "text": "The comma delimited string list of cons about the specific ability." },
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
                    { "key": "pros", "type": "String!", "text": "The comma delimited string list of pros about the ability path." },
                    { "key": "cons", "type": "String!", "text": "The comma delimited string list of cons about the ability path." }
                ]
            },
            {
                "name": "TowerStats",
                "fields": [
                    { "key": "tower_stats_id", "type": "ID!", "text": "Identifies the primary key from the database." },
                    { "key": "range", "type": "Float!", "text": "The default range the tower begins with." },
                    { "key": "pierce", "type": "Int!", "text": "The default amount of pierce the tower begins with." },
                    { "key": "damage", "type": "Int!", "text": "The default amount of damage the tower begins with." },
                    { "key": "boss_damage", "type": "Int", "text": "The default amount of boss damage the tower begins with." },
                    { "key": "camo_damage", "type": "Int", "text": "The default amount of camouflage damage the tower begins with." },
                    { "key": "crit_damage", "type": "Int", "text": "The default amount of critical damage the tower begins with." },
                    { "key": "stun_damage", "type": "Int", "text": "The default amount of stun damage the tower begins with." },
                    { "key": "status_damage", "type": "Int", "text": "The default amount of status damage the tower begins with." },
                    { "key": "moab_damage", "type": "Int", "text": "The default amount of M.O.A.B damage the tower begins with." },
                    { "key": "fortified_moab_damage", "type": "Int", "text": "The default amount of fortified M.O.A.B damage the tower begins with." },
                    { "key": "ceramic_damage", "type": "Int", "text": "The default amount of ceramic damage the tower begins with." },
                    { "key": "fortified_damage", "type": "Int", "text": "The default amount of fortified damage the tower begins with." },
                    { "key": "lead_damage", "type": "Int", "text": "The default amount of lead damage the tower begins with." },
                    { "key": "fortified_lead_damage", "type": "Int", "text": "The default amount of fortified lead damage the tower begins with." },
                    { "key": "projectile_count", "type": "Int!", "text": "The default amount of projectiles the tower begins with." },
                    { "key": "attack_speed", "type": "Float!", "text": "The default attack speed (A.K.A Reload Speed) the tower begins with." },
                    { "key": "income", "type": "Int", "text": "The default income the tower begins with." },
                    { "key": "cost", "type": "Int", "text": "The default cost the ability is." },
                    { "key": "duration", "type": "Int", "text": "The default duration time the tower begins with." },
                    { "key": "note", "type": "String", "text": "A note associated with the tower." },
                    { "key": "footprint", "type": "Int!", "text": "The default footprint the tower is sized to." },
                    { "key": "hotkey", "type": "String!", "text": "The default hotkey the tower is assigned to." },
                    { "key": "damage_type", "type": "String!", "text": "The default damage type the tower begins with." },
                    { "key": "cooldown", "type": "Int", "text": "The default cooldown time the tower begins with." },
                    { "key": "crit_occurance", "type": "String", "text": "The default critical chance the tower begins with." },
                    { "key": "delay", "type": "Int", "text": "The default delay time the tower begins with." }
                ]
            },
            {
                "name": "PatchUpdate",
                "fields": [
                    { "key": "start", "type": "Int!", "text": "Indicates the next index for pagination. A start of -1 signifies no more data to be fetched." },
                    { "key": "items", "type": "[Patch]", "text": "A list of different patch versions and their notes on the patch update." },

                ]
            },
            {
                "name": "Patch",
                "fields": [
                    { "key": "release", "type": "String!", "text": "The release date of the patch in the form YYYY-MM-DD." },
                    { "key": "items", "type": "[Items]!", "text": "A list of items containing all the patch notes." },
                ]
            },
            {
                "name": "Items",
                "fields": [
                    { "key": "title", "type": "String", "text": "The title for the item." },
                    { "key": "text", "type": "String", "text": "The text for the item." },
                    { "key": "tower", "type": "String", "text": "The tower associated with the item." },
                    { "key": "type", "type": "String", "text": "The monkey tower type (e.g. Primary)." },
                    { "key": "description", "type": "String", "text": "The description for the item." },
                    { "key": "items", "type": "[Items]", "text": "A list of items (recursive)." },
                ]
            }
        ]
    }
}

export default apiDescription;
