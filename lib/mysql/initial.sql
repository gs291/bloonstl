-- MySQL bloonstl initial.sql
-- Gregory Sanchez

DROP TABLE IF EXISTS AbilityTiersInfo;
DROP TABLE IF EXISTS TowerTiers;
DROP TABLE IF EXISTS AbilityTiers;
DROP TABLE IF EXISTS Abilities;
DROP TABLE IF EXISTS Towers;
DROP TABLE IF EXISTS Monkeys;
DROP TABLE IF EXISTS Heroes;

CREATE TABLE `Monkeys` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(31) NOT NULL,
    `type` VARCHAR(31) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `cost_gold` INT(11) NOT NULL,
    `filename` VARCHAR(31) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Heroes` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(31) NOT NULL,
    `type` VARCHAR(31) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `cost_gold` INT(11) NOT NULL,
    `cost_cash` INT(11) NOT NULL,
    `filename` VARCHAR(31) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Towers` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `hero_id` INT(11) DEFAULT NULL,
    `monkey_id` INT(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `twr_fk_1` FOREIGN KEY (`hero_id`) REFERENCES `Heroes` (`id`) ON DELETE CASCADE,
    CONSTRAINT `twr_fk_2` FOREIGN KEY (`monkey_id`) REFERENCES `Monkeys` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Abilities` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `upgrade_path` TINYINT(1) NOT NULL,
    `upgrade_tier` TINYINT(2) NOt NULL,
    `name` VARCHAR(31) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `cost_gold` MEDIUMINT(6) NOT NULL,
    `cost_xp` MEDIUMINT(6) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `TowerTiers` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `tier` VARCHAR(1) NOT NULL,
    `votes` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `twr_rnk_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `AbilityTiers` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `tier` VARCHAR(1) NOT NULL,
    `top_path` TINYINT(1) NOT NULL,
    `middle_path` TINYINT(1) NOT NULL,
    `bottom_path` TINYINT(1) NOT NULL,
    `votes` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_rnk_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- DOCS:
--   - abil: Ability
--   - atksp: Attack Speed
--   - bad: B.A.D (Big Airship of Doom)
--   - bfb: B.F.B (Brutal Floating Behemoth)
--   - bln: Bloons
--   - blnc: Balanced
--   - buff: Buffs Towers
--   - camo: Camo Bloons
--   - cc: Crowd Control
--   - cd: Ability Cool down
--   - chep: Cheap
--   - chmp: Chimps Mode
--   - cm: Ceramics
--   - dps: Damage Per Second
--   - ddt: D.D.T (Dark Dirigible Titan)
--   - eg: Early Game
--   - fbl: Fortified Bloons
--   - fcm: Fortified Ceramics
--   - gbl: Global
--   - grpb: Grouped Bloons
--   - kb: Knockback
--   - lead: Lead Bloons
--   - lg: Late Game
--   - map: Map Specific Tower
--   - mg: Mid Game
--   - micr: Micromanage
--   - moab: M.O.A.B (Massive Ornary Air Blimp)
--   - purp: Purple Blooons
--   - rang: Range
--   - scm: Super Ceramics
--   - spam: Spam Towers required
--   - stnb: Stuns Bloons
--   - sub: Submerged
--   - supp: Support
--   - time: Ability Timing
--   - trkp: Track Placement
--   - vis: Visibility
--   - zomg: Z.O.M.G (Zeppelin of Mighty Gargantuaness)
CREATE TABLE `AbilityTiersInfo` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `rank_id` INT(11) NOT NULL,
    `pros` VARCHAR(255) NOT NULL,
    `cons` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_rnk_ifo_fk_1` FOREIGN KEY (`rank_id`) REFERENCES `AbilityTiers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
