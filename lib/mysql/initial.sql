-- MySQL bloonstl initial.sql
-- Gregory Sanchez

DROP TABLE IF EXISTS TowerStats;
DROP TABLE IF EXISTS TowerTiersInfo;
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
    `modifiers` VARCHAR(1532) NULL DEFAULT '', # (2^9 - 1) + (2^8 - 1) - (2 byte length)
    `pros` VARCHAR(255) NULL DEFAULT '',
    `cons` VARCHAR(255) NULL DEFAULT '',
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `TowerTiers` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `tier` VARCHAR(1) NOT NULL,
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
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_rnk_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `AbilityTiersInfo` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tier_id` INT(11) NOT NULL,
    `pros` VARCHAR(255) NOT NULL,
    `cons` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `ab_rnk_ifo_fk_1` FOREIGN KEY (`tier_id`) REFERENCES `AbilityTiers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `TowerTiersInfo` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `pros` VARCHAR(255) NOT NULL,
    `cons` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `twr_rnk_ifo_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `TowerStats` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `range` DECIMAL(14,4) NOT NULL,
    `pierce` INT(11) NOT NULL,
    `damage` INT(11) NOT NULL,
    `boss_damage` INT(11) NULL DEFAULT 0,
    `camo_damage` INT(11) NULL DEFAULT 0,
    `crit_damage` INT(11) NULL DEFAULT 0,
    `stun_damage` INT(11) NULL DEFAULT 0,
    `status_damage` INT(11) NULL DEFAULT 0,
    `moab_damage` INT(11) NULL DEFAULT 0,
    `fortified_moab_damage` INT(11) NULL DEFAULT 0,
    `ceramic_damage` INT(11) NULL DEFAULT 0,
    `fortified_damage` INT(11) NULL DEFAULT 0,
    `lead_damage` INT(11) NULL DEFAULT 0,
    `fortified_lead_damage` INT(11) NULL DEFAULT 0,
    `projectile_count` INT(11) NULL DEFAULT 1,
    `attack_speed` DECIMAL(9,6) NOT NULL,
    `income` INT(11) NULL DEFAULT 0,
    `cost` INT(11) NULL DEFAULT 0,
    `duration` INT(11) NULL DEFAULT 0,
    `note` VARCHAR(510) NULL DEFAULT '',
    `footprint` INT(11) NOT NULL,
    `hotkey` VARCHAR(32) NOT NULL,
    `damage_type` VARCHAR(31) NOT NULL,
    `cooldown` INT(11) NULL DEFAULT 0,
    `crit_occurance` VARCHAR(7) NULL DEFAULT '0~0',
    `delay` INT(11) NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    CONSTRAINT `twr_stats_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

